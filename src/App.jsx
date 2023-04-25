import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';


const App = () => {
  return (
    <div>
      {/* ====Header===== */}
      <Header />
      <div className='min-h-[calc(100vh-140px)]'>
      <Outlet></Outlet>
      </div>
      <Footer/>
      {/* ====Footer===== */}
    </div>
  );
};

export default App;