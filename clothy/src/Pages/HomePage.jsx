import React from 'react'
import { Navbar } from '../Components/Navbar/Navbar';
import AllRoutes from '../Routes/AllRoutes';

export const HomePage = () => {
  return (
    <div>
      <AllRoutes/>
      <Navbar/>
    </div>
  )
};
