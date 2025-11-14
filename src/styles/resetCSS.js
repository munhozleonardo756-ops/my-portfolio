import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a{
        text-decoration: none;
    }

    body{
        font-family: ${({ theme }) => theme.fonts.body};
        padding: 1rem 0;
    }

    html{
        font-size: 16px;
        background-color: ${({ theme }) => theme.colors.background};
        scroll-behavior: smooth;

        @media(max-width: 768px){
            font-size: 13px;
        }
        
        @media(max-width: 425px){
            font-size: 10px;
        }
    }
`;
