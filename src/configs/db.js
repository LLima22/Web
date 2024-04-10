import { Sequelize, DataTypes } from "sequelize";
const sequelize = new Sequelize("banco", "root", "", {
    host: "localhost",
    dialect: "mysql"
});
export {
    Sequelize,
    sequelize,
    DataTypes,
}