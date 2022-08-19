import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import { config } from './config/connection';


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    next();
});

app.use((req, res, next) => {
    const error = new Error('Not Found');
    return res.status(404).json({
        message: error.message
    });
});

app.get('/api', (req, res, next) => {
    res.status(200).json({
        message: 'welcome to the api'
    });
});

const server = http.createServer(app);
//development port
server.listen(config.development.port, () => {
    console.log(`Server is running on port ${config.development.port}`);
});
