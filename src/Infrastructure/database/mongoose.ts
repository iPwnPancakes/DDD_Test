import { connect } from 'mongoose';

export async function connectDB (connectionString: string) {
    try{
        await connect(connectionString);
        console.log('connected to mongodb server')
    } catch (error) {
        return console.log('Failed to connect to mongodb server', error)
    }
}
