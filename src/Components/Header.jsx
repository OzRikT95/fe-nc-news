import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <section>
        <div>
          <nav>
            <Link to="/">
              <p className="navLinks">Home</p>
            </Link>
            <Link to="/articles">
              <p className="navLinks">Articles</p>
            </Link>
            <Link to="/topics">
              <p className="navLinks">Topics</p>
            </Link>
            <Link to="/user">
              <p className="navLinks">User</p>
            </Link>
          </nav>
        </div>
        <div>
          <h1>NC News</h1>
        </div>
      </section>
    </>
  );
}

export default Header;
