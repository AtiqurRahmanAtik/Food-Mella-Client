import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    
    const {user,singUp,  googleLogin} = useContext(AuthContext);
    
    const navigate = useNavigate();
    let location = useLocation();
    
    let from = location.state?.from?.pathname || "/";


    // Handle Register
    const handleLogin= (e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo= form.photo.value;
        const password = form.password.value;

        const RegisterInfo = {name, email, password,photo};
        console.log(RegisterInfo);


        // SingUp 
        singUp(email,password)
        .then(result=>{
            console.log(result)
               // updateProfile
               updateProfileUser(name,photo)
               .then(()=>{
                 Swal.fire({
                   position: "top-end",
                   icon: "success",
                   title: "Register Successful",
                   showConfirmButton: false,
                   timer: 1500
                 });
               })
               .catch(error=>{
                 console.log(error);
               })

              //  navigate to home page
            navigate(from, { replace: true });
        })
        .catch(error=> {
            console.log(error);
        })

        
    }


    //  google SingIn
    const handleGoogle = ()=>{
        googleLogin()
        .then(result=>{
            console.log(result.user);

              navigate(from, { replace: true });
        })
        .catch(error=> {
            console.log(error);
        })
    }



    return (
        <div>
        <div className="hero ">
  <div className="hero-content flex-col lg:flex-col">

    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Please Register!</h1>
     
    </div>

    {/* From */}
    <div className="card bg-orange-300 w-[800px]  shrink-0 shadow-2xl">

      <form onSubmit={handleLogin} className="card-body ">
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Name</span>
          </label>

          <input type="text" placeholder="Name" name='name' className="input input-bordered" required />

        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>

          <input type="email" placeholder="email" name='email' className="input input-bordered" required />

        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotURL</span>
          </label>

          <input type="text" placeholder="photo" name='photo' className="input input-bordered" required />

        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
        
        </div>
        <div className="form-control mt-6">

          <button  className="btn btn-primary">Login</button>
        </div>
      </form>

      <button onClick={handleGoogle} className="btn w-2/4 mx-auto"> <FcGoogle className="text-4xl"></FcGoogle> <span className="text-4xl">Google</span> </button>

      <h1> Have An Account ? <Link to='/login' className="btn btn-link">Login</Link></h1>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;