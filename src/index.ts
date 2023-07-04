import express from 'express';
import {connectDB} from './Infrastructure/database/mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import { ProdCompositionRoot } from './Infrastructure/application/compositionRoot';

const compositionRoot = new ProdCompositionRoot();

const app = express();
const port = 4000;

connectDB();

app.use(bodyParser.json());
app.use(cors())
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);

app.post('/post', async (req, res) => {
    const {firstName, lastName, email} = req.body;

    const createUserUseCase = compositionRoot.makeCreateUserUseCase();
    res.send(await createUserUseCase.execute({firstName, lastName, email}))
})

app.get('/getAllUsers', async (req, res) => {
    const getAllUsersUseCase = compositionRoot.makeGetAllUsersUseCase();
    res.send(await getAllUsersUseCase.execute())
})

app.listen(port, () => {
    return console.log(`listening on port ${port}`)
})