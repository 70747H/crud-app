import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemModule } from './items/item.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST || 'postgres',
      port: process.env.POSTGRES_PORT as unknown as number,
      database: process.env.POSTGRES_DB,
      username: process.env.POSTGRES_ROOT_USER,
      password: process.env.POSTGRES_PASSWORD,
      entities: ['dist/**/*.entity{.ts,.js}'],
      migrations: ['dist/migrations/*{.ts,.js}'],
      migrationsRun: false,
      synchronize: false,
      autoLoadEntities: false,
      logging: process.env.NODE_ENV === 'development',
    }),
    ItemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
