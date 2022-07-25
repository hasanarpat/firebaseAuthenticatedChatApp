import React, { useContext, useState } from "react";
import FirebaseContext from "../../../context/FirebaseContext";
const Login = () => {
  const { login } = useContext(FirebaseContext);
  const { signGoogle } = useContext(FirebaseContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div
      style={{
        width: "50%",
        marginLeft: "auto",
        marginRight: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Please Login to Continue</h1>
      <div
        className="social_login_buttons"
        style={{ margin: "18%", alignContent: "space-evenly" }}
      >
        <button
          onClick={(e) => {
            e.preventDefault();
            signGoogle();
          }}
          style={{ marginLeft: "10%", width: "3%" }}
        >
          <i className="fa-brands fa-google"></i>
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            signGoogle();
          }}
          style={{ marginLeft: "10%", width: "3%" }}
        >
          <i className="fa-brands fa-facebook"></i>
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            signGoogle();
          }}
          style={{ marginLeft: "10%", width: "3%" }}
        >
          <i className="fa-brands fa-github"></i>
        </button>
      </div>
      <form>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
          onClick={(e) => {
            e.preventDefault();
            login(email, password);
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Login;
