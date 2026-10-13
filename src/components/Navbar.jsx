import { NavLink } from "react-router-dom";
import Button from "./Button";

function Navbar({ darkMode, onToggleDark, favoritesCount }) {
  const linkClass = ({ isActive }) =>
    isActive ? "font-bold underline" : "hover:underline";

  return (
    <nav className="flex items-center justify-between bg-white dark:bg-gray-800 shadow px-6 py-4">
      <div className="flex gap-6">
        <NavLink to="/" end className={linkClass}>Home</NavLink>
        <NavLink to="/users" className={linkClass}>Users</NavLink>
        <NavLink to="/about" className={linkClass}>About</NavLink>
      </div>

      <div className="flex items-center gap-4">
        <span>Favorites: {favoritesCount}</span>
        <Button
          label={darkMode ? "Light Mode" : "Dark Mode"}
          onClick={onToggleDark}
          variant="primary"
        />
      </div>
    </nav>
  );
}

export default Navbar;