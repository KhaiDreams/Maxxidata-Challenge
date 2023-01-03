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

import { IProfessionalType } from "../../../interfaces/global";

interface IProps {
    professional?: IProfessionalType | null;
    setModalIsOpen: Dispatch<SetStateAction<boolean>>;
}

export function EditProfessionalTypeModal({ setModalIsOpen, professional }: IProps) {
    const [description, setDescription] = useState('');
    const [professionalId, setProfessionalId] = useState('');
    const [isActive, setIsActiveProfessional] = useState<Boolean>(true);

    async function handleClick(e: FormEvent) {
        e.preventDefault();

        await api.post("/profissional/tipo/editar", {
            id: professional?.id,
            descricao: description || professional?.descricao,
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
                            placeholder="Descrição.."

                            name="Descrição"
                            defaultValue={professional?.descricao}
                            textColor="var(--color-5)"
                            onChange={(e) => setDescription(e.target.value)}
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