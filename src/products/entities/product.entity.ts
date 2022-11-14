import { Category } from '../../categories/entities/category.entity';
import { Price } from '../../prices/entities/price.entity';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';
import { Brand } from 'src/brands/entities/brand.entity';
import { TypeProduct } from '../../type-products/entities/type-product.entity';
import { IvaRate } from '../../iva-rates/entities/iva-rate.entity';
import { IceRate } from '../../ice-rates/entities/ice-rate.entity';
import { UnitMeasurement } from '../../unit-measurements/entities/unit-measurement.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 45,
    unique: true,
  })
  mainCode: string;

  @Column({
    length: 45,
    unique: true,
    nullable: true,
  })
  auxCode: string;

  @Column({
    length: 255,
    unique: true,
  })
  name: string;

  @Column({ type: 'text', nullable: true })
  detail: string;

  @Column({ default: 0 })
  stock: number;

  @Column({ default: 1 })
  minimunStock: number;

  @Column({ type: 'decimal', precision: 12, scale: 4 })
  cost: number;

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
    this.mainCode = this.mainCode.trim().toUpperCase();
    if (this.auxCode) {
      this.auxCode = this.auxCode.trim().toUpperCase();
    }
  }

  @ManyToOne(() => Category, (category) => category.products)
  category: Category;

  @ManyToOne(() => Brand, (brand) => brand.products)
  brand: Brand;

  @ManyToOne(() => Price, (price) => price.products)
  price: Price;

  @ManyToOne(() => TypeProduct, (typeProduct) => typeProduct.products)
  typeProduct: TypeProduct;

  @ManyToOne(() => IvaRate, (ivaRate) => ivaRate.products)
  ivaRate: IvaRate;

  @ManyToOne(() => IceRate, (iceRate) => iceRate.products)
  iceRate: IceRate;

  @ManyToOne(
    () => UnitMeasurement,
    (unitMeasurement) => unitMeasurement.products,
  )
  unitMeasurement: IceRate;
}
