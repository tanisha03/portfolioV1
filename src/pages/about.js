import React from "react";
import Layout from "../components/Layout";
import {ABOUT_DATA} from "../../config/about";
import styled from 'styled-components';
import {tokens} from "../../config/themes"
import ProfilePicture from "../assets/images/profile.png"
import {Icons} from "../assets/icon.js"

const AboutSection=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    padding:${tokens.space[8]} 0;
    color:${tokens.colors.primary[0]};
    width:100%;
    div{
        width:30%;
        margin-right:5%;
    }
    h1{
        margin-bottom:${tokens.space[8]};
        font-weight:${tokens.fontWeights.medium};
        font-size:${tokens.fontSizes[7]};
    }
    p{
        font-size:${tokens.fontSizes[4]};
        font-weight:${tokens.fontWeights.thin};
    }
    img{
        width:25%;
        box-shadow: 6px 6px 0 0 white, 6px 6px 0 2px ${tokens.colors.primary[1]};
    }
    @media only screen and (max-width: 768px) {
        flex-direction:column;
        // padding:${tokens.space[8]};
        div,img{
            width:70%
            // margin-top:${tokens.space[8]};
        }
        img{
            margin-top:${tokens.space[8]};
        }
    }
`;

const DownloadLink= styled.a`
    text-decoration:none;
    font-size:${tokens.fontSizes[6]};
    color:${tokens.colors.tertiary[0]};
    font-weight:${tokens.fontWeights[1]};
`;


const AboutPage = () => {
  return (
    <Layout>
        <AboutSection>
            <div>
                <h1>{ABOUT_DATA.heading}</h1>
                {
                    ABOUT_DATA.description.map(paragraph=>(
                        <>
                            <p>{paragraph}</p><br/>
                        </>
                    ))
                }
                <p>If you would like to know more about me, feel free to <a href="https://twitter.com/tanishaaa03">connect on twitter</a>.</p><br/>
                <DownloadLink href={ABOUT_DATA.resume} download>
                    Download Resume {Icons.download}
                </DownloadLink>
            </div>
            <img src={ProfilePicture} alt="profile of Tanisha Sabherwal" />
        </AboutSection>
    </Layout>
  );
};

export default AboutPage;

