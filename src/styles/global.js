import { createGlobalStyle } from 'styled-components';
import Background from '../assets/background.png'
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: content-box;
    outline: none;
    -webkit-font-smoothing: antialiased;
  }

    body{
      font-family: 'Fira Sans', sans-serif;
      max-height: 100vh;
      background: url(${Background}) no-repeat;
      background-size: cover;
      /* background: conic-gradient(from -37.51deg at 27.29% 37.6%, #BADEFF 0deg, #E5E5E5 153deg, rgba(255, 253, 253, 0) 286.12deg, #BADEFF 360deg) no-repeat; */
     }
  
`;

export default GlobalStyle;