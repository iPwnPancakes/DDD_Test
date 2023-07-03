import {connect, ConnectOptions} from 'mongoose';

export async function connectDB () {
    try{
        await connect('mongodb+srv://lsiopongco:Blackcat13@cluster0.rjh01d1.mongodb.net/');
        console.log('connected to mongodb server')
    } catch (error) {
        return console.log('Failed to connect to mongodb server', error)
    }
}
