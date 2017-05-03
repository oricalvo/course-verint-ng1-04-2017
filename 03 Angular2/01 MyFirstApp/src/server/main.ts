import * as express from "express";
import * as path from "path";
import * as webpack from "webpack";
import * as webpackMiddleware from "webpack-dev-middleware";

const config = require(path.join(__dirname, "../../webpack.config.js"));
const compiler = webpack(config);
const app = express();

app.use(express.static(path.join(__dirname, "../assets")));

app.use(webpackMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: {colors: true}
}));

express.listen(function() {
  console.log("Server is running");
}, 4200);
