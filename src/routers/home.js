import HomeController from '../controllers/HomeController';

class HomeRouter {

    constructor(server) {

        server.get('/', HomeController.indexAction);
    }
    
}

export default HomeRouter;