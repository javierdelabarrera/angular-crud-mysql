import { Router } from 'express';

class GamesRoutes {

    public router: Router = Router(); // prop router de tipo Router, almacena obj que devuelve met Router

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', (req, res) => res.send('Games')); // defino ruta inicial de la app
    }

}

const gamesRoutes = new GamesRoutes();

export default gamesRoutes.router;