const express = require("express");
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");
const indexRouter = require("./routers/indexRouter");

const app = express();

app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

const PORT = 3000;
app.listen(PORT);
