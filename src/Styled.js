import styled, { keyframes } from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


import HomeIcon from '@material-ui/icons/Home';
import GitHubIcon from '@material-ui/icons/GitHub';
import FolderIcon from '@material-ui/icons/Folder';

import "fontsource-lato";
import "fontsource-roboto";

// breakpoints idea courtesy of this article:
// https://jsramblings.com/how-to-use-media-queries-with-styled-components/
const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
};

export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
};


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
        width: 90vw;
        height: 90vh;
        margin: auto;
        margin-top: 40px;
        background: rgba(0,0,0,0.3);
        overflow: hidden;

        @media ${device.tablet}{
            width:70vw;
        }

 
    }
`;

export const MyTabs = styled(Tabs)`
    && {
        display: inline-block;
        min-width:60vw;
        height: 20px;
        margin-left:auto;

        @media ${device.laptopL} {
            float: left;
        }
    }
`;

export const MyTab = styled(Tab)`
    && {
        min-width: 15vw;
        max-width: 20vw

        @media ${device.desktopL} {
            height: 300px;
        }
    }

    @media ${device.desktopL} {
        height: 50px;
    }

`;

export const MyAvatar = styled(Avatar)`
    && {
        height: 6rem;
        width: 6rem;
        margin: 3rem;

        @media ${device.desktopL} {
            height: 12rem;
            width: 12rem;
            margin: 5rem;
        }
    }
`;

export const ResponsiveHomeIcon = styled(HomeIcon)`
    && {
        @media ${device.desktopL} {
            height: 2.5rem;
            width: 2.5rem;
            
        }
    }
`;

export const ResponsiveGitHubIcon = styled(GitHubIcon)`
    && {
        @media ${device.desktopL} {
            height: 2.5rem;
            width: 2.5rem;
            
        }
    }
`;

export const ResponsiveFolderIcon = styled(FolderIcon)`
    && {
        @media ${device.desktopL} {
            height: 2.5rem;
            width: 2.5rem;
            
        }
    }
`;

export const MyList = styled(List)`
    &&{
        max-width: 40rem;
        margin: auto;

        @media ${device.desktopL} {
            max-width: 60rem;
        }
    }
`;

export const MyListItem = styled(ListItem)`
    &&{
    }
`;

export const MyListItemText = styled(ListItemText)`
    &&{

        @media ${device.desktopL} {
            font-size: 2.5rem;
        }
    }
`;

export const MyHeader1 = styled.h1`
    width:100%;
    text-align: center;
    font-size: 1.7rem;
    font-family: 'Lato', sans-serif;
    
    @media ${device.desktopL} {
        font-size: 3rem;
    }
`;

export const MyParagraph = styled.p`
    font-size: 1.1rem;
    font-family: 'Lato', sans-serif;
    max-width: 40rem;
    margin: auto;
    @media ${device.laptopL} {
        font-size: 1.3rem;
    }

    @media ${device.desktopL} {
        font-size: 2.2rem;
        max-width: 70rem;
        margin-top:3rem;
    }
`;

export const FlexDiv = styled.div`
    display:block;
    width:100%;
`;

export const HeaderContentDiv = styled.div`
    display: flex;
    height: 4rem;
    width: 90%;

    @media ${device.desktopL} {
        height: 7rem;
    }
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

