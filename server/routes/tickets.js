const express = require('express');
const pool = require('../db');
const authMiddleware = require('../middleware/auth');

const router = express.Router();
router.use(authMiddleware);

router.post('/', async (req, res) => {
    try {
        const {title, description, priority} = req.body;
        const result = await pool.query(
            `INSERT INTO tickets (title, description, priority, created_by)
            VALUES ($1, $2, $3, $4) RETURNING *`,
            [title, description, priority || 'medium', req.user.id]
        );
        res.status(201).json(result.rows[0]);  
    }   catch (err){
        res.status(400).json({error: err.message});
    }
});

router.get('/', async (req,res) => {
    try{
        const query = req.user.role === 'agent'
        ? 'SELECT * FROM tickets ORDER BY created_at DESC'
        : 'SELECT * FROM tickets WHERE created_by = $1 ORDER BY created_at DESC';
        const params = req.user.role === 'agent' ? [] :  [req.user.id];
        const result = await pool.query(query, params);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

router.get('/:id', async (req, res) =>{
    try {
        const result =await pool.query('SELECT * FROM tickets WHERE id = $1', [req.params.id]);
        if (result.rows.length === 0) return res.status(404).json({error: 'Not found'});
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

router.patch('./:id', async (req,res) =>{
    try {
        const {status, priority} =req.body;
        const result = await pool.query(
            `UPDATE tickets SET status = COALESCE($1, status), 
            priority = COALESCE($2, priority)updated_at = NOW()
            WHERE id = $3 RETURNING *`,
            [status, priority, req.params.id]
        );
        res.json(result.rows[0]);
    }   catch (err){
        res.status(500).json({error: err.message});
    }
});

module.exports = router; 