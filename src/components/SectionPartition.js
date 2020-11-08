import React, { Children } from 'react'
import styled from 'styled-components';
import {tokens} from "../../config/themes"

const SectionWrapper=styled.div`
    // width:100%;
    background-color:${tokens.colors.secondary[1]};
    padding:${tokens.space[8]};
    h2{
        font-size:${tokens.fontSizes[6]};
        color:${tokens.colors.primary[0]};
    }
    // p{
    //     font-size:${tokens.fontSizes[4]};
    //     color:${tokens.colors.primary[0]};
    //     font-weight:${tokens.fontWeights[1]};
    // }
`;

const SectionContent=styled.div`
    display:flex;
    p{
        font-size:${tokens.fontSizes[4]};
        color:${tokens.colors.primary[0]};
        font-weight:${tokens.fontWeights[1]};
        width:30%;
    }
`;

export default function SectionPartition({header,description,children}) {
    // console.log(props);
    return (
        <SectionWrapper>
            <h2>{header}</h2>
            <SectionContent>
                <p>{description}</p>
                {children}
            </SectionContent>
        </SectionWrapper>
    )
}
