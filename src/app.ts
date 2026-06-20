// Configures the setting for the express app object

import express, { Express, NextFunction } from 'express';
import { userRouter } from './routers/user.router.js';

const app: Express = express();

function logRequest(req: Request, res: Response, next: NextFunction) {

    console.log("URL: ", req.url);
    console.log("Executed logRequest middleware");
    next(); // Please call my next function
    console.log("Complete");

}

function anotherLogger(req: Request, res: Response, next: NextFunction) {
    console.log("URL: ", req.url);
    console.log("Executed anotherLogger middleware");
    next(); // Please call my next function
}

app.use(express.json()); // this will help express to deserialize the request body (JSON) into a JavaScript object
app.use(express.text());
app.use(express.urlencoded());

const sequence = [logRequest, anotherLogger];
// Custom routes
app.get('/health', sequence, (_req, res) => {
    console.log("Executed health route");
    res.json({
        status: 'ok!',
        timestamp: new Date().toISOString()
    })

});

app.get('/health1', sequence, (_req, res) => {
    console.log("Executed health route");
    res.json({
        status: 'ok!',
        timestamp: new Date().toISOString()
    })

});


// Express router based routes
app.use('/api/users', userRouter); // if the route starts with /users, userRouter will handle it
export { app };