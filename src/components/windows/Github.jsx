import React, { useEffect, useState } from "react";
import MacWindow from "./MacWindow";
import "./github.scss";

const GitCard = () => {
  return (
    <div className="card">
      <img src={data.image} alt="" />
      <h1>{data.title}</h1>
      <p className="description">{data.description}</p>
      <div className="tags">
        {data.tags.map((tag) => {
          return <p className="tag">{tag}</p>;
        })}
      </div>
      <div className="urls">
        <a href={data.repoLink}>Repository</a>
        {data.demoLink && (
          <a className="liveLink" href={data.demoLink}>
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

const Github = ({ windowName, setWindowsState }) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/niraj-verma07/repos")
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        // console.log(data);
      });
  }, []);
  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
      <div className="github-section">
        <h2>My GitHub Projects</h2>

        {repos.map((repo) => (
          <div key={repo.id} className="repo-card">
            <h3>{repo.name}</h3>

            <p className="description">
              {repo.description || "No description available"}
            </p>

            <div className="meta">
              <span>⭐ {repo.stargazers_count}</span>
              <span>{repo.language || "N/A"}</span>
            </div>

            <div className="repo-url">
              <a href={repo.html_url}>Live</a>
            </div>
          </div>
        ))}
      </div>
    </MacWindow>
  );
};

export default Github;
