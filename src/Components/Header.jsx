import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <section>
        <div>
          <nav>
            <Link to="/">
              <p>Home</p>
            </Link>
            <Link to="/articles">
              <p>Articles</p>
            </Link>
            <Link to="/topics">
              <p>Topics</p>
            </Link>
            <Link to="/user">
              <p>User</p>
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
