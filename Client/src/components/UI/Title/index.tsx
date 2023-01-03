import * as S from "./styles";
import { ReactNode } from "react";

interface IProps {
    children: ReactNode;
    color: string;
}

export function Title({ children, color }: IProps) {
    return (
        <S.Title
            color={color}
        >
            { children }
        </S.Title>
    )
}