import styled, { css } from "styled-components";
import { mainColor } from "../../Shared/Theme";

export const Products = styled.div`
  //Start Component
  & > div {
    & > h2 {
      font-size: 36px;
      line-height: 1.1;
      text-transform: uppercase;
      margin-top: 12px;
    }
    .ShowMoreBtn {
      display: flex;
      margin: auto;
    }
  }
`;
export const Filters = styled.div`
  //component Filter btn
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  & > :first-child {
    //Filter Type
    display: flex;
    overflow: auto;
    & > span {
      margin-right: 0.6rem;
      font-size: 1rem;
      cursor: pointer;

      &.active {
        color: ${mainColor.purple};
      }

      @media (max-width: 739px){
        //medium and up screen
        margin-right: 1rem;
        font-size: 1rem;
        font-weight: 400;
      }

      &:hover {
        color: ${mainColor.purple};
      }
    }
  }

  & > :nth-child(2) {
    // box Search Btn & Advance filter Btn
    font-size: 0.8rem;

    & > button {
      position: relative;
      // margin-right: 10px;
      padding: 12px 10px;
      border: 1px solid ${({ theme }) => theme.color};
      width: 120px;
      &::before {
        padding-right: 10px;
      }
      
      &:hover {
        background-color: ${mainColor.purple};
        color: white;
        border-color: transparent;
        width: 120px;
      } 
    }
  }

  @media (min-width: 575px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
export const Search = styled.div`
  //Search box
  position: relative;
  width: calc(100%);
  border: 1px solid #666;
  margin: 40px auto 0;
  transition: all 3s;
  display: none;
  & > i {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translatey(-50%);
    z-index: 3;
  }
  & > [type="search"] {
    border: none;
    position: relative;
    padding: 0 10px 0 30px;
    width: 100%;
    color: ${({ theme }) => theme.color};
    background-color: transparent;
    height: 40px;
    border-radius: 2px;
    :focus {
      border: none;
      outline: none;
    }
  }
  &.show {
    display: block;
  }
`;

export const Cards = styled.div`
  & > div {
    & > a {
      display: flex;
      flex-direction: column;
      // gap: 15px;
      height: 400px;
      border-radius: 4px;
      text-decoration: none;
      color: #666666;

      @media (max-width: 739px){
        height: 300px;
      }

      & > :first-child {
        border: 1px solid #ccc;
        position: relative;
        overflow: hidden;
        flex: 1 65%;
        display: flex;
        align-items: end;
        justify-content: center;
        & > img {
          width: 100%;
          height: 100%;
          transition: all 0.3s;

        }

        .Quickbutton {
          //Quick View Btn
          position: absolute;
          z-index: 999;
          bottom: -30%;
          left: 50%;
          transform: translate(-50%);
          background-color: white;
          color: black;
          font-size: 0.9;
          padding: 10px;
          transition: all 0.3s;
          &:hover {
            background-color: black;
            color: white;
          }
        }
      }
      &:hover > :first-child .Quickbutton {
        bottom: 10%;
      }
      &:hover > :first-child img {
        transform: scale(1.1);
      }
      & > :nth-child(2){
        border: none;
        margin: 10px 0 20px 0;
      }
      & > :nth-child(3) {
        padding: 0 20px;
        text-align: start;
        font-size: 1rem;
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
    }
  }
`;

export const btnLoadMore = css`
  &.m-y {
    margin: auto;
  }
  
`;
