import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Briefcase, User, LogIn } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  const isEmployer = location.pathname.includes('employer');

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-gray-900 tracking-tight">JobSeeker Pro</span>
            </Link>
            <div className="hidden sm:ml-8 sm:flex sm:space-x-8">
              <Link to="/" className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${location.pathname === '/' ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}`}>
                Find Jobs
              </Link>
              <Link to="/employer" className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${isEmployer ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}`}>
                For Employers
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/login" className="hidden sm:flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-600">
              <LogIn className="w-4 h-4" />
              Sign In
            </Link>
            <Link to="/employer/post" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Post a Job
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;