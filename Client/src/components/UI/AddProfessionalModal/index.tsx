import * as S from "./styles";

import { 
    Dispatch,
    ReactNode,
    SetStateAction,
    useState,
    FormEvent 
} from "react";

import { Title } from "../Title";

import { CloseIcon } from "../../../assets/icons";
import { Input } from "../Input";
import { Button } from "../Button";
import { Select } from "../Select";
import { toast } from "react-toastify";
import { api } from "../../../services/api";

interface IProps {
    setModalIsOpen: Dispatch<SetStateAction<boolean>>;
}

export function AddProfessionalModal({ setModalIsOpen }: IProps) {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [professionalId, setProfessionalId] = useState('');
    const [isActive, setIsActiveProfessional] = useState<Boolean>(true);

    async function handleClick(e: FormEvent) {
        e.preventDefault();

        if(!name) {
            return toast.error('Você precisar especificar o nome');
        }

        if(!phoneNumber) {
            return toast.error('Você precisar especificar o telefone');
        }

        if(!email) {
            return toast.error('Você precisar especificar o email');
        }
        
        if(!professionalId) {
            return toast.error('Você precisar especificar o profissional id');
        }

        await api.post("/profissional/criar", {
            nome: name,
            telefone: phoneNumber,
            email: email,
            profissionalId: professionalId,
            situacao: isActive
        })
        .then(() => {
            toast.success('Profissional cadastrado com sucesso!');
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
                    <Title color="var(--color-5)">Adicionar profissional</Title>

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
                            onChange={(e) => setName(e.target.value)}
                       />

                        <Input
                            placeholder="Telefone.."
                            name="Telefone"
                            textColor="var(--color-5)"
                            onChange={(e) => setPhoneNumber(e.target.value)}
                       />

                        <Input
                            placeholder="Email.."
                            type="email"
                            textColor="var(--color-5)"
                            name="E-mail"
                            onChange={(e) => setEmail(e.target.value)}
                       />

                        <Input
                            placeholder="Profissional ID.."
                            textColor="var(--color-5)"
                            name="Profissional ID"
                            onChange={(e) => setProfessionalId(e.target.value)}
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