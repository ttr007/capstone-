import './style.css';
import React from 'react';
import Home from './components/Home';
import { ModuleOne } from './mod1/ModuleOne';
import { ModuleTwo } from './mod2/ModuleTwo';
import { ModuleThree } from './mod3/ModuleThree';
import { ModuleFour } from './mod4/ModuleFour';
import { ModuleFive } from './mod5/ModuleFive';
import { ModuleSix } from './mod6/ModuleSix';
import { ModuleSeven } from './mod7/ModuleSeven';
import { ModuleEight } from './mod8/ModuleEight';
import ScrollToTop from './components/ScrollToTop';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router basename="/capstone-">
      <ScrollToTop />

      <div className="app-container">
        <main className="content-container">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/sampling" element={<ModuleOne />} />
            <Route path="/change-over-time" element={<ModuleTwo />} />
            <Route path="/relationships" element={<ModuleThree />} />
            <Route path="/patterns-and-variability" element={<ModuleFour />} />
            <Route path="/uncertainty" element={<ModuleFive />} />
            <Route path="/statistical-significance" element={<ModuleSix />} />
            <Route path="/social-implications" element={<ModuleSeven />} />
            <Route path="/skewing-the-data" element={<ModuleEight />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;