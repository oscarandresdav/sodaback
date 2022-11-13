import { Product } from '../../products/entities/product.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

@Entity()
export class IvaRate {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 45,
    unique: true,
    transformer: {
      to: (value: string) => value.trim().toUpperCase(),
      from: (value: string) => value,
    },
  })
  name: string;

  @Column({
    length: 3,
    unique: true,
    transformer: {
      to: (value: string) => value.trim().toUpperCase(),
      from: (value: string) => value,
    },
  })
  code: string;

  @Column({ type: 'smallint' })
  sort: number;

  @Column({ default: true })
  status: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  modified_at: Date;

  @VersionColumn({ nullable: true })
  revision: number;

  @OneToMany(() => Product, (product) => product.brand)
  products: Product[];
}
