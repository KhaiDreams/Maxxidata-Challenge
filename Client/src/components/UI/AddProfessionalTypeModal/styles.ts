import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
`;

export const ContainerModal = styled.div`
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    background-color: var(--black-opacity);
    backdrop-filter: blur(5px);
    z-index: 999;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Main = styled.div`
    width: 35rem;
    height: 25rem;
    
    display: flex;
    justify-content: center;
    flex-direction: column;

    margin: 0 auto;

    background-color: var(--color-2);
    border-radius: 0.5rem;

    position: relative;

    z-index: 10;

    .close {
        position: absolute;
        right: 10px;
        top: 8px;
        cursor: pointer;
    }
`;

export const Form = styled.form`
    width: 100%;
    height: 14rem;

    display: flex;
    justify-content: center;
    flex-direction: column;

    padding: 2rem 3rem;

    gap: 1rem;
`;