class UserController{
    
    constructor() {
        this.indexAction = this.indexAction.bind(this);
        this.showAction = this.showAction.bind(this);
        this.createAction = this.createAction.bind(this);
        this.updateAction = this.updateAction.bind(this);
        this.deleteAction = this.deleteAction.bind(this);
    }

    indexAction(req, res, next) {

        res.send('List users');
        next();
    }

    showAction(req, res, next) {

        res.send('Show user');
        next();
    }

    createAction(req, res, next) {

        res.send('Create user');
        next();
    }

    updateAction(req, res, next) {

        res.send('Update user');
        next();
    }

    deleteAction(req, res, next) {

        res.send('Delete user');
        next();
    }

}

export default new UserController();