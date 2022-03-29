import React from 'react';
import Navbar from '../components/directions/Navbar';
import '../pages/App.css'


export default function Layout({ children }) {
  return(
    <div>
      <Navbar/> 
      <div>
        {children}
      </div>
      <br/>
      <div className='footer'>
        Impressum
      </div>
    </div>
  );
}
