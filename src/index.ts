import express from 'express';
import {connectDB} from './Infrastructure/database/mongoose';
const app = express();
const port = 4000;

connectDB().then(() => {
    app.listen(port, () => {
        return console.log(`listening on port ${port}`)
    });
})
// app.get('/', (req, res) => {
//     res.send('Test world file')
// });
