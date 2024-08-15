import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {

    const {singIn}= useContext(AuthContext);
    let navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    // Handle Login
    const handleLogin = (e)=> {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const LoginInfo = { email, password};
        console.log(LoginInfo);


        // singIn 
        singIn(email,password)
        .then(result=>{
            console.log(result);
            navigate(from, { replace: true });
        })
        .catch(error=>{
            console.log(error);
        })
    }

    return (
        <div>
          <div className="hero ">
  <div className="hero-content flex-col lg:flex-col">

    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
     
    </div>

    {/* From */}
    <div className="card bg-orange-300  w-[800px]   shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>

          <input type="email" placeholder="email" name="email" className="input input-bordered" required />

        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
        
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>

      <button className="btn w-2/4 mx-auto"> <FcGoogle className="text-4xl"></FcGoogle> <span className="text-4xl">Google</span> </button>

      <h1>Do Have An Account? please  <Link to='/register'> <button className="btn btn-link">Register</button></Link></h1>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;