import express from 'express';
import {connectDB} from './Infrastructure/database/mongoose';
import { createUserUseCase } from './modules/User/UseCases/CreateUser';
import { getAllUsersUseCase } from './modules/User/UseCases/GetAllUsers';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 4000;

// connectDB().then(() => {
//     app.listen(port, () => {
//         return console.log(`listening on port ${port}`)
//     });
// })
connectDB()
app.use(bodyParser.json());
app.use(cors())
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);
app.listen(port, () => {
    return console.log(`listening on port ${port}`)
})

app.post('/post', async (req, res) => {
    const {firstName, lastName, email} = req.body
    res.send(await createUserUseCase.execute({firstName, lastName, email}))
})

app.get('/getAllUsers', async (req, res) => {
    res.send(await getAllUsersUseCase.execute())
})
// app.get('/', (req, res) => {
//     res.send('Test world file')
// });
