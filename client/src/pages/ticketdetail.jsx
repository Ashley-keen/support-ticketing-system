import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';

function TicketDetail(){
  const {id} = useParams();
  const [ticket, setTicket] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() =>{
    api.get(`/tickets/${id}`)
    .then ((res) =>setTicket(res.data))
    .catch (() => setError('Failed to load ticket'))
    .finally (() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading ticket ...</p>;
  if (error) return <p>{error}</p>;
  if (!ticket) return <p> Ticket not found.</p>;

  return(
    <div>
      <h2>{ticket.title}</h2>
      <p><strong>Status:</strong>{ticket.status}</p>
      <p><strong>Priority:</strong>{ticket.priority}</p>
      <p>{ticket.description}</p>
    </div>
  );
}

export default TicketDetail;