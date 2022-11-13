import styled, { css } from "styled-components";
import { mainColor } from "../../Shared/Theme";

export const Products = styled.div`
  //Start Component
  & > div {
    & > h2 {
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
  gap: 30px;

  & > :first-child {
    //Filter Type
    display: flex;
    overflow: auto;
    & > span {
      margin-right: 0.6rem;
      font-size: 0.75rem;
      cursor: pointer;

      &.active {
        color: ${mainColor.purple};
      }
      @media (min-width: 575px) {
        //medium and up screen
        margin-right: 1rem;
        font-size: 1.2rem;
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
      margin-right: 10px;
      padding: 12px 10px;
      border: 1px solid ${({ theme }) => theme.color};

      &::before {
        padding-right: 10px;
      }
      &:hover {
        background-color: ${mainColor.purple};
        color: white;
        border-color: transparent;
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
  width: calc(100% - 50px);
  border: 1px solid ${({ theme }) => theme.color};
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
    height: 30px;
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
  display: grid;
  justify-content: center;
  gap: 15px;
  padding-top: 40px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 250px));

  & > a {
    border: 2px solid ${mainColor.purple};
    display: flex;
    flex-direction: column;
    gap: 20px;
    & > :first-child {
      position: relative;
      overflow: hidden;
      flex: 0 65%;
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

    & > :nth-child(2) {
      padding: 0 20px;
      text-align: start;
      font-size: 1rem;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  }
`;

export const btnLoadMore = css`
  &.m-y {
    margin: auto;
  }
`;
