const { clone } = require("./git.service");
const { build, run } = require("./docker.service");

const deploy = async (repositoryUrl) => {
  // Step 1: Clone repository
  const repositoryPath = await clone(repositoryUrl);

  // Step 2: Get repository name and convert to lowercase
  const repositoryName = repositoryPath
    .split("\\")
    .pop()
    .toLowerCase();

  // Step 3: Create unique names
  const timestamp = Date.now();

  const imageName = `one-click-${repositoryName}-${timestamp}`;
  const containerName = `one-click-container-${repositoryName}-${timestamp}`;

  // Step 4: Build Docker image
  await build(repositoryPath, imageName);

  // Step 5: Run container
  // Docker automatically assigns a free port
  const deployedUrl = await run(
    imageName,
    containerName
  );

  return {
    message: "Deployment successful",
    repositoryPath,
    imageName,
    containerName,
    deployedUrl,
  };
};

module.exports = {
  deploy,
};