import React, { useContext, useState } from "react";
import FirebaseContext from "../../../context/FirebaseContext";
import { useNavigate } from "react-router-dom";
import "./styles.css";
const Login = () => {
  const { login } = useContext(FirebaseContext);
  const { signGoogle } = useContext(FirebaseContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const nav = useNavigate();
  return (
    <div className="big_container">
      <div className="left_bar">
        <div className="left_bar_children">
          <h1>Don't You Have An Account Yet ?</h1>
          <label htmlFor="reg_button">It's So Easy To Go On</label>
          <button onClick={
            ()=>nav("../register", { replace: true })
            } 
          id="reg_button">
            Click To Sign Up
          </button>
        </div>
      </div>

      <div className="loginContainer">
        <h1>Please Login to Continue...</h1>
        <div className="social_login_buttons">
          <button
            onClick={(e) => {
              e.preventDefault();
              signGoogle();
            }}
            style={{ color: "#de5246" }}
          >
            <i className="fa-brands fa-google"></i>
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              signGoogle();
            }}
            style={{ color: "#4267B2" }}
          >
            <i className="fa-brands fa-facebook"></i>
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              signGoogle();
            }}
            style={{ color: "grey" }}
          >
            <i className="fa-brands fa-github"></i>
          </button>
        </div>
        <form className="form_login">
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
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            onClick={(e) => {
              e.preventDefault();
              login(email, password);
            }}
          >
            Log me In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
