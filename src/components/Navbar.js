import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold">
              Skin Cancer Detector
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link to="/" className="hover:bg-gray-700 px-3 py-2 rounded">
              Home
            </Link>
            <Link to="/detect" className="hover:bg-gray-700 px-3 py-2 rounded">
              Detect
            </Link>
            <Link to="/about" className="hover:bg-gray-700 px-3 py-2 rounded">
              About
            </Link>
            <Link to="/education" className="hover:bg-gray-700 px-3 py-2 rounded">
              Education
            </Link>
            <Link to="/profile" className="hover:bg-gray-700 px-3 py-2 rounded">
              Profile
            </Link>
            <Link to="/admin" className="hover:bg-gray-700 px-3 py-2 rounded">
              Admin
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
