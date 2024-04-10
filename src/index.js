import express, { Router } from 'express';
import { Routes } from './routes/index.js';
import cors from 'cors';
import * as handlebars from 'express-handlebars';
import bodyParser from 'body-parser';
const app = express();
const router = Router();
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Headers", '*');
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});
app.engine("handlebars", handlebars.engine({ defaultLayout: "main" }));
app.set("views engine", "handlebars");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);
Routes(app);
app.use(express.json());
const PORT = 3000
app.listen(PORT, () => {
    console.log(`servidor on in http://localhost:${PORT}`)
})