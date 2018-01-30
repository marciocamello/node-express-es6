import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.set('port', 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

export default app;