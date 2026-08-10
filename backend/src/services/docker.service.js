const fs = require("fs");
const path = require("path");
const { executeCommand } = require("../utils/shell");

const createDockerfile = async (repositoryPath) => {
  const dockerfilePath = path.join(repositoryPath, "Dockerfile");

  const dockerfileContent = `FROM httpd:2.4
COPY . /usr/local/apache2/htdocs/
EXPOSE 80
`;

  await fs.promises.writeFile(
    dockerfilePath,
    dockerfileContent,
    "utf8"
  );

  return dockerfilePath;
};

const build = async (repositoryPath, imageName) => {
  await createDockerfile(repositoryPath);

  await executeCommand(
    `docker build -t ${imageName} "${repositoryPath}"`
  );

  return imageName;
};

const run = async (imageName, containerName) => {
  // Docker automatically chooses a free host port
  await executeCommand(
    `docker run -d --name ${containerName} -p 0:80 ${imageName}`
  );

  // Get the port assigned by Docker
  const result = await executeCommand(
    `docker port ${containerName} 80`
  );

  const portOutput = result.stdout.trim();

  // Example:
  // 0.0.0.0:49153
  // [::]:49153
  const match = portOutput.match(/:(\d+)/);

  if (!match) {
    throw new Error("Could not determine the assigned Docker port.");
  }

  const hostPort = match[1];

  return `http://localhost:${hostPort}`;
};

module.exports = {
  build,
  run,
};