import styled from "styled-components";
import { mainColor } from "../../Shared/Theme";
//header style
export const Header = styled.header`
  background-color: transparent;
  &.background {
    background-color: ${({ theme }) => theme.backgroundColor};
  }
  & > div {
    display: flex;
    position: relative;
    min-height: 55px;
    height: 55px;
    padding: 15px;
    align-items: center;
    justify-content: space-between;
  }
  @media (min-width: 575px) {
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
      max-width: calc(100% - 25px);
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
  &.toggle {
    display: none;
    @media (min-width: 575px) {
      display: flex;
    }
  }
  @media (min-width: 575px) {
    position: static;
    flex-direction: row;
    background-color: transparent !important;
    gap: 40px;
  }
  & > a {
    font-weight: bold;
    padding: 7px 0;
    color: white;
    font-size: 1.2rem;
    @media (min-width: 575px) {
      color: ${({ theme }) => theme.color};
      font-size: 1rem;
    }
  }
  .active {
    color: ${({ theme }) => theme.color};
    @media (min-width: 575px) {
      color: ${mainColor.purple};
    }
  }
`;

export const ShopIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${({ theme }) => theme.color};
  & > div {
    cursor: pointer;
  }
  & > :last-child {
    @media (min-width: 575px) {
      display: none;
    }
  }
`;
