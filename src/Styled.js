import styled, { keyframes } from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Avatar from '@material-ui/core/Avatar'

import "fontsource-lato";
import "fontsource-roboto";

export const Background = styled.div`
    display: inline-block;
    width: 100vw;
    height: 100vh;
    position: absolute;
    margin-left: -10px;
    margin-top: -10px;
    background: linear-gradient(270deg, #8154c8, #4b79cf, #4bc5cf);
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
`;

export const MyPaper = styled(Paper)`
    display: flex;
    width: 70vw;
    height: 90vh;
    margin: auto;
    margin-top: 40px;
    && {
        background: rgba(0,0,0,0.3);
    }
`;

export const MyTabs = styled(Tabs)`
    && {
        display: inline-block;
        min-width:60vw;
        height: 20px;
        margin-left:auto;
    }
`;

export const MyTab = styled(Tab)`
    && {
        min-width: 15vw;
        max-width: 20vw
    }
`;

export const MyAvatar = styled(Avatar)`
    && {
        height: 150px;
        width: 150px;
        margin: 30px;
    }
`;

export const MyHeader1 = styled.h1`
    width:100%;
    text-align: center;

    font-family: 'Lato', sans-serif;
    
`;

export const MyParagraph = styled.p`
    font-size: 1.3em;
    font-family: 'Lato', sans-serif;
`;

export const FlexDiv = styled.div`
    display:block;
    width:100%;
`;

export const ContentDiv = styled.div`
    display:flex;
    height: 100px;
    
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

// bless this guy for the sick fades 
// https://stackoverflow.com/questions/11679567/using-css-for-a-fade-in-effect-on-page-load
export const SmoothDiv = styled.div`
    width: 75%;
    visibility: ${props => props.out ? 'hidden' : 'visible'};
    animation: ${props => props.out ? fadeOut : fadeIn} 1s linear;
    transition: visibility 1s linear;
  
`
