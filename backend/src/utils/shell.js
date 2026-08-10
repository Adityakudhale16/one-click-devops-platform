const { exec } = require("child_process");

function executeCommand(command) {
  console.log("Executing command:", command);

  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      console.log("STDOUT:", stdout);
      console.log("STDERR:", stderr);

      if (error) {
        console.log("COMMAND ERROR:", error.message);

        reject(error);
        return;
      }

      resolve({
        stdout,
        stderr,
      });
    });
  });
}

module.exports = {
  executeCommand,
};