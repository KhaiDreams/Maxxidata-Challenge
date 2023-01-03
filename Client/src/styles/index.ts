import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    :root {
        --header-color: #eaa353;
        --background-color: #6c6368;
        --box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.1);
        --black-opacity: rgba(0, 0, 0, 0.1);

        --color-1: #ffb726;
        --color-2: #ffff;
        --color-3: #eaa353;
        --color-5: #000000;
        --color-6: #E0864C;
        --color-7: #E0514C;
        --color-8: #fbb278;
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
        background: var(--background-color);
    }
`;