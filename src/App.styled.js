import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const StyledApp = styled.div`
    font-family: 'Sora', sans-serif;
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    position: relative;
`

export const StyledImg = styled.img`
    width: 100%;
    position: absolute;
`

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0px;
        border: 0px;
        padding: 0px;
    }
`