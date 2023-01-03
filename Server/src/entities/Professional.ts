import { 
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";

import { ProfessionalType } from "./ProfessionalType";

@Entity("Profissionais")
export class Professional {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  nome: string;

  @Column()
  telefone: string;
  
  @Column()
  email: string;

  @ManyToOne(() => ProfessionalType)
  @JoinColumn({ name: "profissionalId",  })
  profissionalTipo: string;

  @Column()
  profissionalId: string;

  @Column({ default: true })
  situacao: boolean;

  @UpdateDateColumn()
  updatedAt: Date;

  @CreateDateColumn()
  createdAt: Date;
}

