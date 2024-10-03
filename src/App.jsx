import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Sidemenu from './components/Sidemenu';
import ReportComp from './components/ReportComp';

function App() {
  return (
    <div className='flex h-screen'>
      <Sidemenu />
      <div className='flex-1'>
        <ReportComp />
      </div>
    </div>
  );
}

export default App;
