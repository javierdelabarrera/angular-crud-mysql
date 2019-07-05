import { Router } from 'express';

import { gamesController } from '../controllers/gamesControllers';

class GamesRoutes {

    public router: Router = Router(); // prop router de tipo Router, almacena obj que devuelve met Router

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', gamesController.list); // importo metodo de controllers
        this.router.get('/:id', gamesController.getOne);
        this.router.post('/', gamesController.create); // piden peticion post a api games via post, uso metodo create
        this.router.put('/:id', gamesController.update);
        this.router.delete('/:id', gamesController.delete);
    }

}

const gamesRoutes = new GamesRoutes();

export default gamesRoutes.router; 