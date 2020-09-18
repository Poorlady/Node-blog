const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");

const blogRoutes = require("./routes/blogRoutes");

const server = express();

const dbURI =
  "mongodb+srv://saniekasmara:Javamongodb98@storedb.e9u42.mongodb.net/Node-blog?retryWrites=true&w=majority";

server.set("view engine", "ejs");

server.use(express.static(path.join(__dirname, "public")));
server.use(express.urlencoded({ extended: true }));
server.use(morgan("dev"));
server.use("/blog", blogRoutes);

server.get("/", (req, res) => {
  res.redirect("/blog/");
});

server.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});

mongoose
  .connect(dbURI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then((result) => {
    server.listen(3000);
    console.log("connected, server up and running");
    // console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
