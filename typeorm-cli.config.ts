import { DataSource } from 'typeorm';
import { CategoryRefactor1665508484235 } from './src/migrations/1665508484235-CategoryRefactor';

export default new DataSource({
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: +process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [],
  migrations: [CategoryRefactor1665508484235],
});
