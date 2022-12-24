import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import { Navbar, Sidebar } from './components';

// Pages
import { Home } from './pages';
// import './App.css';

function App() {
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative linear-gradient" >
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
