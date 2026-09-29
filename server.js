console.log(">>> SERVER.JS DE POLYGONWEB SE ESTA EJECUTANDO <<<");

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

child.on("error", (error) => {
  console.error("ERROR AL INICIAR SRVX:", error);
});

child.on("exit", (code) => {
  console.log("SRVX TERMINÓ CON CÓDIGO:", code);
  process.exit(code ?? 0);
});