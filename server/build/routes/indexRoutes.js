"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexControllers_1 = require("../controllers/indexControllers");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router(); // prop router de tipo Router, almacena obj que devuelve met Router
        this.config();
    }
    config() {
        this.router.get('/', indexControllers_1.indexController.index); // defino ruta inicial de la app
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
