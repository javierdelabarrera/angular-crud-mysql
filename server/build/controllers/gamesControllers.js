"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GamesController {
    list(req, res) {
        res.json({ text: 'listing games' });
    }
    ;
    getOne(req, res) {
        res.json({ text: 'This is game with id ' + req.params.id });
    }
    create(req, res) {
        res.json({ text: 'creating a game' });
    }
    ;
    update(req, res) {
        res.json({ text: 'updating a game with id ' + req.params.id });
    }
    ;
    delete(req, res) {
        res.json({ text: 'deleting a game with id ' + req.params.id });
    }
    ;
}
exports.gamesController = new GamesController();
exports.default = exports.gamesController; // exporto instanciacion de la clase
