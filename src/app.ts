import 'reflect-metadata';
import express from 'express';
import { createConnection } from 'typeorm';

// import {cronRun} from './cron';
import { mainRouter } from './routes/mainRouter';
import fileUpload from 'express-fileupload';



const app = express();

app.use(fileUpload());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(mainRouter);

const { PORT } = process.env;
app.listen(PORT, async () => {
    console.log(`Server is started on PORT:${PORT}!`);
    try {
        const connection = await createConnection();
        if (connection) {
            console.log('Database connection!');
            // cronRun()
        }
    } catch (err) {
        if (err) console.log(err);
    }
});
