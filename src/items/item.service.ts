import { Injectable } from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';
import ItemRepository from './reopsitories/item.repository';
import ItemEntity from './schemas/item.entity';

@Injectable()
export default class ItemService {
  constructor(private readonly itemRepository: ItemRepository) {}
  list(): Promise<ItemEntity[]> {
    return this.itemRepository.list();
  }
  fetch(uid: string): Promise<ItemEntity> {
    return this.itemRepository.fetch(uid);
  }
  update(uid: string, data: any): Promise<UpdateResult> {
    return this.itemRepository.update(uid, data);
  }
  delete(uid: string): Promise<DeleteResult> {
    return this.itemRepository.delete(uid);
  }
  create(data: any): Promise<ItemEntity> {
    return this.itemRepository.create(data);
  }
}
