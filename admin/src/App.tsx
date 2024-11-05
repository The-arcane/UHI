import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import UserManagement from './components/UserManagement';
import DoctorManagement from './components/DoctorManagement';
import AppointmentManagement from './components/AppointmentManagement';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <nav className="w-64 bg-white shadow-md">
          <div className="p-4">
            <h1 className="text-2xl font-bold text-blue-600">UHI Admin</h1>
          </div>
          <ul className="mt-4">
            <li>
              <Link to="/" className="block py-2 px-4 text-gray-700 hover:bg-blue-500 hover:text-white">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/users" className="block py-2 px-4 text-gray-700 hover:bg-blue-500 hover:text-white">
                User Management
              </Link>
            </li>
            <li>
              <Link to="/doctors" className="block py-2 px-4 text-gray-700 hover:bg-blue-500 hover:text-white">
                Doctor Management
              </Link>
            </li>
            <li>
              <Link to="/appointments" className="block py-2 px-4 text-gray-700 hover:bg-blue-500 hover:text-white">
                Appointment Management
              </Link>
            </li>
          </ul>
        </nav>

        <main className="flex-1 p-8 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<UserManagement />} />
            <Route path="/doctors" element={<DoctorManagement />} />
            <Route path="/appointments" element={<AppointmentManagement />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;