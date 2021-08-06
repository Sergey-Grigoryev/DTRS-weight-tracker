const users = require("users");
const weight_posts = require("weight_posts");

// associations
users.hasMany(weight_posts, {
  foreighKey: "user_id",
});

weight_posts.belongsTo(users, {
  foreignKey: "user_id",
});

module.exports = { users, weight_posts };
