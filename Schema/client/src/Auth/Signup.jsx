import React from 'react'
import {Link,useNavigate} from "react-router-dom"
import axios from "axios"
const Signup = () => {
    const navigate=useNavigate()
    const[check ,setCheck]=React.useState(false)
    const[username,setUsername]=React.useState("")
    const[email,setEmail]=React.useState("")
    const[password,setPassword]=React.useState("")
    const SubmitHandler=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3009/api/register",{
            username:username,
            email:email,
            password:password
        }).then((data)=>{
            console.log(data)
            alert("Register Succesfully")
            navigate("/Login")
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
                                <form  onSubmit={SubmitHandler}>
                                <div className='form-group'>
                                        <label>Username :</label>
                                        <input type="text" className='form-control'   value={username} onChange={(e)=>{setUsername(e.target.value)}} required />
                                    </div>
                                    <div className='form-group'>
                                        <label>Email :</label>
                                        <input type="text" className='form-control'  value={email} onChange={(e)=>{setEmail(e.target.value)}} required />
                                    </div>
                                    <div className='form-group'>
                                        <label>Password :</label>
                                        <input type="text" className='form-control' value={password} onChange={(e)=>{setPassword(e.target.value)}} required />
                                    </div>
                                    <div className='from-group'>
                                        <input type="checkbox"  onChange={(event)=>{
                                            setCheck(event.target.checked)
                                        }}/>  please accept terms and condition
                                    </div>
                                    <center>
                                        <button className='btn btn-success my-3' disabled={!check}>Register</button>
                                    </center>
                                    <p> Already user? Login <Link to={"/Login"}>Here</Link></p>
                                </form>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup