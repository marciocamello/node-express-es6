import UserController from '../controllers/UserController';

class UserRouter {

    constructor(server) {

        server.get('/user', UserController.indexAction);
        server.get('/user/:id', UserController.showAction);
        server.post('/user', UserController.createAction);
        server.put('/user/:id', UserController.updateAction);
        server.del('/user/:id', UserController.deleteAction);
    }
    
}

export default UserRouter;