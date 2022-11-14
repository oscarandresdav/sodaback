import { Product } from '../../products/entities/product.entity';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

@Entity()
export class IceRate {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 45,
    unique: true,
  })
  name: string;

  @Column({
    length: 6,
    unique: true,
  })
  code: string;

  @Column({ length: 4 })
  ad_valorem: string;

  @Column({ default: true })
  status: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  modified_at: Date;

  @VersionColumn({ nullable: true })
  revision: number;

  @BeforeInsert()
  @BeforeUpdate()
  fieldTransformCase() {
    this.name = this.name.trim().toUpperCase();
  }

  @OneToMany(() => Product, (product) => product.brand)
  products: Product[];
}
