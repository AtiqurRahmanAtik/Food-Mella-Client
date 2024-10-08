import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";


const NavigationBar = () => {

  const {user, LogOut} = useContext(AuthContext);
  const navigate = useNavigate();
 


 

  // handleLogOut 
  const handleLogOut =()=>{
      LogOut()
      .then((result)=>{

    
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "LogOut Successful",
        showConfirmButton: false,
        timer: 1500
      });

      navigate('/');
  

      })
      .catch(error=>{
        console.log(error);
      })
  }

    const Pages = <>
    
   <NavLink to='/'> <li className="text-2xl font-medium "><a>Home</a></li></NavLink>
    
  <NavLink to='/about'>  <li className="text-2xl font-medium "><a>About</a></li></NavLink>
  
    <li className="text-2xl font-medium "><a>Item 3</a></li>
    </>


    return (
     
<div className="container mx-auto ">
<div className="navbar bg-green-400">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       
       {Pages}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Food Mella</a>
  </div>



  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    
    {Pages}
    </ul>
  </div>

  {user && <div className="navbar-end">

   

   <div className="dropdown dropdown-end">
{ user && <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
    <div className="w-10 rounded-full ">
      <img 
        alt="Tailwind CSS Navbar component"
        src={`${user?.photoURL}`} />
       
    </div>
   
  </div>}

      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
      
        <li><button> <span>{user?.displayName}</span></button></li>
        <li><button onClick={handleLogOut} className="btn">LogOut</button></li>
      </ul>
    </div>



  </div>}

  {!user && <div className="navbar-end">

   <Link to='/login'> <a  className="btn">Login</a></Link>
  </div>}

</div>
</div>
        
    );
};

export default NavigationBar;