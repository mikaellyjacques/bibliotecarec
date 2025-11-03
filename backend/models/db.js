import dotenv from 'dotenv';
import pg, {Connection, Pool} from 'pg';

dotenv.config();

const {Pool}= pg;

export const pool= new Pool({
    ConnectionString: process.env.DATABASE_URL,
});
    