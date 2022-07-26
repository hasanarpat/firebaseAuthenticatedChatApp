import React, { useContext, useState } from "react";
import FirebaseContext from "../../../context/FirebaseContext";
import "./reg_styles.css";
const Register = () => {
  const { register } = useContext(FirebaseContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <div className="reg_container">
    <div className="reg_container_children">
    <h2>Welcome To New World Of Chatting!</h2>
    <h3>Sign Up To Join Us</h3>
      <form className="form_reg">
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
          onClick={(e) => {
            e.preventDefault();
            register(email, password);
          }}
        >
          Register
        </button>
      </form>
    </div>
    </div>
  );
};

export default Register;
