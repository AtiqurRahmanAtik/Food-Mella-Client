import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../Componets/NavigationBar/NavigationBar';
import Footer from '../Componets/Footer/Footer';

const Main = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className='container mx-auto my-11'>
                
            <Outlet></Outlet>
            </div>

         <div className='my-11'>
         <Footer></Footer>
         </div>
         
        </div>
    );
};

export default Main;