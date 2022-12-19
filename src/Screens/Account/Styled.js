import styled from "styled-components";
import { mainColor } from "../../Shared/Theme";

export const Myaccount = styled.div `
    & > div{
        display: flex;
        align-items: center;
        justify-content: center;

        & > form{
            @media (max-width: 739px){
                width:100%;
            }

            width: 40%;
            border: 1px solid #666;
            background-color: antiquewhite;
            padding: 20px;

            & > div {
                & > label{
                    margin-bottom: 6px;
                }
            }

            & > button{
                margin-top: 30px;                
                display: flex;
                justify-content: center;
                width: 100%;
            }
        }
    }
`;