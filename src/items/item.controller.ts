import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SuccessResponseInterface } from 'src/interfaces/success-response.interface';
import responseUtils from 'src/utils/response.utils';
import { DeleteResult, UpdateResult } from 'typeorm';
import CreateItemDto from './dto/create-item.dto';
import UpdateItemDto from './dto/update-item.dto';
import ItemService from './item.service';
import ItemEntity from './schemas/item.entity';

@ApiTags('Items')
@Controller('items')
export default class ItemController {
  constructor(private readonly itemsService: ItemService) {}

  @Post()
  create(@Body() data: CreateItemDto): Promise<ItemEntity> {
    return this.itemsService.create(data);
  }

  @Get()
  async list(): Promise<SuccessResponseInterface> {
    return responseUtils.success('item', await this.itemsService.list());
  }

  @Get(':uid')
  async fetch(@Param('uid') uid: string): Promise<SuccessResponseInterface> {
    return responseUtils.success('item', await this.itemsService.fetch(uid));
  }

  @Patch(':uid')
  update(
    @Param('uid') uid: string,
    @Body() data: UpdateItemDto,
  ): Promise<UpdateResult> {
    return this.itemsService.update(uid, data);
  }

  @Delete(':uid')
  delete(@Param('uid') uid: string): Promise<DeleteResult> {
    return this.itemsService.delete(uid);
  }
}
