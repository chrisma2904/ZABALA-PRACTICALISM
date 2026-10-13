import { useState, useEffect } from "react";
import { users as usersData } from "../data/users";
import UserCard from "../components/UserCard";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

function Users({ favorites, onToggleFavorite }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  // Mag-load ng users pagkatapos ng 1 segundo
  useEffect(() => {
    const timer = setTimeout(() => {
      setUsers(usersData);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  // I-update ang page title
  useEffect(() => {
    document.title = `Users (${filteredUsers.length})`;
  }, [filteredUsers.length]);

  if (loading) return <Loader />;

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-6 p-3 rounded-lg border bg-white dark:bg-gray-800 dark:border-gray-600"
      />

      {filteredUsers.length === 0 ? (
        <ErrorMessage message="No users found" />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredUsers.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              company={user.company}
              isFavorite={favorites.includes(user.id)}
              onToggleFavorite={() => onToggleFavorite(user.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Users;