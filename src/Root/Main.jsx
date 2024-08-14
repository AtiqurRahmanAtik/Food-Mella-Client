import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavigationBar from '../Componets/NavigationBar/NavigationBar';
import Footer from '../Componets/Footer/Footer';

const Main = () => {

    const noHeaderFooter = useLocation().pathname.includes('login') || useLocation().pathname.includes('register');
    // console.log(noHeaderFooter);

    const noHeaderFooter_Register = useLocation().pathname.includes('register');
    // console.log(noHeaderFooter_Register)



    return (
        <div>
          { !noHeaderFooter && <NavigationBar></NavigationBar>}
            <div className='container mx-auto my-11'>
                
            <Outlet></Outlet>
            </div>

        {!noHeaderFooter &&  <div className='my-11'>
        <Footer></Footer>
        </div>}
         
        </div>
    );
};

export default Main;