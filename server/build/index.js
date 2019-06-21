"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const gamesRoutes_1 = __importDefault(require("./routes/gamesRoutes"));
// declaro clase server
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    // metodos del server
    // config configura prop app 
    config() {
        this.app.set('port', process.env.PORT || 3000); // si hay port set toma ese, si no va al 3000
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json()); // met para poder aceptar json de apps clientes (antes body parser)
        this.app.use(express_1.default.urlencoded({ extended: false })); // por si queremos enviar desde html form 
    }
    // para configurar rutas de app
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/games', gamesRoutes_1.default);
    }
    // para init server
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port ', this.app.get('port'));
        });
    }
}
// instanciamos objeto de class server
const server = new Server();
server.start();
