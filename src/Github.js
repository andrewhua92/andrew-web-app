import React, { useState, useEffect } from 'react';
import {
    MyHeader1,
    SmoothDiv,
    MyList,
    MyListItem,
} from './Styled';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import WebIcon from '@material-ui/icons/Web';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import VideocamIcon from '@material-ui/icons/Videocam';
import SecurityIcon from '@material-ui/icons/Security';
import GamesIcon from '@material-ui/icons/Games';

import ListItemText from '@material-ui/core/ListItemText';

import { useMediaQuery } from 'react-responsive';

import projectsData from './Projects.json';

// TO-DO: 
// make this cleaner by mapping stuff 

function ListItemLink(props) {
    return <MyListItem button component="a" {...props} />;
}


const Github = () => {

    const [visible, setVisible] = useState(false);

    const isLargeDesktop = useMediaQuery({
        query: '(min-device-width: 2560px)'
    });

    // easier to just apply this styling than to do an individual restyle of each icon
    const iconStyling = {
        height: isLargeDesktop ? "2rem" : "",
        width: isLargeDesktop ? "2rem" : "",
        marginRight: isLargeDesktop ? "2rem" : ""
    };

    const Icons = {
        Web: <WebIcon style={iconStyling}/>,
        WbSunny: <WbSunnyIcon style={iconStyling} />,
        SportsEsports: <SportsEsportsIcon style={iconStyling}/>,
        Videocam: <VideocamIcon style={iconStyling}/>,
        Security: <SecurityIcon style={iconStyling}/>,
        Games: <GamesIcon style={iconStyling}/>,
    };

    useEffect(() => {
        setVisible(true);
        return setVisible(false);
    }, []);

    return (
        <SmoothDiv out={visible}>
            <MyHeader1>
               Projects
            </MyHeader1>
            <MyList>
                {projectsData.map(({primary, secondary, href, icon}) => {
                    return(
                    <>
                        <ListItemLink
                        href={href}
                        target="_blank"
                        >
                            <ListItemIcon>
                                {Icons[icon]}
                            </ListItemIcon>
                            <ListItemText 
                            primary={primary}
                            secondary={secondary}
                            primaryTypographyProps={{style: isLargeDesktop ? {fontSize: '2rem'} : {}}}
                            secondaryTypographyProps={{style: isLargeDesktop ? {fontSize: '1.5rem'} : {}}}
                            />
                        </ListItemLink>
                        <Divider/>
                    </>
                )})}
            </MyList>
        </SmoothDiv>
    )
}

export default Github