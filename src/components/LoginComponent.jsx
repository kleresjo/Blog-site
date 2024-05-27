import React, { useState, useContext } from "react";
import { Navigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { signInUser } from "../firebase/authFunctions";

const LoginComponent = () => {
  const { userLoggedIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await signInUser(email, password);
      } catch (error) {
        setErrorMessage(error.message);
        setIsSigningIn(false);
      }
    }
  };

  return (
    <div className="middle">
      {userLoggedIn && <Navigate to={"/"} replace={true} />}
      <main>
        <div className="logIn">
          <div>
            <h1>Logga in</h1>
          </div>
          <form onSubmit={onSubmit}>
            <div>
              <input
                type="email"
                placeholder="Email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
<br></br>
            <div>
              <input
                type="password"
                placeholder="Lösenord"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            {errorMessage && <span>{errorMessage}</span>}
<br></br>
            <button
              className="primaryPostBtn"
              type="submit"
              disabled={isSigningIn}
            >
              {isSigningIn ? "Loggar in..." : "Logga in"}
            </button>
          </form>
          <p>
            Har du inget konto? <Link to={"/Registrera-konto"}>Registrera dig här!</Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default LoginComponent;