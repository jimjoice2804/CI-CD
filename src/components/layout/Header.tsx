import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
        >
          📝 Notes App
        </Link>
        <nav className="flex items-center gap-4">
          <Link
            to="/"
            className="text-gray-600 hover:text-gray-900 font-medium"
          >
            Home
          </Link>
          <Link
            to="/create"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            + New Note
          </Link>
        </nav>
      </div>
    </header>
  );
};
