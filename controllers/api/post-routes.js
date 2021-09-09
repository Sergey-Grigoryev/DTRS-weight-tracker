const router = require("express").Router();
const sequelize = require("../../config/connection");
const withAuth = require("../../utils/auth");

const { weight_posts, users } = require("../../models");

router.get("/", (req, res) => {
  weight_posts
    .findAll({
      attributes: ["id", "user_id", "date", "weight"],
      include: [
        {
          model: users,
          attributes: ["username"],
        },
      ],
    })
    .then((weight_postsData) => res.json(weight_postsData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  weight_posts
    .findOne({
      where: {
        id: req.params.id,
      },
      attributes: ["id", "user_id", "date", "weight"],
      include: [
        {
          model: users,
          attributes: ["username"],
        },
      ],
    })
    .then((weight_postsData) => {
      if (!weight_postsData) {
        res.status(404).json({ message: "No Weight Post found with this id" });
        return;
      }
      res.json(weight_postsData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", withAuth, (req, res) => {
  weight_posts
    .create({
      weight: req.body.weight,
      user_id: req.session.user_id,
    })
    .then((weight_postsData) => res.json(weight_postsData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", withAuth, (req, res) => {
  console.log("id", req.params.id);
  weight_posts
    .destroy({
      where: {
        id: req.params.id,
      },
    })
    .then((weight_postsData) => {
      if (!weight_postsData) {
        res.status(404).json({ message: "No weight post found with this id" });
        return;
      }
      res.json(weight_postsData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
