const { Router } = require("express");

const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) =>
  res.render("index", { title: "Mini Messageboard", messages: messages })
);

indexRouter.get("/new", (req, res) => res.render("form"));

indexRouter.get("/:id", (req, res) =>
  res.render("message", { message: messages[req.params.id] })
);

indexRouter.post("/new", (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.author,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = indexRouter;
