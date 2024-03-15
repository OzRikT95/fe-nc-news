import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>Oops! You seem to be lost.</h1>
      <p>Here are some helpful links:</p>
      <Link to="/">Home</Link>
      <img src="../images/istockphoto-687810196-612x612.jpg" alt="lost-image" />
    </div>
  );
}

export default NotFound;
