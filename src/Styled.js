import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'

export const Background = styled.div `
    display: inline-block;
    width: 100vw;
    height: 100vh;
    position: absolute;
    margin-left: -10px;
    margin-top: -10px;
    background: linear-gradient(270deg, #070f76, #4b79cf, #4bc5cf);
    background-size: 400% 400%;
    animation: pulse 180s ease infinite;
    z-index: -1;
    @keyframes pulse {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
`
export const MyPaper = styled(Paper)({
    display: 'flex',
    flexWrap: 'wrap',
    width: '90vw',
    height: '90vh',
    opacity: '20%',
    margin: 'auto',
    marginTop: '40px'
})