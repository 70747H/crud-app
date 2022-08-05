import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Generated,
  BaseEntity,
} from 'typeorm';
import { instanceToPlain } from 'class-transformer';

@Entity('items')
export default class ItemEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  readonly uid?: string;

  @Column()
  @Generated('increment')
  public id!: number;

  @Column({ type: String, length: 64, nullable: false })
  readonly name!: string;

  @Column({
    nullable: false,
    select: true,
    default: (): string => 'CURRENT_TIMESTAMP',
    type: 'timestamp without time zone',
  })
  public createAt!: Date;

  @Column({
    nullable: false,
    select: true,
    default: (): string => 'CURRENT_TIMESTAMP',
    type: 'timestamp without time zone',
  })
  public updateAt!: Date;

  toJSON() {
    return instanceToPlain(this);
  }
}
