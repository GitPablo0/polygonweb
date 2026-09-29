import { serve } from "srvx";
import { staticMiddleware } from "srvx/static";
import app from "./dist/server/server.js";

const port = Number(process.env.PORT) || 3000;

console.log(">>> INICIANDO POLYGONWEB <<<");
console.log("Puerto:", port);

const server = serve({
  port,
  middleware: [
    staticMiddleware({
      dir: "./dist/client",
    }),
  ],
  fetch: app.fetch,
});

server.ready().then(() => {
  console.log(">>> POLYGONWEB ESCUCHANDO EN:", server.url);
});