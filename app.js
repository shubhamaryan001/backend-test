const { exec, spawn } = require("child_process");

exec("git status", (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  if (stderr) {
    console.error(stderr);
    return;
  }
  console.log(stdout);
});

exec("git add .", (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  if (stderr) {
    console.error(stderr);
    return;
  }
  console.log(stdout);
});
