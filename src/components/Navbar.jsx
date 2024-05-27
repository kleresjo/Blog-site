import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { signOutUser } from "../firebase/authFunctions";

const Navbar = () => {
  const { currentUser, userLoggedIn } = useContext(AuthContext);

  let navigate = useNavigate();
  const navigateToLogin = () => {
    let path = `logga-in`;
    navigate(path);
  };
    return (
    <nav>
      <div>
        <div className="links">
        <Link to="/"><h1>Bloggad</h1></Link>
          {userLoggedIn ? (
            <div className="row">
              <p>{currentUser.email}</p>
              <button onClick={signOutUser}
              className="secondaryPostBtn">
                Logga ut
              </button>
            </div>
          ) : (
            <button onClick={navigateToLogin}
            className="primaryPostBtn">
              Logga in
            </button>
          )}
        </div>
      </div>
      <div className="links">
        <Link to="/">Hem</Link>
        <Link to="/Blogg">Blogg</Link>
        {userLoggedIn ? (
        <Link to="/Mitt-konto"><button className="Navbtn">Mitt konto</button></Link>
        ) : (
          <button className="Navbtn" onClick={navigateToLogin}>
              Logga in för att se ditt konto
            </button>
        )}
      </div>
    </nav>
    );
}

export default Navbar;