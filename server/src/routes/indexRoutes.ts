import { Router } from 'express';

import { indexController } from '../controllers/indexControllers';

class IndexRoutes {

    public router: Router = Router(); // prop router de tipo Router, almacena obj que devuelve met Router

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', indexController.index); // defino ruta inicial de la app
    }

}

const indexRoutes = new IndexRoutes();

export default indexRoutes.router;