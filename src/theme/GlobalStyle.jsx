import { createGlobalStyle } from 'styled-components'
 
const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }

  h1{
    font-family: Playball;
  }

  a,p,span,label,input,button{
    font-family: Lexend Deca;
  }
`
 
export default GlobalStyle