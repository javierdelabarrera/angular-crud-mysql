"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class GamesRoutes {
    constructor() {
        this.router = express_1.Router(); // prop router de tipo Router, almacena obj que devuelve met Router
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('Games')); // defino ruta inicial de la app
    }
}
const gamesRoutes = new GamesRoutes();
exports.default = gamesRoutes.router;
