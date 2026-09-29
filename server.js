import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const appRoot = path.dirname(fileURLToPath(import.meta.url));

console.log(">>> INICIANDO POLYGONWEB <<<");

const child = spawn(
  "npm",
  ["start"],
  {
    cwd: appRoot,
    stdio: "inherit",
    shell: false
  }
);

child.on("error", (error) => {
  console.error("ERROR AL EJECUTAR NPM:", error);
});

child.on("exit", (code, signal) => {
  console.log("NPM TERMINÓ:", { code, signal });
  process.exit(code ?? 1);
});