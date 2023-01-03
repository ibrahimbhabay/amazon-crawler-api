import Express, { Application } from 'express';
import cors from 'cors';
import { setupDotenv } from './config/dotenv.setup';
import mongoose from 'mongoose';
import { routes } from './routes';

setupDotenv();

const app: Application = Express();
const PORT = process.env.PORT || 3001;
app.use(Express.json());
app.use(cors());
app.use('/api/v1', routes);

const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION_STRING, () => {
            console.log(`Database connection successfully established.`);
        }) 
    }
    catch(error){
        console.log(`Error occured in establishing database connection.`);
        console.log(error);
    }
}

app.listen(PORT, (): void => {
    console.log(`Application is runnig on port: ${PORT}`);
})

connectDatabase();