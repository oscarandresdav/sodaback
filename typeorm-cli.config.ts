import { DataSource } from 'typeorm';
import { CategoryRefactor1665508484235 } from './src/migrations/1665508484235-CategoryRefactor';

export default new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'nestuser',
  password: 'Nest123.',
  database: 'soda',
  entities: [],
  migrations: [CategoryRefactor1665508484235],
});
