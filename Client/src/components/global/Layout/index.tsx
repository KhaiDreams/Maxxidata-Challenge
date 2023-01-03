import * as S from "./styles";
import { Header } from "../Header"

import { ReactNode } from "react";

interface IProps {
    children?: ReactNode;
}

export function Layout({ children }: IProps) {
   return (
        <S.Container>
            <Header/>

            { children }
        </S.Container>
   )
}