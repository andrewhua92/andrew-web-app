import styled, { keyframes } from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';

import "fontsource-lato";
import "fontsource-roboto";

export const Background = styled.div`
    display: inline-block;
    width: 100vw;
    height: 100vh;
    position: fixed;
    margin-left: -8px;
    margin-top: -8px;
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
    && {
        display: flex;
        width: 70vw;
        height: 90vh;
        margin: auto;
        margin-top: 40px;
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
        height: 6rem;
        width: 6rem;
        margin: 3rem;
    }
`;

export const MyHeader1 = styled.h1`
    width:100%;
    text-align: center;
    font-size: 1.7      rem;
    font-family: 'Lato', sans-serif;
    
`;

export const MyParagraph = styled.p`
    font-size: 1.3rem;
    font-family: 'Lato', sans-serif;
`;

export const FlexDiv = styled.div`
    display:block;
    width:100%;
`;

export const HeaderContentDiv = styled.div`
    display: flex;
    height: 5rem;
    width: 90%;
`;

export const ContentDiv = styled.div`
    display: flex;
    height: 7rem;
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
    margin: auto;
    visibility: ${props => props.out ? 'hidden' : 'visible'};
    animation: ${props => props.out ? fadeOut : fadeIn} 1s linear;
    transition: visibility 1s linear;
  
`;

export const MyList = styled(List)`
    &&{
        max-width: 40rem;
        margin: auto;
    }
`;
