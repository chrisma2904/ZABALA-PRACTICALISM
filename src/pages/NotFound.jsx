import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="mb-4">Hindi mahanap ang page na ito.</p>
      <Link to="/" className="text-blue-600 dark:text-blue-400 underline">
        Bumalik sa Home
      </Link>
    </div>
  );
}

export default NotFound;