import * as S from "./styles";

import { 
    Dispatch,
    ReactNode,
    SetStateAction,
    useState,
    FormEvent 
} from "react";

import { IProfessional } from "../../../interfaces/global";

import { Title } from "../Title";

import { CloseIcon } from "../../../assets/icons";
import { Input } from "../Input";
import { Button } from "../Button";
import { Select } from "../Select";
import { toast } from "react-toastify";
import { api } from "../../../services/api";

interface IProps {
    setModalIsOpen: Dispatch<SetStateAction<boolean>>;
    professional?: IProfessional | null;
}

export function EditProfessionalModal({ setModalIsOpen, professional }: IProps) {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [isActive, setIsActiveProfessional] = useState<Boolean>(true);

    async function handleClick(e: FormEvent) {
        e.preventDefault();

        if(!professional) {
            return toast.error("Você precisar especificar o nome");
        }

        await api.post("/profissional/editar", {
            id: professional.id,
            nome: name || professional.nome,
            telefone: phoneNumber || professional.telefone,
            email: email || professional.email,
            situacao: isActive
        })
        .then(() => {
            toast.success('Profissional editado com sucesso!');
            return setModalIsOpen(false);
        })
        .catch((err) => {
            toast.error(`${err.response.data.message}`);
        })
    };

    return (
        <S.MainContainer>
            <S.ContainerModal>
                <S.Main>    
                    <Title color="var(--color-5)">Editar profissional</Title>

                    <div
                        className="close"
                        onClick={() => setModalIsOpen(false)} 
                    >
                        <CloseIcon size="20px" color="var(--color-5)"/> 
                    </div>

                    <S.Form onSubmit={handleClick}>
                        <Input
                            placeholder="Nome.."
                            name="Nome"
                            textColor="var(--color-5)"
                            defaultValue={professional?.nome}
                            onChange={(e) => {
                                const value = e.target.value;

                                if(value) {
                                    setName(value);
                                }
                            }}
                       />

                        <Input
                            placeholder="Telefone.."
                            name="Telefone"
                            textColor="var(--color-5)"
                            defaultValue={professional?.telefone}
                            onChange={(e) => {
                                const value = e.target.value;
                                
                                if(value) {
                                    setPhoneNumber(value);
                                }
                            }}
                       />

                        <Input
                            placeholder="Email.."
                            type="email"
                            textColor="var(--color-5)"
                            name="E-mail"
                            defaultValue={professional?.email}
                            onChange={(e) => {
                                const value = e.target.value;
                                
                                if(value) {
                                    setEmail(e.target.value);
                                }
                            }}
                       />

                        <Select 
                            name="Ativo"
                            onChange={(e) => {
                                const value = e?.target.value;

                                setIsActiveProfessional(value === "true" ? true : false);
                            }}
                            options={[
                                {
                                    label: "Ativo",
                                    value: "true"
                                },
                                {
                                    label: "Inativo",
                                    value: "false"
                                },
                            ]}
                        />

                       <Button
                            bgColor="var(--color-3)"
                            onClick={handleClick}
                        >
                            Salvar
                        </Button>
                    </S.Form>
                </S.Main>
            </S.ContainerModal>
        </S.MainContainer>
    )
}