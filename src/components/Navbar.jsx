import { use } from "react";
import SearchContainer from "../container/SearchContainer";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = use(AuthContext);
  return (
    // Default: flex-col (mobile). md: flex-row (tablet/desktop)
    <nav className="flex flex-col md:flex-row p-3 py-4 md:px-8 justify-between items-center bg-blue-500 shadow-lg gap-3">
      
      {/* 1. Logo/Title Section (Always on the left) */}
      <div className="flex items-center justify-center order-1">
        {/* Added Link wrapper to make the logo clickable and return home (assuming / is home) */}
        <Link to="/" className="text-2xl font-extrabold text-white hover:text-gray-100 transition duration-150">
          FACK STORE
        </Link>
      </div>

      {/* 2. Search Bar Section (Center on desktop, full width on mobile) */}
      <div className="w-full md:w-1/2 lg:w-1/3 order-3 md:order-2"> {/* Takes up 1/2 of md screen, 1/3 of lg screen */}
        <SearchContainer />
      </div>

      {/* 3. User/Auth Links Section (Always on the right) */}
      <div className="order-2 md:order-3">
        {user ? (
          <div className="flex items-center gap-3">
            <img className="w-10 h-10 object-cover rounded-full border-2 border-white" src={user.avatar} alt="User Avatar" />
            <p className="text-white font-medium truncate max-w-[100px] hidden sm:block">{user.name}</p>
            <Link className="px-3 py-2 text-sm border-2 border-stone-600 bg-stone-600 hover:bg-stone-700 rounded-lg text-white font-semibold transition duration-200" to='/cart'>Cart</Link>
            <button 
              onClick={logout} 
              className="px-3 py-2 text-sm border-2 border-red-600 bg-red-600 hover:bg-red-700 rounded-lg text-white font-semibold transition duration-200"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-4">
            <Link
              to="/login"
              className="px-3 py-1 text-white font-medium hover:underline transition duration-150"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="px-3 py-1 text-white font-medium hover:underline transition duration-150"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;