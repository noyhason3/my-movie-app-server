import express from 'express'
import { port, whitelist } from './const';
import { Request, Response } from 'express';
export const app = express();

const cors = require("cors")
const movieRoutes = require('./movie/movie.route')

const corsOptions = {
    origin: function (origin: any, callback: any) {
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error("Not allowed by CORS"))
        }
    },
    credentials: true,
}
app.use(cors(corsOptions))

app.use('/movie', movieRoutes)

app.use((request: Request, response: Response) => {
    response.json({ message: 'Hey! This is your server response!' });
});

const server = app.listen(3333, function () {
    console.log("App is listening at port:", port)
})

module.exports = app;

