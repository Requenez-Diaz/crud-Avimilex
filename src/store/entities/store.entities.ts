import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Store {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text' })
  region: string;

  @Column({ type: 'numeric' })
  numberPhone: number;

  @Column({ type: 'text' })
  location: string;

  @Column({ type: 'text' })
  description: string;
}
