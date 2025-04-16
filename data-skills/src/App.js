import './style.css';
import React from 'react';
import Home from './components/Home';
import { ModuleOne } from './components/ModuleOne';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <main className="content-container">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/representativeness" element={<ModuleOne />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;