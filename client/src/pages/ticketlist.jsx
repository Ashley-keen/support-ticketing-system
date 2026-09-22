import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import api from '../api';

function TicketList(){
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect (() => {
    api.get('./tickets')
    .then((res) => setTickets(res.data))
    .catch (() => setError('Failed to load tickets'))
    .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading tickets...</p>;
  if (error) return <p>{Error}</p>;

  return (
    <div>
      <h2>Tickets</h2>
      {tickets.length === 0 ?(
        <p>No tickets yet.</p>
      ) : (
        <ul>
          {tickets.map((t) => (
            <li key={t.id}>
              <Link to={`./tickets/${t.id}`}>{t.title}</Link> - {t.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TicketList;
