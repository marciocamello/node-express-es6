import restify from 'restify';
import Router from './routers/index'

class Server {
    
    constructor() {

        // set port by process and default 3000
        let port = process.env.PORT || 3000;

        // define restify serve
        this.server = restify.createServer({
            name: 'node-es6',
            version: '1.0.0'
        });

        // load plugins
        this.server.use(restify.plugins.acceptParser(this.server.acceptable));
        this.server.use(restify.plugins.queryParser());
        this.server.use(restify.plugins.bodyParser());

        // load all routes
        this.router = new Router(this.server);

        // listen port and start server
        this.server.listen(port, () =>{
            console.log(`Started on port ${port} to application ${this.server.name} from url ${this.server.url}`);
        });
    }
}

export default new Server();