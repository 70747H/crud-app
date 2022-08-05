import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import ItemEntity from '../schemas/item.entity';

@Injectable()
export default class ItemRepository {
  update(uid: string, data: any): Promise<UpdateResult> {
    return this.itemModel.update({ uid }, data);
  }
  constructor(
    @InjectRepository(ItemEntity)
    private readonly itemModel: Repository<ItemEntity>,
  ) {}

  create(data: any): Promise<ItemEntity> {
    return this.itemModel.save(data);
  }

  list(): Promise<ItemEntity[]> {
    return this.itemModel.find();
  }

  fetch(uid: string): Promise<ItemEntity> {
    return this.itemModel.findOneByOrFail({ uid });
  }

  delete(uid: string): Promise<DeleteResult> {
    return this.itemModel.delete({ uid });
  }
}
