import styled from "styled-components";

interface IProps {
    color?: string;
}

export const Title = styled.h1`
    color: ${({ color }) => color && color};
    font-weight: 400;
    font-size: 1.5rem;
    text-align: center;
`