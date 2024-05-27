import React, { useState, useContext } from "react";
import { Navigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { createUser } from "../firebase/authFunctions";

const RegisterComponent = () => {
  const { userLoggedIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isRegistering) {
      setIsRegistering(true);
      try {
        await createUser(email, password);
      } catch (error) {
        setErrorMessage(error.message);
        setIsRegistering(false);
      }
    }
  };

  return (
    <div className="middle">
      {userLoggedIn && <Navigate to={"/"} replace={true} />}

      <main>
        <div className="logIn">
          <div>
            <div>
              <h2>Skapa konto</h2>
            </div>
          </div>
          <form onSubmit={onSubmit}>
              <input
                placeholder="Användarnamn"
                type="username"
                required
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            <div>
            <br></br>
              <input
                placeholder="Email"
                type="email"
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
                placeholder="Lösenord"
                disabled={isRegistering}
                type="password"
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
<br></br>
            <div>
              <input
                placeholder="Repetera lösenord"
                disabled={isRegistering}
                type="password"
                autoComplete="off"
                required
                value={confirmPassword}
                onChange={(e) => {
                  setconfirmPassword(e.target.value);
                }}
              />
            </div>
<br></br>
            {errorMessage && <span>{errorMessage}</span>}

            <button
              className="primaryPostBtn"
              type="submit"
              disabled={isRegistering}
            >
              {isRegistering ? "Registerar konto..." : "Registrera dig"}
            </button>
            <div>
              Har du redan ett konto? {"   "}
              <Link to={"/logga-in"}>Fortsätt</Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default RegisterComponent;