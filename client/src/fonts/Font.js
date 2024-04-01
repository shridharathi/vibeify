import { createGlobalStyle } from 'styled-components';

import FrunchWoff from './Frunch.woff';
import SFWoff from './SF.woff';

export default createGlobalStyle`
    @font-face {
        font-family: 'Frunch';
        src: local('Font Name'), local('FontName'),
        url(${FrunchWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'SF';
        src: local('Font Name'), local('OtherFontName'),
        url(${SFWoff}) format('woff');
        font-weight: 300;
        font-style: normal; 
    }
`;

