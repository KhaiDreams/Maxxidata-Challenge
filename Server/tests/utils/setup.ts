import { dataSource } from "../../src/config/database";
import { ProfessionalType } from "../../src/entities/ProfessionalType";
import { Professional } from "../../src/entities/Professional";

export async function setup() {
    try {
        const professionalTypeRepository = dataSource.getRepository(ProfessionalType);
        const professionalRepository = dataSource.getRepository(Professional);
        
        const professionalType = professionalTypeRepository.create({
            id: '74dc0726-8b7a-11ed-a1eb-0242ac120002',
            descricao: 'Engineer',
            situacao: true
        })

        await professionalTypeRepository.save(professionalType);
        
        const professional = professionalRepository.create({
            id: '74dc0d16-8b7a-11ed-a1eb-0242ac120003',
            nome: "John",
            telefone: "11 99434-59693",
            email: "john@gmail.com",
            profissionalId: professionalType.id,
            situacao: true
        });

        await professionalRepository.save(professional);

        return {
            professionalType,
            professional
        };
    } catch(err) {
        console.error(err);
        return;
    }
}