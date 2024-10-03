import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Sidemenu from './components/Sidemenu';
import ReportComp from './components/ReportComp';

function App() {
  return (
    <div className='flex h-screen'>
      <div className="bg-gray-200 w-[274px]"> {/* Ensure fixed width for Sidemenu */}
        <Sidemenu />
      </div>
      <div className='flex-1'> {/* Use flex-grow instead of margins */}
        <ReportComp />
      </div>
    </div>
  );
}

export default App;
