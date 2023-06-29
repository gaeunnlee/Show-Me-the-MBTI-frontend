import { createGlobalStyle } from "styled-components";
import Jalnan from "../static/fonts/Jalnan.ttf";
import TheJamsil from "../static/fonts/TheJamsil.ttf";

export const GlobalStyles = createGlobalStyle`
  @font-face {
        font-family: 'Jalnan';
        src: local('Jalnan'), local('Jalnan');
        font-style: normal;
        src: url(${Jalnan}) format('truetype');
  } 
  @font-face {
        font-family: 'TheJamsil';
        src: local('TheJamsil'), local('TheJamsil');
        font-style: normal;
        src: url(${TheJamsil}) format('truetype');
  } 
    body {
        background-color: #B799FF;
        margin: 0;
        padding: 0;
        height: 100vh;
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    button {
        background-color: transparent;
        border: 0;
        padding: 0;
    }
    a {
        text-decoration: none;
        color: black;
    }
    input[type="submit"], input[type="button"] {
        border: 0;
    } 
`;
