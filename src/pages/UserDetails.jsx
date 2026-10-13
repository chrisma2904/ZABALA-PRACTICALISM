import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { users } from "../data/users";

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(undefined);

  // Tatakbo ulit kapag nagbago ang id
  useEffect(() => {
    const found = users.find((u) => u.id === Number(id));
    setUser(found || null);
    document.title = found ? found.name : "User not found";
  }, [id]);

  if (user === undefined) return null;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 max-w-lg mx-auto">
      {user ? (
        <>
          <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
          <p>Email: {user.email}</p>
          <p>Company: {user.company}</p>
          <p>Role: {user.role}</p>
        </>
      ) : (
        <p className="text-red-600 font-semibold">User not found</p>
      )}

      <Link to="/users" className="inline-block mt-4 text-blue-600 dark:text-blue-400 underline">
        ← Back
      </Link>
    </div>
  );
}

export default UserDetails;