const Koa = require("koa");
const Router = require("koa-router");
const bodyparser = require("koa-bodyparser");
const logger = require("koa-logger");
const cors = require("@koa/cors");
const path = require("path");
const static = require("koa-static");

const app = new Koa();
const router = new Router();
const port = process.env.PORT || "3009";
const staticPath = path.join(process.cwd(), "../client");
const routerHandle = require("./router");
routerHandle(router);

app
  .use(logger())
  .use(cors())
  .use(bodyparser())
  .use(router.routes())
  .use(router.allowedMethods())
  .use(static(staticPath))
  .listen(port, () => {
    console.log("hello koa! port:", port);
  });
