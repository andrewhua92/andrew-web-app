import React, { useState, useEffect } from 'react';
import {
    MyHeader1,
    MyParagraph,
    SmoothDiv
} from './Styled';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import WebIcon from '@material-ui/icons/Web';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import VideocamIcon from '@material-ui/icons/Videocam';
import SecurityIcon from '@material-ui/icons/Security';
import GamesIcon from '@material-ui/icons/Games';

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

const Github = () => {

    const [visible, setVisible] = useState(false);
    
    useEffect(() => {
        setVisible(true);
        return setVisible(false);
    }, []);

    return (
        <SmoothDiv out={visible}>
            <MyHeader1>
               Projects
            </MyHeader1>
            <List>
                <ListItemLink
                href="https://github.com/andrewhua92/andrew-web-app/"
                target="_blank"
                >
                    <ListItemIcon>
                        <WebIcon />
                    </ListItemIcon>
                    <ListItemText 
                    primary="andrew-web-app"
                    secondary="The very same web app you are seeing right now!" 
                    />
                </ListItemLink>
                <Divider/>
                <ListItemLink
                href="https://www.github.com/andrewhua92/SunTracker/"
                target="_blank"
                >
                    <ListItemIcon>
                        <WbSunnyIcon />
                    </ListItemIcon>
                    <ListItemText 
                    primary="SunTracker"
                    secondary="A Hackathon Arduino Project meant to track the sun efficiently."
                    />
                </ListItemLink>
                <Divider />
                <ListItemLink 
                href="https://github.com/andrewhua92/AYJ-Simulator/"
                target="_blank"
                >
                    <ListItemIcon>
                        <SportsEsportsIcon />
                    </ListItemIcon>
                    <ListItemText
                    primary="AYJ-Simulator" 
                    secondary="A Choose Your Own Adventure game from high school!"
                    />
                </ListItemLink>
                <Divider />
                <ListItemLink 
                href="https://github.com/andrewhua92/lineFollower/"
                target="_blank">
                    <ListItemIcon>
                        <VideocamIcon />
                    </ListItemIcon>
                    <ListItemText
                    primary="lineFollower" 
                    secondary="A Python/Raspberry Pi rover that follows lines with a camera"
                    />
                </ListItemLink>
                <Divider />
                <ListItemLink 
                href="https://github.com/andrewhua92/GPIO-python-library/"
                target="_blank">
                    <ListItemIcon>
                        <SecurityIcon />
                    </ListItemIcon>
                    <ListItemText
                    primary="GPIO-python-library" 
                    secondary="A custom Raspberry Pi library in Python for CARobot's sCHEESE module"
                    />
                </ListItemLink>
                <Divider />
                <ListItemLink 
                href="https://github.com/andrewhua92/Chess/"
                target="_blank">
                    <ListItemIcon>
                        <GamesIcon />
                    </ListItemIcon>
                    <ListItemText
                    primary="Chess" 
                    secondary="Amateur attempt at recreating Chess in Java!"
                    />
                </ListItemLink>
            </List>
        </SmoothDiv>
    )
}

export default Github