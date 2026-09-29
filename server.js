import { spawn } from "node:child_process";

const child = spawn(
  "./node_modules/.bin/srvx",
  [
    "serve",
    "--prod",
    "--entry",
    "./dist/server/server.js",
    "--static",
    "../client"
  ],
  {
    stdio: "inherit"
  }
);

child.on("error", (error) => {
  console.error("ERROR AL INICIAR SRVX:", error);
});

child.on("exit", (code) => {
  console.log("SRVX TERMINÓ CON CÓDIGO:", code);
  process.exit(code ?? 0);
});