import Link from 'next/link';

const Header = () => (
  <header>
    <nav>
      <Link href="/" legacyBehavior><a>Home</a></Link>
      <Link href="/about" legacyBehavior><a>About</a></Link>
      <Link href="/projects" legacyBehavior><a>Projects</a></Link>
      <Link href="/contact" legacyBehavior><a>Contact</a></Link>
    </nav>
    <style jsx>{`
      header {
        background: #333;
        padding: 20px;
      }
      nav {
        display: flex;
        justify-content: center;
        gap: 20px;
      }
      a {
        color: white;
        text-decoration: none;
        font-weight: bold;
      }
      a:hover {
        text-decoration: underline;
      }
    `}</style>
  </header>
);

export default Header;
