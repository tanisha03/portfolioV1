import React from 'react'
import styled from 'styled-components';

const FooterContainer = styled.div`
    font-family:Montserrat;
    font-size:14px;
    font-weight:100;
    color:#3C3446;
    text-align:center;
    padding:64px 32px 32px;
`;

export default function Footer() {
    return (
        <FooterContainer>
            © TANISHA SABHERWAL {new Date().getFullYear()}
        </FooterContainer>
    )
}
