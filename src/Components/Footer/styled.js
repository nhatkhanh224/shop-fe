import styled from "styled-components";
import { mainColor } from "../../Shared/Theme";
export const FOOTER = styled.footer`
  background-color: #222;
  margin-top: 40px;
  padding: 20px 0;
  & > :first-child {
    color: white;
    display: flex;
    bottom: 0;
    @media (min-width: 676px) {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    & > .row{
      & > div:last-child{
        padding-top: 40px;
      }
    }
  }
`;
export const Categories = styled.div`
  padding-bottom: 50px;
  & > h4 {
    padding-bottom: 30px;
    margin: 0;
  }
  & > ul {
    padding: 0;
    & > li {
      padding-bottom: 10px;
      & > a{
        text-decoration: none;
        font-size: 13px;
        line-height: 1.923;
        color: #b2b2b2;
      }
    }
  }
`;

export const Contact = styled.div`
  padding-bottom: 50px;
  & > h4 {
    padding-bottom: 30px;
    margin: 0;
  }
  & > ul {
    padding: 0;
    & > li {
      padding-bottom: 10px;
      & > a{
        text-decoration: none;
        font-size: 24px;
        color: #b2b2b2;
      }
    }
  }
`;

export const GetIntouch = styled.div`
  padding-bottom: 50px;
  & > h4 {
    padding-bottom: 30px;
    margin: 0;
  }
    & > p{
      font-size: 13px;
      line-height: 1.923;
      color: #b2b2b2;
      max-width: 270px;
    }
  }
`;



export const Newsletter = styled.div`
  padding-bottom: 50px;
  & > h4 {
    padding-bottom: 30px;
    margin: 0;
  }

  & > form{
    & > div:nth-child(1){
      width: 100%;
      position: relative;
      border-bottom: 2px solid rgba(204,204,204, 0.1);
      padding-bottom: 4px;
      & > input {
        background-color: transparent;
        width: 100%;
        font-size: 13px;
        line-height: 1.923;
        color: #b2b2b2;
        border: none;
      }
      & > div {
        position: absolute;
        width: 0%;
        height: 2px;
        background-color: #6774d5;
        left: 0;
        bottom: -2px;
      }
    }

    & > div:nth-child(2){
      padding-top: 18px;
    }
  }
`;

export const Copyright = styled.div`
  & > div {
    display: flex;
    justify-content: center;
    -ms-align-items: center;
    align-items: center;
    padding-bottom: 18px;
    & > img{
      height: 24px;
      width: 36px;
    }
  }

  & > p {
    font-size: 13px;
    line-height: 1.923;
    color: #666;
    text-align: center;

    & > a {
      margin-left: 2px;
      text-decoration: none;
      
    }

  }
`;
