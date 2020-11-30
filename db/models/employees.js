const sequelize = require("../../config/sequelize");
const Sequelize = require("sequelize");

class Employees extends Sequelize.Model {}

Employees.init(
  {
    id: {
      type: Sequelize.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
    },
    name: Sequelize.STRING(50),
    phone_number: Sequelize.STRING(16),
    jobtitle: Sequelize.STRING(25),
  },
  {
    underscored: true,
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
    sequelize: sequelize,
    modelName: "employees",
    tableName: "employees",
  }
);

module.exports = {
  Employees,
};
