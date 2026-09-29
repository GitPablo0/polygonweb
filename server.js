import { spawn } from "node:child_process";

const child = spawn(
  "npx",
  [
    "srvx",
    "serve",
    "--prod",
    "--entry",
    "./dist/server/server.js",
    "--static",
    "../client"
  ],
  {
    stdio: "inherit",
    shell: true
  }
);

child.on("exit", (code) => {
  process.exit(code ?? 0);
});