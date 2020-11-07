import React from 'react'
import styled from 'styled-components';
import {tokens} from "../../config/themes"


const FooterContainer = styled.div`
    font-family:Montserrat;
    font-size:${tokens.fontSizes[3]};
    font-weight:${tokens.fontWeights.thin};
    color:${tokens.colors.primary[1]};
    text-align:center;
    padding:${tokens.space[16]} ${tokens.space[8]} ${tokens.space[8]};
`;

export default function Footer() {
    return (
        <FooterContainer>
            © TANISHA SABHERWAL {new Date().getFullYear()}
        </FooterContainer>
    )
}
