import { ReactNode } from "react";
import * as S from "./styles";

interface IProps {
    children: ReactNode;
}

export function Table({ children }: IProps) {
    return (
        <S.Container>
            <S.Table>
                { children }
            </S.Table>
        </S.Container>
    )
};