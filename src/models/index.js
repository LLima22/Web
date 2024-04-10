import { sequelize, DataTypes } from "../configs/db.js";
export const cliente = sequelize.define("cliente", {
    nome: {
        type: DataTypes.STRING,
    },
    endereco: {
        type: DataTypes.STRING,
    },
    bairro: {
        type: DataTypes.STRING,
    },
    cep: {
        type: DataTypes.STRING,
    },
    cidade: {
        type: DataTypes.STRING,
    },
    estado: {
        type: DataTypes.STRING,
    },
});



