import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Avatar from '@material-ui/core/Avatar'


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
    width: 90vw;
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
        margin-left:auto;
    }
`;

export const MyTab = styled(Tab)`
    && {
        min-width: 25vw;
    }
`;

export const MyAvatar = styled(Avatar)`
    && {
        height: 150px;
        width: 150px;
        margin: 30px;
    }
`;