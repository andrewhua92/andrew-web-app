import React, { useState, useEffect } from 'react'
import {
    MyHeader1,
    MyParagraph,
    SmoothDiv
} from './Styled'

const Github = () => {

    const [visible, setVisible] = useState(false);
    
    useEffect(() => {
        setVisible(true);
        return setVisible(false);
    }, []);

    return (
        <SmoothDiv>
            <MyHeader1>
               PROJECTS
            </MyHeader1>
            <MyParagraph>
                GITHUB HERE
            </MyParagraph>
        </SmoothDiv>
    )
}

export default Github