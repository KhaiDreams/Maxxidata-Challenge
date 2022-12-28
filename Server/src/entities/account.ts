import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("Users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  nome: string;

  @Column()
  telefone: string;
  
  @Column()
  email: string;

  @Column()
  tipoDeProfissional: string;

  @Column({default:true})
  situacao: boolean;

  @UpdateDateColumn()
  uptatedAt: Date;

  @CreateDateColumn()
  createdAt: Date;
}

