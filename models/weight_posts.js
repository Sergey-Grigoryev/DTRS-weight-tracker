const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class weight_posts extends Model {}

weight_posts.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user_id",
        key: "id",
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "weight_posts",
  }
);

module.exports = weight_posts;
