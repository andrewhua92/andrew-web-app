import React, { useState} from 'react'
import { MyTabs, MyTab, MyAvatar } from './Styled'
import HomeIcon from '@material-ui/icons/Home';
import GitHubIcon from '@material-ui/icons/GitHub';
import FolderIcon from '@material-ui/icons/Folder';


const Content = () => {

    const [value, setValue] = useState(0)

    const handleChange = (e, newValue) => {
        setValue(newValue)
    }

    return (
        <>
            <MyAvatar alt='Andrew Hua' src='my_face.JPG'/>
            <MyTabs
                value={value}
                onChange={handleChange}
            > 
                <MyTab icon={<HomeIcon/>}/>
                <MyTab icon={<GitHubIcon/>}/>
                <MyTab icon={<FolderIcon/>}/>
            </MyTabs>
        </>
    )
}

export default Content