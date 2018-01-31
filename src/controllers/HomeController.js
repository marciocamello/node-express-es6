class HomeController{
    
    constructor() {
        this.indexAction = this.indexAction.bind(this);
    }

    indexAction(req, res, next) {

        res.send('Home index');
        next();
    }

}

export default new HomeController();