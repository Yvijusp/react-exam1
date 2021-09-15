import { Link } from 'react-router-dom';
const AboutUs = () => {
  return (
    <main>
      <h1>About Us</h1>
      <Link to='/'>
        <button>Go Back</button>
      </Link>
    </main>
  );
};

export default AboutUs;
