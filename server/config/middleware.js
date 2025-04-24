import cors from "cors";
import bodyParser from "body-parser";

export const applyMiddleware = (app) => {
  app.use(cors());
  app.use(bodyParser.json());
};
