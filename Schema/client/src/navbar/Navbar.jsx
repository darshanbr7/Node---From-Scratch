import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import {TbLogout} from "react-icons/tb"
import { CgProfile } from 'react-icons/cg';

const Navbar = () => {
  const navigate=useNavigate()
  
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
            }} ></Link>       </li> : <li className='nav-item'><Link to={"/Login"}  className='nav-link text-white' >Login</Link>  </li>
            }
          {
            localStorage.getItem("token")? <li className="nav-item dropdown mr-5">
            <Link className="nav-link dropdown-toggle text-white "  id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <CgProfile size={25}/>
            </Link>
            <div className="dropdown-menu mr-3 " aria-labelledby="navbarDropdownMenuLink">
              <Link className="dropdown-item" to={"/Profile"} >Profile</Link>
              <Link className="dropdown-item" onClick={()=>{ localStorage.removeItem("token") 
                  alert("Succesfully Logout")
                  navigate("/")
                }}  > <TbLogout size={25} color='red'/>  Logout</Link>
             
            </div>
          </li>:<li></li>
          }   
          
          </ul>
          
        </div>
      </nav>
    </div>

    </div>
  )
}

export default Navbar