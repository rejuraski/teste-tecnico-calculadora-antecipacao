const { createGlobalStyle } = require("styled-components");

const GlobalStyle = createGlobalStyle`

*{
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
}

ol, ul {
    list-style: none;
}
`;

export default GlobalStyle
