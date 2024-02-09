import React,{useState,useEffect,useContext} from "react";
import AllRoutes from "./AllRoutes";
import {Authcontext} from "../Context/AuthContext"
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom"

function Login() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const {loginUser,authState} = useContext(Authcontext);
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
        e.preventDefault;
        fetch("https://reqres.in/api/login",{
          method:"POST",
          headers:{
            "Content-Type" : "application/json"
          },
          body : JSON.stringify(email,password)
        })
        .then(res=>res.json())
        .then(res => {
          if(res.token){
            loginUser(res.token)
            navigate("/dashboard")
          }
        })
        .catch(err=>{
          console.log(err)
        })
  }

  return (
    <div>
      <form data-testid="login-form" onSubmit={handleSubmit}>
        <div>
          <label>
            Email
            <input data-testid="email-input" type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              value = {password}
              onChange={(e)=>setPassword(e.target.value)}
              data-testid="password-input"
              type="password"
              placeholder="password"
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;
