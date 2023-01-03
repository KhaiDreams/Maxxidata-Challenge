import * as S from "./styles";
import { toast } from "react-toastify";

import { IProfessional } from "../../interfaces/global";

import { api } from "../../services/api";

import { useState, useEffect } from "react";

import { Layout } from "../../components/global/Layout"
import { Title } from "../../components/UI/Title";
import { Pagination } from "../../components/UI/pagination";
import { Input } from "../../components/UI/Input";
import { Table } from "../../components/UI/Table";
import { Select } from "../../components/UI/Select";
import { Button } from "../../components/UI/Button";

import { AddProfessionalModal } from "../../components/UI/AddProfessionalModal";
import { EditProfessionalModal } from "../../components/UI/EditProfessionalModal";

export function Professional() {
    const [addProfessionalModal, setAddProfessionalModal] = useState(false);
    const [editProfessionalModal, setEditProfessionalModal] = useState(false);
    const [selectedProfessional, setSelectProfessional] = useState<IProfessional | null>(null);
    
    const [professionals, setProfessionals] = useState<IProfessional[]>([]);
    const [search, setSearch] = useState('');
    const [updateProfessionalList, setUpdateProfessionalList] = useState<boolean>(false);
    const [isActiveProfessional, setIsActiveProfessional] = useState<boolean | null>(null);

    const [firstPageIndex, setFirstPage] = useState(0);
    const [lastPageIndex, setLastPage] = useState(10);

    const filterProfessional = search.length > 0 ? 
        professionals.filter((professional) =>
            professional.nome.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
            professional.profissionalId.includes(search) ||
            professional.id.includes(search) ||
            professional.telefone.includes(search) ||
            professional.email.includes(search)
        ) : 
        professionals.slice(firstPageIndex, lastPageIndex);

    useEffect(() => {
        const getUsersList = async () => await api.get<IProfessional[]>("/profissionais");

        getUsersList()
            .then((response) => {
                const professionals = response.data;

                if(isActiveProfessional !== null) {
                    const filter = professionals.filter(professional => professional.situacao === isActiveProfessional);
    
                    return setProfessionals(filter);
                }

                return setProfessionals(professionals);
            })
            .catch((err) => {
                toast.error(err.response.data.message);
            })
    }, [updateProfessionalList, addProfessionalModal, editProfessionalModal]);

    return (
        <Layout>
            <S.MainSection>
                <S.SpaceBetween>
                    <Title 
                        color="var(--color-5)"
                    >
                        Usuários
                    </Title>

                    <Button
                        bgColor="var(--color-3)"
                        onClick={() => setAddProfessionalModal(true)}
                    >Adicionar</Button>
                </S.SpaceBetween>
                
                <S.SpaceBetween>
                    <Input
                        name="SearchProfessional"
                        placeholder="Pesquisar"
                        type="search"
                        onChange={(e) => setSearch(e.target.value)}
                        bgColor="#ffff"
                        textColor="color(--color-5)"
                        borderColor="#6c6368"
                        placeholderColor="#00000"
                    />
                    <div>
                        <Select 
                            name="Ativo"
                            onChange={(e) => {
                                const value = e?.target.value;

                                if (value === "all") {
                                    setIsActiveProfessional(null);
                                    setUpdateProfessionalList(!updateProfessionalList);
                                    return;
                                }

                                setIsActiveProfessional(value === "true" ? true : false);
                                setUpdateProfessionalList(!updateProfessionalList);
                            }}
                            options={[
                                {
                                    label: "Todos",
                                    value: "all"
                                },
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
                    </div>
                </S.SpaceBetween>


                <S.MainContainer>
                    <Table>
                        <tbody>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Telefone</th>
                                <th>Email</th>
                                <th>ProfissionalID</th>
                                <th>Situação</th>
                                <th>Atualizado em:</th>
                                <th>Criado em:</th>
                                <th></th>
                            </tr>
                                {
                                    filterProfessional.map((professional) => (
                                        <tr key={professional.id}>
                                            <td>
                                                { professional.id }
                                            </td>
                                            <td>
                                                { professional.nome }
                                            </td>
                                            <td>
                                                { professional.telefone }
                                            </td>
                                            <td>
                                                { professional.email }
                                            </td>
                                            <td>
                                                { professional.profissionalId }
                                            </td>
                                            <td>
                                                { String(professional.situacao ? "Ativo" : "Inativo") }
                                            </td>
                                            <td>
                                                { new Date(String(professional.updatedAt)).toLocaleDateString() }
                                            </td>
                                            <td>
                                                { new Date(String(professional.createdAt)).toLocaleDateString() }
                                            </td>
                                            <td>
                                                <div className="tdButton">
                                                    <Button
                                                        key={professional.id}
                                                        bgColor="var(--color-6)"
                                                        onClick={() => {
                                                            setSelectProfessional(professional)
                                                            return setEditProfessionalModal(true);
                                                        }}
                                                        shadow={false}
                                                    >
                                                        Editar
                                                    </Button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }
                        </tbody>
                    </Table>

                    <Pagination 
                        firstPage={firstPageIndex}
                        lastPage={lastPageIndex}
                        setFirstPage={setFirstPage}
                        setLastPage={setLastPage}
                        totalPages={professionals.length}
                    />
                </S.MainContainer>
            </S.MainSection>

            {
                addProfessionalModal ? (
                    <AddProfessionalModal
                        key={"addProfessionalModal"}
                        setModalIsOpen={setAddProfessionalModal}
                    />
                ) : null
            }

            {
                editProfessionalModal ? (
                    <EditProfessionalModal
                        key={"editProfessionalModal"}
                        setModalIsOpen={setEditProfessionalModal}
                        professional={selectedProfessional}
                    />
                ) : null
            }
        </Layout>
    )
}