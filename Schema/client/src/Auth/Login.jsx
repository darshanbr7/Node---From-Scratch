import React from 'react'
import { Link,useNavigate} from "react-router-dom"
import axios from "axios"

const Login = () => {
    const navigate=useNavigate()
    const[email,setEmail]=React.useState("")
    const[password,setPassword]=React.useState("")
    
    const loginHandler=(event)=>{
        event.preventDefault()
        axios.post("http://localhost:3009/api/login",{
                                                  email:email,
                                                  password :password
                                              })
              .then((response)=>{
                      console.log(response)
                  const token=response.data.token
                  localStorage.setItem('token',token)
                  navigate("/")
              
              })
              .catch((e)=>{
                  console.log(e)
              })
    }
  return (
    <div>
        <div className="container-fluid ">
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4">
                        <div className="card mt-4">
                            <div className="card-body ">
                                <form onSubmit={loginHandler} >
                                    <div className='form-group'>
                                        <label>Email :</label>
                                        <input type="text" className='form-control'  value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                                    </div>
                                    <div className='form-group'>
                                        <label>Password :</label>
                                        <input type="text" className='form-control'  value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                                    </div>
                                    <center>
                                        <button className='btn btn-primary'>Login</button>
                                    </center>
                                    <p> new user? signup <Link to={"/Signup"}>Here</Link></p>
                                </form>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login