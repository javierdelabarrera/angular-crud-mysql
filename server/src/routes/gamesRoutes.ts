import { Router } from 'express';

import { gamesController } from '../controllers/gamesControllers';

class GamesRoutes {

    public router: Router = Router(); // prop router de tipo Router, almacena obj que devuelve met Router

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', gamesController.games); // importo metodo de controllers
    }

}

const gamesRoutes = new GamesRoutes();

export default gamesRoutes.router;