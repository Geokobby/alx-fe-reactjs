import { useState } from "react";
import { searchUsers } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  const handleSearch = async (e, resetPage = true) => {
    e.preventDefault();
    setLoading(true);

    const pageToFetch = resetPage ? 1 : page;
    const results = await searchUsers({
      username,
      location,
      minRepos,
      page: pageToFetch
    });

    if (resetPage) {
      setUsers(results.items || []);
    } else {
      setUsers(prev => [...prev, ...(results.items || [])]);
    }

    setHasMore(results.items?.length >= 30); // GitHub API default per_page is 30
    setPage(pageToFetch + 1);
    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      {/* Search Form */}
      <form
        onSubmit={(e) => handleSearch(e, true)}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <input
          type="number"
          placeholder="Min Repos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button
          type="submit"
          className="md:col-span-3 bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* Results */}
      {loading && <p className="text-center">Loading...</p>}
      {!loading && users.length > 0 && (
        <div className="space-y-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="flex items-center p-4 border rounded shadow-sm bg-white"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h2 className="text-lg font-bold">{user.login}</h2>
                <p>Profile: <a href={user.html_url} target="_blank" rel="noreferrer" className="text-blue-500 underline">{user.html_url}</a></p>
                {/* Location and repo count will need an extra API call per user if needed */}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Load More */}
      {hasMore && !loading && (
        <div className="text-center mt-6">
          <button
            onClick={(e) => handleSearch(e, false)}
            className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;
