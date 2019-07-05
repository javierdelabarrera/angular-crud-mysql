"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gamesControllers_1 = require("../controllers/gamesControllers");
class GamesRoutes {
    constructor() {
        this.router = express_1.Router(); // prop router de tipo Router, almacena obj que devuelve met Router
        this.config();
    }
    config() {
        this.router.get('/', gamesControllers_1.gamesController.games); // importo metodo de controllers
    }
}
const gamesRoutes = new GamesRoutes();
exports.default = gamesRoutes.router;
