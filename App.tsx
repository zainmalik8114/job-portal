import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import JobDetailsPage from './pages/JobDetailsPage';
import EmployerDashboard from './pages/EmployerDashboard';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/job/:id" element={<JobDetailsPage />} />
            <Route path="/employer" element={<EmployerDashboard />} />
            <Route path="/employer/post" element={<EmployerDashboard />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;