import { use } from "react";
import SearchContainer from "../container/SearchContainer";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user,logout } = use(AuthContext);
  return (
    <nav className="flex p-4 justify-evenly bg-blue-500">
      <div className="flex items-center justify-center">
        <h2 className="text-2xl font-bold">FACK STORE</h2>
      </div>
      <SearchContainer />

      <div>
        {user ? (
          <div className="flex items-center justify-center gap-3">
            <img className="w-15 h-15 object-fill rounded-full" src={user.avatar} alt="" />
            <p className="text-white">{user.name}</p>
            <button onClick={logout} className="p-3 border border-red-600 bg-red-600 hover:bg-red-700 rounded-xl text-white">Logout</button>
          </div>
        ) : (
          <div>
            <Link to='/login'>LOGIN</Link>
            <Link to='/register'>Register</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
