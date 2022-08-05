import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ItemController from './item.controller';
import ItemService from './item.service';
import ItemRepository from './reopsitories/item.repository';
import ItemEntity from './schemas/item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ItemEntity])],
  controllers: [ItemController],
  providers: [ItemService, ItemRepository],
  exports: [ItemService, ItemRepository],
})
export class ItemModule {}
