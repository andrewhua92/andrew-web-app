import React, { useState, useEffect } from 'react'
import {
    MyHeader1,
    MyParagraph,
    SmoothDiv
} from './Styled'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

const Contact = () => {

    const [visible, setVisible] = useState(false);
    
    useEffect(() => {
        setVisible(true);
        return setVisible(false);
    }, []);

    return (
        <SmoothDiv out={visible}>
            <MyHeader1>
                Contact Information
            </MyHeader1>
            <div>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText 
                        primary="Personal Email"
                        secondary="andrewhua90@gmail.com" 
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText 
                        primary="University Email"
                        secondary="a5hua@uwaterloo.ca"
                        />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItemLink 
                    href="https://www.github.com/andrewhua92/"
                    target="_blank"
                    >
                        <ListItemIcon>
                            <GitHubIcon />
                        </ListItemIcon>
                        <ListItemText
                        primary="GitHub" 
                        secondary="github.com/andrewhua92"
                        />
                    </ListItemLink>
                    <ListItemLink 
                    href="https://www.linkedin.com/in/andrew-hua90/"
                    target="_blank">
                        <ListItemIcon>
                            <LinkedInIcon />
                        </ListItemIcon>
                        <ListItemText
                        primary="LinkedIn" 
                        secondary="linkedin.com/in/andrew-hua90"
                        />
                    </ListItemLink>
                </List>
            </div>
        </SmoothDiv>
    )
}

export default Contact