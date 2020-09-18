const Blog = require("../models/blog");

exports.getAllPost = (req, res) => {
  Blog.find()
    .then((result) =>
      res.render("index", { title: "welcome to my site", blogs: result })
    )
    .catch((err) => console.log(err));
};

exports.getCreatePost = (req, res) => {
  res.render("create", { title: "Create a new blog" });
};

exports.postCreatePost = (req, res) => {
  const blog = new Blog(req.body);

  blog
    .save()
    .then((result) => {
      console.log(result);
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};

exports.getPostbyId = (req, res) => {
  const param = req.params.id;

  Blog.findById(param)
    .then((result) =>
      res.render("detail", { title: result.title, post: result })
    )
    .catch((err) => console.log(err));
};

exports.deletePostbyId = (req, res) => {
  Blog.findByIdAndDelete(req.params.id)
    .then((result) => res.json({ redirect: "/" }))
    .catch((err) => console.log(err));
};
