import React from 'react'
import styled from 'styled-components';
import {tokens} from "../../config/themes"
import {Link} from 'gatsby'
import {Icons} from '../assets/icon'

const LINKS=[
    {
        icon:'email',
        link:'mailto:tanisha031199@gmail.com'
    },
    {
        icon:'twitter',
        link:'https://twitter.com/tanishaaa03'
    },
    {
        icon:'github',
        link:'https://github.com/tanisha03'
    },
    {
        icon:'medium',
        link:'https://medium.com/@tanisha031199'
    }
];

console.log(Icons);

const FooterContainer = styled.div`
    font-family:${tokens.font.primary};
    font-size:${tokens.fontSizes[3]};
    font-weight:${tokens.fontWeights.thin};
    color:${tokens.colors.primary[1]};
    // text-align:center;
    padding:${tokens.space[16]} ${tokens.space[8]} ${tokens.space[8]};
    display:flex;
    justify-content:space-between;
    div{
        display:flex;
        a{
            padding: 0 ${tokens.space[4]};
        }
    }
`;

export default function Footer() {
    return (
        <FooterContainer>
            <div>
                {
                   LINKS.map(link=>(
                       <Link to={link.link}>
                           {Icons?.social[link.icon]}
                       </Link>
                   )) 
                } 
            </div>
            © TANISHA SABHERWAL {new Date().getFullYear()}
        </FooterContainer>
    )
}
