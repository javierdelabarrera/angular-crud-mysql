 import express, { Application } from 'express';
 import morgan from 'morgan';
 import cors from 'cors';

 import indexRoutes from './routes/indexRoutes';
 import gamesRoutes from './routes/gamesRoutes';

 // declaro clase server
 class Server {

    // guardo obj de express en prop de la clase en este, defino public 
    public app: Application;

     constructor() {
        this.app = express();
        this.config();
        this.routes();
     }

     // metodos del server
     // config configura prop app 
     config(): void {
        this.app.set('port', process.env.PORT || 3000); // si hay port set toma ese, si no va al 3000
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json()); // met para poder aceptar json de apps clientes (antes body parser)
        this.app.use(express.urlencoded({extended: false})); // por si queremos enviar desde html form 
     }
     // para configurar rutas de app
     routes(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/api/games',gamesRoutes);
     }
     // para init server
     start(): void {
         this.app.listen(this.app.get('port'), () => {
             console.log('Server on port ', this.app.get('port')); 
         });
     }
 }

 // instanciamos objeto de class server
 const server = new Server();
 server.start();