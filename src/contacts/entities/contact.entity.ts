import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

@Entity()
export class Contact {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 255,
    unique: true,
  })
  name: string;

  @Column({
    length: 255,
    nullable: true,
  })
  trade_name: string;

  @Column({ length: 255, nullable: true })
  address: string;

  @Column({ length: 255, nullable: true })
  email: string;

  @Column({ default: false, nullable: true })
  client: boolean;

  @Column({ default: false, nullable: true })
  provider: boolean;

  @Column({ default: false, nullable: true })
  special_taxpayer: boolean;

  @Column({ type: 'text', nullable: true })
  additional_information: string;

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
    if (this.trade_name) {
      this.trade_name = this.trade_name.trim().toUpperCase();
    }
    if (this.address) {
      this.address = this.address.trim().toUpperCase();
    }
    if (this.email) {
      this.email = this.email.trim().toLowerCase();
    }
  }
}
