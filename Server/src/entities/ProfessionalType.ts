import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("ProfissionalTipo")
export class ProfessionalType {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  descricao: string;

  @Column({ default:true })
  situacao: boolean;

  @UpdateDateColumn()
  updatedAt: Date;

  @CreateDateColumn()
  createdAt: Date;
}