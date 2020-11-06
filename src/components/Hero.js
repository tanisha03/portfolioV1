import React from 'react'
import styled from 'styled-components';

const HeroContainer = styled.div`
    padding:64px;
    display:flex;
    flex-direction:column;
    align-items:center;
    .first-name{
        font-size:92px;
        color:#1f1b24;
        text-transform:uppercase;
        width: fit-content;
    }
    .last-name{
        font-size:72px;
        color:#ffffff;
        background-color:#1f1b24;
        padding:8px;
        text-transform:uppercase;
        width: fit-content;
    }
    .desc{
        color:#3c3446;
        font-size:48px;
        width: fit-content;
    }
    .bio{
        color:#1f1b24;
        font-size:20px;
        padding: 32px;
        width:50%;
        text-align:center;
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
