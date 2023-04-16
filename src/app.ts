import 'reflect-metadata';
import express from 'express';
import { createConnection } from "typeorm";

import { mainRouter } from "./routes/mainRouter";



const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.use(mainRouter);


app.listen(5000, async () => {
    console.log('Server is started!');
    try {
        const connection = await createConnection();
        if (connection) {
            console.log('Database connection!');
        }
    }catch (err) {
        if (err) console.log(err);
    }
})