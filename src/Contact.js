import React, { useState, useEffect } from 'react'
import {
    MyHeader1,
    MyParagraph,
    SmoothDiv
} from './Styled'

const Contact = () => {

    const [visible, setVisible] = useState(false);
    
    useEffect(() => {
        setVisible(true);
        return setVisible(false);
    }, []);

    return (
        <SmoothDiv>
            <MyHeader1>
                Contact Information
            </MyHeader1>
            <MyParagraph>
               HIHIHIHIHI
            </MyParagraph>
        </SmoothDiv>
    )
}

export default Contact