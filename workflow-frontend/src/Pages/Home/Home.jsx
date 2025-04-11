// Home.jsx
import { useAuth } from "../../Components/Hooks/AuthContext";

const Home = () => {
  const { user, logout, token } = useAuth();
  console.log(user)
  console.log(token);

  return (
    <div>
      {user ? (
        <>
          <h1>Welcome, {user.name}</h1>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Home;
