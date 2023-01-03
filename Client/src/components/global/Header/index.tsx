import * as S from "./styles";

import { Title } from "../../UI/Title";
import { Button } from "../../UI/Button";

import { Link } from "react-router-dom";

export function Header() {
    /* {
    Essa função verifica se o usuario está na home page, se estiver, vai retornar truthy e colocar a cor destaque para outras áreas que não estejam na homepage.     
        https://developer.mozilla.org/en-US/docs/Web/API/Window/location
    } */ 
    const isHomePage = window.location.pathname === "/"; 

    return (
        <S.Container>
            <S.SpaceBetween>
                <div className="logo">
                    <img src="/assets/logo.png" alt="logo" />
                    <Title color="var(--color-5)">
                        Maxxidata
                    </Title>
                </div>

                <S.Navigation>
                    <Link to={"/"}>
                        <Button bgColor={`${ isHomePage ? "var(--color-3)" : ""}`}>Profissionais</Button>
                    </Link>
                    <Link to={"/profissionais/tipos"}>
                        <Button bgColor={`${ !isHomePage ? "var(--color-3)" : ""}`}>Profissões</Button>
                    </Link>
                </S.Navigation>
            </S.SpaceBetween>
        </S.Container>
    )
}