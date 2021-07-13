import React from 'react'
import styled from 'styled-components';
import {tokens} from "../../config/themes"
import {Icons} from "../assets/icon"

const SectionWrapper=styled.div`
    background-color:${tokens.colors.secondary[1]};
    padding:${tokens.space[12]};
    h2{
        font-size:${tokens.fontSizes[6]};
        font-weight:${tokens.fontWeights.medium};
        color:${tokens.colors.primary[0]};
    }
    span{
        a{
            display:flex;
            align-items:center;
            justify-content:flex-end;
            transition: all .4s ease;
            svg{
                transform: translateX(0px);
            }
            &:hover svg{
                    transform: translateX(8px);
            }
        }
    }
    a{
        text-decoration:none;
        font-size:${tokens.fontSizes[5]};
        color:${tokens.colors.tertiary[0]};
    }
    img{
        box-shadow: 0 0 2px rgba(33,33,33,.2);
        transition: box-shadow .5s ease-in-out;
        &:hover{
            box-shadow: 0 0 10px rgba(33,33,33,.2); 
        }
    }
`;

const SectionContent=styled.div`
    display:flex;
    margin-bottom:${tokens.space[4]};
    p{
        margin-top:${tokens.space[2]};
        font-size:${tokens.fontSizes[4]};
        color:${tokens.colors.primary[0]};
        width:25%;
    }
    .container{
        width:60%;
        display:flex;
        justify-content:center;
        align-items:center;
        // margin-left:${tokens.space[5]};
        a img{
            max-width:210px;
            max-height:300px;
            margin:${tokens.space[3]};
        }
    }
    @media only screen and (max-width: 768px) {
        flex-direction:column;
        .container{
            width:70%;   
        }
        p{
            width:100%;  
            margin-bottom:${tokens.space[4]};
        }
        .container{
            flex-direction:column;
            width:100%;
            align-items:start;
        }
    }
    @media only screen and (max-width: 576px) {
            .container{
                a img{
                    margin:${tokens.space[4]} 0;
                }  
            }
    }
    @media only screen and (max-width: 480px) {
        .container{
            a img{
                width:100%; 
                max-width:420px;
                max-height:680px;
            }  
        }
    }
`;

export default function SectionPartition({header,description,linkLabel, link, children, direction}) {
    return (
        <SectionWrapper>
            <h2>{header}</h2>
            <SectionContent direction={direction}>
                <p>{description}</p>
                <div className="container">{children}</div>
            </SectionContent>
            <span>
                <a href={link}>{linkLabel} {Icons['right_arrow']}</a>
            </span>
        </SectionWrapper>
    )
}
