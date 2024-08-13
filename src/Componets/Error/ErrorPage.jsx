import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();
  

    return (
       
            <div >
      <h1 className="text-3xl font-bold text-red-500">Oops!</h1>
      <p className="text-2xl font-medium ">Sorry, an unexpected error has occurred.</p>

      <Link to='/'><button className="btn bg-teal-500">Back to Home </button></Link>
    
    </div>
       
    );
};

export default ErrorPage;