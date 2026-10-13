import { Link } from "react-router-dom";
import Button from "./Button";

function UserCard({ id, name, email, company, isFavorite, onToggleFavorite }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-5 flex flex-col gap-2">
      <h2 className="text-xl font-bold">{name}</h2>
      <p>{email}</p>
      <p className="text-gray-500 dark:text-gray-400">{company}</p>

      <div className="flex items-center gap-3 mt-2">
        <Link to={`/users/${id}`} className="text-blue-600 dark:text-blue-400 underline">
          View Details
        </Link>
        <Button
          label={isFavorite ? "Remove" : "Favorite"}
          onClick={onToggleFavorite}
          variant={isFavorite ? "danger" : "primary"}
        >
          {isFavorite ? "★" : "☆"}
        </Button>
      </div>
    </div>
  );
}

export default UserCard;