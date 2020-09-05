import * as express from "express";
import * as dotenv from "dotenv";
import * as bodyParser from "body-parser";

// Load our environment variables 
dotenv.config();

// Load express and the body parser
const app = express();
app.use(bodyParser.json({
  strict: false,
}));

// Port above 1024 is a good choice as they"re not privileged
const port = process.env.CENTRAL_PORT || 9000;

app.get("/", (req: express.Request, res: express.Response) => res.send("Central endpoint is online and healthy!"));

app.listen(port, () => console.log(`Central is listening on PORT: ${port}`));
