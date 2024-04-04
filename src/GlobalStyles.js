import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Inter';
        font-weight: 400; /* regular */
        src: url('https://fonts.gstatic.com/s/inter/v1/Inter-Regular.woff2') format('woff2');
    }

    @font-face {
        font-family: 'Inter';
        font-weight: 500; /* medium */
        src: url('https://fonts.gstatic.com/s/inter/v1/Inter-Medium.woff2') format('woff2');
    }

    @font-face {
        font-family: 'Inter';
        font-weight: 600; /* semi-bold */
        src: url('https://fonts.gstatic.com/s/inter/v1/Inter-SemiBold.woff2') format('woff2');
    }
    body {
        margin: 0;
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
      a {
        text-decoration: none;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin: 0;
    }

    ul,
    ol {
        list-style:none;
        margin: 0;
        padding: 0;
    }

    img {
        display: block;
        max-width: 100%;
        height: auto;
    }

    button {
        cursor: pointer;
    }
`