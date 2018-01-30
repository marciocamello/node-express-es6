import app from './app';

app.listen(app.get('port'), () => {
    console.log(`Started on port ${app.get('port')}`);
});