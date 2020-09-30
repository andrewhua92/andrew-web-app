import React, { useState} from 'react'
import { 
    MyTabs, 
    MyTab, 
    MyAvatar, 
    ContentDiv 
} from './Styled'
import HomeIcon from '@material-ui/icons/Home';
import GitHubIcon from '@material-ui/icons/GitHub';
import FolderIcon from '@material-ui/icons/Folder';
import Home from './Home';
import Github from './Github';
import Contact from './Contact';


const Content = () => {

    const [value, setValue] = useState(0)

    const handleChange = (e, newValue) => {
        setValue(newValue)
    }

    return (
        <div>
            <ContentDiv style={{width: '90%'}}>
                <MyAvatar alt='Andrew Hua' src='my_face.JPG'/>
                <MyTabs
                    value={value}
                    onChange={handleChange}
                > 
                    <MyTab 
                        icon={<HomeIcon/>}
                    />
                    <MyTab 
                        icon={<GitHubIcon/>}
                    />
                    <MyTab 
                        icon={<FolderIcon/>}
                    />
                </MyTabs>
            </ContentDiv>
            <ContentDiv style={{marginLeft: "250px"}}>
                {value === 0 ? 
                <Home/>: (value === 1 ? 
                <Github/> : 
                <Contact/>)
                }
            </ContentDiv>
        </div>
    )
}

export default Content