import { useState } from "react";
import { deployRepository } from "./services/api";

function App() {
  const [repositoryUrl, setRepositoryUrl] = useState("");
  const [message, setMessage] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDeploy = async () => {
    if (!repositoryUrl) {
      setMessage("Please enter a GitHub repository URL.");
      return;
    }

    try {
      setLoading(true);
      setMessage("Deploying repository...");
      setWebsiteUrl("");

      const data = await deployRepository(repositoryUrl);

      setMessage(data.message || "Repository deployed successfully!");

      if (data.deployedUrl) {
        setWebsiteUrl(data.deployedUrl);
      }
    } catch (error) {
      console.error(error);

      setMessage(
        error.response?.data?.message || "Deployment failed."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>One-Click DevOps Deployment Platform</h1>

      <p>Deploy your GitHub project with a single click.</p>

      <div className="deploy-box">
        <input
          type="text"
          className="repository-input"
          placeholder="Enter your GitHub repository URL"
          value={repositoryUrl}
          onChange={(event) => setRepositoryUrl(event.target.value)}
        />

        <button
          type="button"
          onClick={handleDeploy}
          disabled={loading}
        >
          {loading ? "Deploying..." : "Deploy"}
        </button>
      </div>

      {message && <p className="message">{message}</p>}

      {websiteUrl && (
        <div>
          <p>🎉 Website deployed successfully!</p>

          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button type="button">Open Website</button>
          </a>
        </div>
      )}
    </div>
  );
}

export default App;