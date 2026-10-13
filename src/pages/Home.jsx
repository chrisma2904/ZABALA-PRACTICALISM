import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold mb-4">Team Directory</h1>
      <p className="mb-6">Hanapin at i-save ang paborito mong team members.</p>
      <Button label="Tingnan ang Users" onClick={() => navigate("/users")} />
    </div>
  );
}

export default Home;