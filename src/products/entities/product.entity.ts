import { Category } from '../../categories/entities/category.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 45, unique: true })
  mainCode: string;

  @Column({ length: 45, unique: true, nullable: true })
  auxCode: string;

  @Column({ length: 255, unique: true })
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

  @ManyToOne(() => Category, (category) => category.products)
  category: Category;
}