import Header from '../components/Header';

const Contact = () => (
  <div>
    <Header />
    <h1>Contact</h1>
    <p>Name: Nicola Vandyar</p>
    <p>Email: nvandyar@gmail.com</p>
    <p>LinkedIn: <a href="https://www.linkedin.com/in/nicola-vandyar/" target="_blank" rel="noopener noreferrer">Nicola Vandyar</a></p>
    <style jsx>{`
      a {
        color: blue;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
    `}</style>
  </div>
);

export default Contact;
