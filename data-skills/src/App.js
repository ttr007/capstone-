import './style.css';
import React from 'react';
import Home from './components/Home';
import { ModuleOne } from './components/ModuleOne';
import { ModuleTwo } from './components/ModuleTwo';
import { ModuleThree } from './components/ModuleThree';
import { ModuleFour } from './components/ModuleFour';
import { ModuleFive } from './components/ModuleFive';
import { ModuleSix } from './components/ModuleSix';
import { ModuleSeven } from './components/ModuleSeven';
import { ModuleEight } from './components/ModuleEight';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
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