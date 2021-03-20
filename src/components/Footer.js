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

const FooterContainer = styled.div`
    font-family:${tokens.font.primary};
    font-size:${tokens.fontSizes[3]};
    font-weight:${tokens.fontWeights.thin};
    color:${tokens.colors.primary[1]};
    padding:${tokens.space[16]} ${tokens.space[8]} ${tokens.space[8]};
    display:flex;
    justify-content:space-between;
    div{
        display:flex;
        a{
            padding: 0 ${tokens.space[2]};
        }
    }
    svg {
        transition:fill 0.2s linear;
        &:hover{
          fill:${tokens.colors.tertiary[0]};
        }
      }
    @media only screen and (max-width: 768px) {
        padding:${tokens.space[16]} ${tokens.space[2]} ${tokens.space[8]};
        div a{
            padding: 0 ${tokens.space[1]};
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
