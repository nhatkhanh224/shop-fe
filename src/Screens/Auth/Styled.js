import styled, { css } from "styled-components";
export const Auth = styled.div`
    display: flex;
    justify-content: center;   
    align-item: center;
    & > form{
        width: 30%;
        border: 1px solid #ccc;
        border-radius: 6px;
        background-color: antiquewhite;
        & > h4{
            text-align: center;
            margin-top: 10px;
        }
        & > div{
            padding: 0px 20px 0 20px;
            & > input{
                margin-top: 10px;
            }
        }
        & > div:nth-child(2){
                padding-top: 10px;
        }
        & > button{
            margin: 10px auto;
            display: flex;
            justify-content: center;
            width: calc(88% + 3px);
        }

        .form-bottom{
            display: flex;
            justify-content: flex-end;
            padding-top: 0px;

            & > a{
                margin-left: 4px;
            }
        }
    }


`;