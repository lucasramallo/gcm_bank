import express, { Express } from "express";
import bodyParser from "body-parser";
import routes from "./routes/index";
import config from "./config/config";

const app: Express = express();
app.use(bodyParser.json());

app.use("/api", routes);

app.listen(config.port, () => {
  console.log(`Payment Service running on port ${config.port}`);
});
