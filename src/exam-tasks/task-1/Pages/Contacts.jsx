import { Link } from 'react-router-dom';
const Contacts = () => {
  return (
    <main>
      <h1>Contacts</h1>

      <Link to='/'>
        <button>Go Back</button>
      </Link>
    </main>
  );
};

export default Contacts;
