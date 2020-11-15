import React from 'react'
import styled from 'styled-components';
import {tokens} from "../../config/themes"
// import ArrowIcon from '../assets/icons/right-arrow.svg';
import {Icons} from "../assets/icon"

const SectionWrapper=styled.div`
    background-color:${tokens.colors.secondary[1]};
    padding:${tokens.space[10]};
    h2{
        font-size:${tokens.fontSizes[6]};
        color:${tokens.colors.primary[0]};
    }
    span{
        display:flex;
        align-items:center;
        justify-content:flex-end;
    }
    a{
        text-decoration:none;
        font-size:${tokens.fontSizes[5]};
        color:${tokens.colors.tertiary[0]};
        font-weight:${tokens.fontWeights[1]};
    }
`;

const SectionContent=styled.div`
    display:flex;
    align-items:center;
    p{
        font-size:${tokens.fontSizes[4]};
        color:${tokens.colors.primary[0]};
        font-weight:${tokens.fontWeights[1]};
        width:30%;
    }
    .container{
        width:60%;
        display:flex;
        justify-content:center;
        align-items:center;
    }
`;

export default function SectionPartition({header,description,linkLabel,children}) {
    // console.log(props);
    return (
        <SectionWrapper>
            <h2>{header}</h2>
            <SectionContent>
                <p>{description}</p>
                <div className="container">{children}</div>
            </SectionContent>
            <span>
                <a href="#">{linkLabel}</a>
                {/* <ArrowIcon/>             */}
                {Icons['right_arrow']}
            </span>
        </SectionWrapper>
    )
}
