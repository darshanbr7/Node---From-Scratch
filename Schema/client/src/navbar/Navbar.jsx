import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import axiosInstance from '../Axios/Axiospage'
const Navbar = () => {
  const navigate=useNavigate()
  const[name,setName]=React.useState("")
  React.useEffect(()=>{
        axiosInstance.get("http://localhost:3009/api/user").then((data)=>{

          setName(data.data)
         
        })
                                                            .catch((err)=>{
                                                              console.log(err)
                                                            })
  })
  return (
    <div>
    <div className="container-fluid">
      <nav className='navbar navbar-expand-lg bg-info'>
        <div className=' navbar navbar-brand text-white'>Auth</div>
        <div className="ml-auto">
       
          <ul className='navbar-nav'>
    
            {
              localStorage.getItem("token")  ? <li className='nav-item'><Link  className='nav-link text-white' onClick={()=>{ localStorage.removeItem("token") 
              alert("Succesfully Logout")
              navigate("/")
            }} >Logut</Link>       </li> : <li className='nav-item'><Link to={"/Login"}  className='nav-link text-white' >Login</Link>  </li>
            }
              <li className='nav-link text-white'>{name}</li>     
          </ul>
          
        </div>
      </nav>
    </div>

    </div>
  )
}

export default Navbar