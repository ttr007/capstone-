import './style.css';
import React, { useState } from 'react'; //import React Component
import { Home } from './components/Home';
import { ModuleOne } from './components/ModuleOne'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from './components/ProgressBar';

function App() {
  return (
    <Router>
      <div>
        <main>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/representativeness" element={<ModuleOne />} />
            {/* <Route path="/blog" element={<Blog />} /> */}
            {/* <Route path="/BlogForum/:buildingName" element={<BlogForum/>} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}


export default App;
