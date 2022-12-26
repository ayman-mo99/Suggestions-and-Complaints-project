import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <p>Home page is not implemented yet.</p>
      <p>You can go to the two implemented pages:</p>
      <Link to="/create" style={{ color: "#d42f23" }}>
        1 Create page
      </Link>
      <br />
      <br />
      <Link to="/list" style={{ color: "#d42f23" }}>
        2 Display page
      </Link>
    </div>
  );
}

export default Home;
