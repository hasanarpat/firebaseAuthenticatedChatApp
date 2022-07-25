import React,{useContext,useState} from 'react'
import FirebaseContext from '../../../context/FirebaseContext';
const Register = () => {
  const {register} = useContext(FirebaseContext);
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  return (
  <form >
    <input type="email" 
    placeholder='email' 
    onChange={
      (e)=>{setEmail(e.target.value)}} 

      />
    <input type="password"
    placeholder='password' 
    onChange={
      (e)=>setPassword(e.target.value)} 

      />
    <button onClick={(e)=>{
      e.preventDefault();
      register(email,password)
    }}>Register</button>
  </form>
  )
}

export default Register;