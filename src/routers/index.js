import homeRouter from './home';
import userRouter from './user';

class Router {

    constructor(server) {
        
        this.homeRouter = new homeRouter(server);
        this.userRouter = new userRouter(server);
    }
}

export default Router;