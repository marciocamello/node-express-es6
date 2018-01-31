import restify from 'restify';
import Router from './routers/index'

class Server {
    
    constructor() {

        let port = process.env.PORT || 3000;

        // define restify serve
        this.server = restify.createServer();

        // load all routes
        this.router = new Router(this.server);

        // listen port and start server
        this.server.listen(port, () =>{
            console.log(`Started on port ${port}`);
        });
    }
}

export default new Server();