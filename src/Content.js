import React, { useState} from 'react'
import { 
    MyTabs, 
    MyTab, 
    MyAvatar, 
    ContentDiv,
    HeaderContentDiv,
    ResponsiveHomeIcon,
    ResponsiveGitHubIcon,
    ResponsiveFolderIcon
} from './Styled'

import Home from './Home';
import Github from './Github';
import Contact from './Contact';

import { useMediaQuery } from 'react-responsive'

// TO DO: get github tab filled out
// maybe fix contact info
// make home content more homey
// make sure this works on mobile (maybe)
// dude, remove that white sliver (i thought this shit was 100vw wtf)

const Content = () => {

    const [value, setValue] = useState(0);

    const handleChange = (e, newValue) => {
        setValue(newValue)
    };


    const isTabletOrMobileDevice = useMediaQuery({
        query: '(min-device-width: 1440px)'
      });

    const isLargeDesktop = useMediaQuery({
        query: '(min-device-width: 2560px)'
    })


    return (
        <div style = {{width: 'inherit' }}>
            <HeaderContentDiv>
                {isTabletOrMobileDevice && 
                <MyAvatar alt='Andrew Hua' src={require('./my_face.JPG')}/>}
                <MyTabs
                    value={value}
                    onChange={handleChange}
                    style={{height: isLargeDesktop ? '5rem' : '3rem'}}
                    centered={!isTabletOrMobileDevice}
                > 
                    <MyTab 
                        style={{height: isLargeDesktop ? '5rem' : '3rem'}}
                        icon={<ResponsiveHomeIcon/>}
                    />
                    <MyTab 
                        style={{height: isLargeDesktop ? '5rem' : '3rem'}}
                        icon={<ResponsiveGitHubIcon/>}
                    />
                    <MyTab 
                        style={{height: isLargeDesktop ? '5rem' : '3rem'}}
                        icon={<ResponsiveFolderIcon/>}
                    />
                </MyTabs>
            </HeaderContentDiv>
            <ContentDiv>
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