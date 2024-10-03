import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Sidemenu from './components/Sidemenu';
import ReportComp from './components/ReportComp';

function App() {
  return (
    <div className='flex h-screen'>
      <div className="w-64 bg-gray-200"> {/* Set width and background color */}
        <Sidemenu />
      </div>
      <div className='flex-1'>
        <ReportComp />
      </div>
    </div>
  );
}

export default App;
