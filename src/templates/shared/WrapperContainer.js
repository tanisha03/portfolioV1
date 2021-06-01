import styled from 'styled-components';
import {tokens} from "../../../config/themes"

const  WrapperContainer = styled.div`
    padding:4% 16%;
    width:100%;

    h1,h2,h3,h4,h5,h6{
        margin-bottom:${tokens.space[2]};
    }

    p,div{
        margin-bottom:${tokens.space[4]};
    }

    img{
        max-width:1000px;
        margin:${tokens.space[2]} 0;
    }

    @media only screen and (max-width: 576px) {
        padding:4%;
    }
`;

export default WrapperContainer;