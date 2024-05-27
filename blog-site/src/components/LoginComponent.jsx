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
    <div>
      {userLoggedIn && <Navigate to={"/"} replace={true} />}
      <main>
        <div>
          <div>
            <h2>Log in</h2>
          </div>
          <form onSubmit={onSubmit}>
            <div>
              <label>Email</label>
              <input
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div>
              <label>Password</label>
              <input
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            {errorMessage && <span>{errorMessage}</span>}

            <button
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