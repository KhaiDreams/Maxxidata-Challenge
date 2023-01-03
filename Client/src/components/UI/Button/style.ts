import styled from "styled-components";

interface IProps {
    bgColor?: string;
    color?: string;
    shadow?: boolean;
}

export const Button = styled.button<IProps>`
    padding: 0.4rem 0.8rem;
    border-radius: 0.2rem;
    box-shadow: ${({ shadow }) => shadow && "var(--box-shadow)"};
    background-color: ${({ bgColor }) => (bgColor ? bgColor : 'var(--color-1)')};
    display: flex;
    justify-content: center;
    border: none;
    span {
    color: ${({ color }) => color && color};
    display: flex;
    align-items: center;
    gap: 1rem;
    }
    div {
        height: min-content;
        display: flex;
        align-items: center;
    }
    :hover {
        cursor: pointer;
        filter: brightness(0.8); 
    }
`;