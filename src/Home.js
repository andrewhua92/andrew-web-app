import React, { useState, useEffect } from 'react'
import {
    MyHeader1,
    MyParagraph,
    SmoothDiv
} from './Styled'

const Home = () => {

    const [visible, setVisible] = useState(false);
    
    useEffect(() => {
        setVisible(true);
        return setVisible(false);
    }, []);

    return (
        <SmoothDiv out={visible}>
            <MyHeader1>
                Welcome to my personal web app!
            </MyHeader1>
            <MyParagraph>
                My name is Andrew Hua, a 3A Computer Engineering student at
                the University of Waterloo. Here, you can take a look at my
                pretty background, go check my tabs for my GitHub projects,
                and other contact information. 
                <br/>
                <br/>
                I take great interests in the realm of entertainment, whether
                it be playing games, watching shows, or playing some sports.
                I also collect sneakers! While my major is Computer Engineering, 
                I happen to have a great interest in Software Engineering as well, 
                having most of my co-ops  thus far in software development, 
                mostly in Full Stack Development. My previous co-ops have been at
                CARobotics, CareGuide, and XE.com.
                <br/>
                <br/>
                My tech stack so far: Java, C++, C, VHDL, and
                Git, Python, OpenCV, React.js, Ruby, and GraphQL.
                <br/>
                <br/>
                This web app was made using React.js, styled-components,
                and Materials-UI.
            </MyParagraph>
        </SmoothDiv>
    )
}

export default Home