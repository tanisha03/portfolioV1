import React from 'react'
import styled from 'styled-components';
import {tokens} from "../../config/themes"

const HeroContainer = styled.div`
    padding:${tokens.space[16]};
    display:flex;
    flex-direction:column;
    align-items:center;
    .first-name{
        font-size:${tokens.fontSizes[11]};
        color:${tokens.colors.primary[0]};
        text-transform:uppercase;
        width: fit-content;
    }
    .last-name{
        font-size:${tokens.fontSizes[10]};
        color:${tokens.colors.secondary[0]};
        background-color:${tokens.colors.primary[0]};
        padding:${tokens.space[2]};
        text-transform:uppercase;
        width: fit-content;
    }
    .desc{
        color:${tokens.colors.primary[1]};
        font-size:${tokens.fontSizes[8]};
        width: fit-content;
    }
    .bio{
        color:${tokens.colors.primary[0]};
        font-size:${tokens.fontSizes[5]};
        padding: ${tokens.space[8]};
        width:50%;
        text-align:center;
        @media only screen and (max-width: 768px) {
            width:70%;
        }
        @media only screen and (max-width: 576px) {
            width:70%;
        }
    }
    @media only screen and (max-width: 992px) {
        padding:${tokens.space[10]};
    }
    @media only screen and (max-width: 768px) {
        padding:${tokens.space[8]};
        font-size:${tokens.fontSizes[4]};
    }
    @media only screen and (max-width: 576px) {
        padding:${tokens.space[4]};
        font-size:${tokens.fontSizes[2]};
    }
`;

export default function Hero() {
    return (
        <HeroContainer>
            <div className="first-name">Tanisha</div>
            <div className="last-name">Sabherwal</div>
            <div className="desc">loves to explore</div>
            <p className="bio">A Software Engineer who talks about development, 
design, products and everything at its intersection.</p>
        </HeroContainer>

    )
}
