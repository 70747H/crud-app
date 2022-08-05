import { DataSource } from 'typeorm';
import { config } from 'dotenv';

config();

export const datasource = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT as unknown as number,
  username: process.env.POSTGRE_ROOT_USER,
  password: process.env.POSTGRE_PASSWORD,
  database: process.env.POSTGRE_DB,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
});
