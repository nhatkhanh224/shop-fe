import styled from "styled-components";
import { mainColor } from "../../Shared/Theme";
//header style

export const Topbar = styled.div `
  background-color: #222;
  display: flex;
  height: 40px;
  & > .top-bar{
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 739px){
      display: none;
    }

    & > .left-top-bar{
      font-size: 12px;
      line-height: 1.8;
      color: #b2b2b2;
    }

    & > .right-top-bar{
      height: 100%;
      display: flex;
      & > a{
        font-size: 12px;
        line-height: 1.8;
        height: 100%;
        color: #b2b2b2;
        border-right: 1px solid rgba(255,255,255,0.3);
        padding: 0 25px;
        text-decoration: none;
        align-items: center;
        display: flex;
        &:first-child{
          border-left: 1px solid rgba(255,255,255,0.3);
        }
      }
    }
  }
`;

export const Header = styled.header`
  background-color: transparent;
  &.background {
    background-color: ${({ theme }) => theme.backgroundColor};
    z-index: 9999;
  }
  & > div {
    display: flex;
    position: relative;
    min-height: 80px;
    height: 80px;
    padding: 0 10px;
    padding-bottom: 10px;
    align-items: center;
    justify-content: space-between;
    
  }
  @media (min-width: 739px) {
    background-color: transparent;
    position: sticky;
    top: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;
export const Logo = styled.div`
  flex-grow: 1;
  & > a {
    width: 100%;
    display: block;
    & > img {
      height: 16px;
      max-width: calc(100% + 4px);
    }
  }
`;

export const Bar = styled.div`
  position: absolute;
  z-index: 999;
  width: 100%;
  background-color: ${mainColor.purple};
  left: 0;
  top: 55px;
  display: flex;
  flex-direction: column;
  padding: 10px 15px;
  margin-left: 40px;

  &.toggle {
    display: none;
    @media (min-width: 739px) {
      display: flex;
    }
  }
  @media (min-width: 739px) {
    position: static;
    flex-direction: row;
    background-color: transparent !important;
    gap: 40px;
  }

  & > a {
    // font-weight: bold;
    padding: 7px 0;
    color: white;
    font-size: 1.4rem;
    text-decoration: none;

    @media (min-width: 739px) {
      color: ${({ theme }) => theme.color};
      font-size: 1rem;
    }

    &:hover{
      color: ${mainColor.purple};
    }

  }
  .active {
    color: ${({ theme }) => theme.color};
    @media (min-width: 739px) {
      color: ${mainColor.purple};
    }
  }
`;

export const ShopIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 20px;
  color: ${({ theme }) => theme.color};

  & > a{
    text-decoration: none;
    &:hover{
      color: ${mainColor.purple} !important;
    }
  }
  & > div {
    cursor: pointer;
  }
  & > :last-child {
    @media (min-width: 739px) {
      display: none;
    }
  }
`;

