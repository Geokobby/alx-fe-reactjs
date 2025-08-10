// components/Search.jsx
import { useState } from "react";
import { fetchUserData } from "../services/githubApi";

const Search = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Search Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <button type="submit">Search</button>
      </form>

      {/* Loading State */}
      {loading && <p>Loading...</p>}

      {/* Error State */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Success State */}
      {userData && (
        <div>
          <img
            src={userData.avatar_url}
            alt={userData.login}
            width="100"
            height="100"
            style={{ borderRadius: "50%" }}
          />
          <h2>{userData.name || userData.login}</h2>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
