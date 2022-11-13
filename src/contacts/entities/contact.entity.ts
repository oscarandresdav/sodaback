import {
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
    transformer: {
      to: (value: string) => value.trim().toUpperCase(),
      from: (value: string) => value,
    },
  })
  name: string;

  @Column({
    length: 255,
    nullable: true,
    transformer: {
      to: (value: string) => value.trim().toUpperCase(),
      from: (value: string) => value,
    },
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
}
