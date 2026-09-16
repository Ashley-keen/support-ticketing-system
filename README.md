# Support Ticketing System .ᐟ

> A full-stack help-desk app where users submit issues, agents track and resolve them, and admins can see resolution analytics.

![screenshot or demo gif here](docs/screenshot.png)

🔗 **Live demo:** [link once deployed]
📹 **Demo video:** [link once recorded]

---

## Features ⋆. 𐙚 ˚

- User authentication (JWT-based, role-based access: user vs agent)
- Create, view, and update support tickets
- Status workflow: Open → In Progress → Resolved → Closed
- Ticket assignment to agents
- Comment/activity log per ticket
- Filter and search tickets by status, priority, and assignee
- Analytics dashboard (tickets per day, average resolution time)

---

## Tech Stack ⋆. 𐙚 ˚

**Frontend:** React (Vite), React Router, Axios

**Backend:** Node.js, Express

**Database:** PostgreSQL

**Auth:** JWT, bcrypt

**Deployment:** Netlify · AWS


---

## Architecture & Key Decisions ⋆. 𐙚 ˚

- **Why PostgreSQL over MongoDB:** Tickets have clear relational structure (a ticket belongs to a user, is assigned to an agent, has many comments) — a relational DB models that more naturally and enforces it via foreign keys.


---

## Project Structure ⋆. 𐙚 ˚

```
support-ticketing-system/
├── client/              # React frontend
├── server/               # Express backend
│   ├── routes/
│   ├── middleware/
│   ├── db.js
│   ├── schema.sql
│   └── index.js
├── docs/                 # screenshots, notes
└── readme.md
```

---

## Getting Started ⋆. 𐙚 ˚

### Prerequisites 
- Node.js 18+
- A PostgreSQL database (local or hosted — e.g. [Neon](https://urldefense.proofpoint.com/v2/url?u=https-3A__neon.tech&d=DwIFaQ&c=euGZstcaTDllvimEN8b7jXrwqOf-v5A_CdpgnVfiiMM&r=L3Dp6WrTp1okQj3jIsG8RSwCW0G3-dqrEumwK7ss6iwmSeaeVOPbEfrBVoR2-Lqc&m=qYpbw0mJ8lpmus3W9JojG3kCduHdgTlEjYggKLdfLt3hFAdpQQpz5wE25IRJeTIh&s=HeyBxJkzB5Ih2-bBcOrYxMY1iDDCWmeK1rBOwrOm5bQ&e=), [Supabase](https://urldefense.proofpoint.com/v2/url?u=https-3A__supabase.com&d=DwIFaQ&c=euGZstcaTDllvimEN8b7jXrwqOf-v5A_CdpgnVfiiMM&r=L3Dp6WrTp1okQj3jIsG8RSwCW0G3-dqrEumwK7ss6iwmSeaeVOPbEfrBVoR2-Lqc&m=qYpbw0mJ8lpmus3W9JojG3kCduHdgTlEjYggKLdfLt3hFAdpQQpz5wE25IRJeTIh&s=GhlawWoNdOH7htYMXjPquu8QwCOvlnPZ3XqlG5zCdkc&e=))

### 1. Clone the repo
```bash
git clone **PUT THE REPO LINK HERE**
cd support-ticketing-system
```

### 2. Set up the backend
```bash
cd server
npm install
```

Create a `.env` file in `/server`:
```
DATABASE_URL=your_postgres_connection_string
JWT_SECRET=your_secret_here
PORT=4000
```

Run the schema against your database:
```bash
psql your_connection_string -f schema.sql
```

Start the server:
```bash
npm run dev
```

### 3. Set up the frontend
```bash
cd ../client
npm install
npm run dev
```

The app should now be running at `https://urldefense.proofpoint.com/v2/url?u=http-3A__localhost-3A5173&d=DwIFaQ&c=euGZstcaTDllvimEN8b7jXrwqOf-v5A_CdpgnVfiiMM&r=L3Dp6WrTp1okQj3jIsG8RSwCW0G3-dqrEumwK7ss6iwmSeaeVOPbEfrBVoR2-Lqc&m=qYpbw0mJ8lpmus3W9JojG3kCduHdgTlEjYggKLdfLt3hFAdpQQpz5wE25IRJeTIh&s=Z1JC93NMofuLwdzyKtXmEMhxiHiIYXXeSA88lfv8gnU&e=` (frontend) with the API at `https://urldefense.proofpoint.com/v2/url?u=http-3A__localhost-3A4000&d=DwIFaQ&c=euGZstcaTDllvimEN8b7jXrwqOf-v5A_CdpgnVfiiMM&r=L3Dp6WrTp1okQj3jIsG8RSwCW0G3-dqrEumwK7ss6iwmSeaeVOPbEfrBVoR2-Lqc&m=qYpbw0mJ8lpmus3W9JojG3kCduHdgTlEjYggKLdfLt3hFAdpQQpz5wE25IRJeTIh&s=DMawNhkHtGigJMb5cdRwmHWfBxJ9igETpawOqo2WsdA&e=`.

---

## API Overview ⋆. 𐙚 ˚

| Method | Endpoint | Description |
|--------|----------|--------------|
| POST | `/auth/register` | Create a new user |
| POST | `/auth/login` | Log in, returns JWT |
| POST | `/tickets` | Create a ticket |
| GET | `/tickets` | List tickets (filtered by role) |
| GET | `/tickets/:id` | Get a single ticket |
| PATCH | `/tickets/:id` | Update ticket status/priority |

---

## What I'd Improve Next ⋆. 𐙚 ˚

> A short, honest list — shows self-awareness and forward thinking, which interviewers respond well to.

- [e.g. Add pagination to the ticket list for large datasets]
- [e.g. Add automated tests (Jest/Supertest for backend, React Testing Library for frontend)]
- [e.g. Add role management UI for promoting users to agents]

---

## License ⋆. 𐙚 ˚

This project is licensed under the MIT License — see [LICENSE](LICENSE) for details.
