import Header from '../components/Header';

const Projects = () => (
  <div>
    <Header />
    <h1>Projects</h1>
    <ul>
      <li>
        <a href="https://github.com/safarimafia/MyOnlineStore" target="_blank" rel="noopener noreferrer">My Online Store</a>
      </li>
     
    </ul>
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

export default Projects;
