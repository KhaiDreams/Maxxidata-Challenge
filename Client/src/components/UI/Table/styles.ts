import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    width: 100%;
`;

export const Table = styled.table`
    width: 100%;
    line-height: 1.5;
    padding: 0.5rem;
    border-radius: 0.2rem;
    background: var(--color-2);
    margin-bottom: 2rem;
    
    tr {
        width: 100%;
    }
    
    th:nth-child(1) {
        font-size: 1rem;
    }

    th {
        padding: 0.4rem;
        text-align: left;
        text-transform: uppercase;
        font-family: Arial, Helvetica, sans-serif;
        color: var(--color-2);
        font-size: 0.8rem;
        font-weight: 400;
    }

    tr:nth-child(1) {
        background: var(--color-3);
    }

    td {
        width: 2.5rem;
        height: 2rem;
        text-align: center;
    }

    tr:nth-child(even)
    {
        background: #CCC;
        margin-bottom: auto;
    }

    .tdButton {
        display: flex;
        justify-content: center;
    }
`;