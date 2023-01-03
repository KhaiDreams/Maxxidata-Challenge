import styled from "styled-components";

export const Container = styled.header`
    height: 5rem;
    width: 100%;
    background: var(--header-color);

    display: flex;
    justify-content: center;

    position: fixed;
    
    left: 0;
    top: 0;
    right: 0;

    a {
        text-decoration: none;
    }
`;

export const SpaceBetween = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-between;
    gap: 1rem;
    align-items: center;

    padding: 1rem 2rem;

    .logo {
        height: 100%;
        
        display: flex;
        align-items: center;
        justify-content: center;

        gap: 0.5rem;
    }

    .logo img {
        width: 3rem;
        height: 3rem;
    }
`;

export const Navigation = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 0.5rem
`;