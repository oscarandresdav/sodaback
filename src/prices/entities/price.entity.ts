import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';
import { Product } from '../../products/entities/product.entity';

@Entity()
export class Price {
  @PrimaryGeneratedColumn('identity')
  id: string;

  @Column({ type: 'decimal', precision: 12, scale: 4 })
  priceNonTax: number;

  @Column({ type: 'decimal', precision: 10, scale: 4 })
  percentageMarginSale: number;

  @Column({ type: 'decimal', precision: 12, scale: 4 })
  priceTax: number;

  @Column({ default: true })
  status: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  modified_at: Date;

  @VersionColumn({ nullable: true })
  revision: number;

  @OneToMany(() => Product, (product) => product.price)
  products: Product[];
}
