import styled from "styled-components";
import { mainColor } from "../../Shared/Theme";

export const OurStore = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin: 65px 0;
  @media (min-width: 676px) {
    flex-direction: row;
  }
  & > :first-child {
    // text box
    & > :first-child {
      //h3
      font-weight: bold;
      font-size: 1.8rem;
      margin-bottom: 25px;
    }
    & > :nth-child(2) {
      //paragraph
      font-size: 1.05rem;
      line-height: 1.8rem;
    }
  }
  & > :nth-child(2) {
    //img
    position: relative;
    width: 70%;
    height: 400px;
    margin: auto;
    @media (min-width: 676px) {
      width: 350px;
      height: 375px;
    }
  }
  .q {
    position: relative;
    margin-top: 66px;
    display: block;
    margin-left: 40px;
    line-height: 2.2rem;
    &:before {
      content: "";
      position: absolute;
      left: -20px;
      width: 2px;
      height: 100%;
      background-color: ${mainColor.purple};
    }
  }
`;
export const AboutContainer = styled.div``;

export const AboutImg = styled.div`
  max-width: 100%;
  min-width: 100%;
  position: relative;
  & > :nth-child(1) {
    width: 100%;
  }
  & > :nth-child(2) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3rem;
    color: white;
  }
`;
