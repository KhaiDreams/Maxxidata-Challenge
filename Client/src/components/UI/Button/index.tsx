import * as S from "./style";
import { ReactNode, FormEvent } from "react"

interface IProps {
    bgColor?: string;
    color?: string;
    shadow?: boolean;
    icon?: ReactNode;
    children?: ReactNode;
    onClick?: (e: FormEvent<Element>) => any;
}

export function Button({
    bgColor,
    children,
    icon,
    color,
    onClick,
    shadow
}: IProps) {
    return (
        <S.Button
            bgColor={bgColor}
            color={color}
            shadow={shadow}
            onClick={onClick}
        >
            <span>
                { children }
                { icon && <>{ icon }</>}
            </span>
        </S.Button>
    )
}