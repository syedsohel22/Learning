import { useState, useEffect } from "react";

function Home() {
  const [username, setUsername] = useState("");
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTrigger, setSearchTrigger] = useState(false);

  const handleSearch = () => {
    setSearchTrigger((p) => !p);
  };
  useEffect(() => {
    const fetchRepos = async () => {
      if (username.trim() === "") {
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos`
        );
        if (!response.ok) {
          throw new Error("GitHub API request failed");
        }

        const data = await response.json();
        setRepos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchRepos();
    }
    console.log("searchTrigger =>", searchTrigger);
  }, [searchTrigger]);

  return (
    <div className="home">
      <h1>Github Repository Search</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div>
        <h2>Repositories for {username}</h2>
        <ul>
          {repos.map((repo) => (
            <li key={repo.id}>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
              <p>Description: {repo.description}</p>
              <p>Stars: {repo.stargazers_count}</p>
              <p>Forks: {repo.forks_count}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
