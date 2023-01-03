import * as S from "./styles";
import { toast } from "react-toastify";

import { IProfessionalType } from "../../interfaces/global";

import { api } from "../../services/api";

import { useState, useEffect } from "react";

import { Layout } from "../../components/global/Layout"
import { Title } from "../../components/UI/Title";
import { Pagination } from "../../components/UI/pagination";
import { Input } from "../../components/UI/Input";
import { Table } from "../../components/UI/Table";
import { Select } from "../../components/UI/Select";
import { Button } from "../../components/UI/Button";

import { AddProfessionalTypeModal } from "../../components/UI/AddProfessionalTypeModal";
import { EditProfessionalTypeModal } from "../../components/UI/EditProfessionalTypeModal";

export function ProfessionalType() {
    const [addProfessionalTypeModal, setAddProfessionalTypeModal] = useState(false);
    const [editProfessionalTypeModal, setEditProfessionalTypeModal] = useState(false);
    const [selectedProfessionalType, setSelectProfessionalType] = useState<IProfessionalType | null>(null);
    
    const [professionalsType, setProfessionalsType] = useState<IProfessionalType[]>([]);
    const [search, setSearch] = useState('');

    const [firstPageIndex, setFirstPage] = useState(0);
    const [lastPageIndex, setLastPage] = useState(10);

    const filterProfessionalType = search.length > 0 ? 
        professionalsType.filter((professional) =>
            professional.descricao.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
            professional.id.includes(search) ||
            String(professional.situacao).includes(search)
        ) : 
        professionalsType.slice(firstPageIndex, lastPageIndex);

    useEffect(() => {
        const getUsersList = async () => await api.get<IProfessionalType[]>("/profissional/tipos");

        getUsersList()
            .then((response) => {
                const professionals = response.data;

                return setProfessionalsType(professionals);
            })
            .catch((err) => {
                toast.error(err.response.data.message);
            })
    }, [addProfessionalTypeModal, editProfessionalTypeModal]);

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
                        onClick={() => setAddProfessionalTypeModal(true)}
                    >Adicionar</Button>
                </S.SpaceBetween>
                
                <S.SpaceBetween>
                    <Input
                        name="SearchProfessionalType"
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
                        name="IsActiveProfessional"
                        onChange={(e) => {
                            const value = e?.target.value;

                            if (value !== "all") {
                                setSearch(String(value));
                                return;
                            }

                            setSearch('');
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
                                <th>Descrição</th>
                                <th>Situação</th>
                                <th>Atualizado em:</th>
                                <th>Criado em:</th>
                                <th></th>
                            </tr>
                                {
                                    filterProfessionalType.map((professional) => (
                                        <tr key={professional.id}>
                                            <td>
                                                { professional.id }
                                            </td>
                                            <td>
                                                { professional.descricao }
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
                                                            setSelectProfessionalType(professional)
                                                            return setEditProfessionalTypeModal(true);
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
                        totalPages={professionalsType.length}
                    />
                </S.MainContainer>
            </S.MainSection>

            {
                addProfessionalTypeModal ? (
                    <AddProfessionalTypeModal
                        key={"addProfessionalTypeModal"}
                        setModalIsOpen={setAddProfessionalTypeModal}
                    />
                ) : null
            }

            {
                editProfessionalTypeModal ? (
                    <EditProfessionalTypeModal
                        key={"editProfessionalTypeModal"}
                        setModalIsOpen={setEditProfessionalTypeModal}
                        professional={selectedProfessionalType}
                    />
                ) : null
            }
        </Layout>
    )
}