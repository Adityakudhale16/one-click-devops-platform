const path = require("path");
const fs = require("fs");
const { executeCommand } = require("../utils/shell");

const deploymentsPath = path.join(
  __dirname,
  "..",
  "..",
  "deployments"
);

const validateGitHubUrl = (repositoryUrl) => {
  try {
    const url = new URL(repositoryUrl);

    return (
      url.hostname === "github.com" &&
      url.pathname.length > 1
    );
  } catch (error) {
    return false;
  }
};

const clone = async (repositoryUrl) => {
  if (!validateGitHubUrl(repositoryUrl)) {
    throw new Error("Invalid GitHub repository URL");
  }

  await fs.promises.mkdir(deploymentsPath, {
    recursive: true,
  });

  const repositoryName = repositoryUrl
    .split("/")
    .pop()
    .replace(".git", "");

  const deploymentFolder = path.join(
    deploymentsPath,
    `${repositoryName}-${Date.now()}`
  );

  await executeCommand(
    `git clone "${repositoryUrl}" "${deploymentFolder}"`
  );

  return deploymentFolder;
};

module.exports = {
  clone,
};