import { createGlobalStyle } from 'styled-components';

import LatoReg from './fonts/Lato-Regular.ttf';
import RobotoReg from './fonts//Roboto-Regular.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Font Name';
        src: local('Font Name'), local('FontName'),
        url(${LatoReg}) format('ttf'),
        url(${RobotoReg}) format('ttf');
        font-weight: 300;
        font-style: normal;
    }
`;