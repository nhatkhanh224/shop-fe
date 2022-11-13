import styled from "styled-components";
import { mainColor } from "../../Shared/Theme";

export const Card = styled.div`
  //Start Component Style

  & > :first-child {
    //Div Container=>It contains all the elements
    margin: auto;
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(auto-fit, minmax(250px, 350px));
    gap: 15px;
    justify-content: center;

    //start Styled Link

    & > a {
      //All links to go to the shop page
      position: relative;
      transition: all 0.2s;
      overflow: hidden;
      border: 1px solid ${({ theme }) => theme.color};
      &::before {
        //To show the color purple when hover
        content: " ";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 1;
        background-color: opacity;
        transition: all 1s;
      }

      & > img {
        width: 100%;
        height: 100%;
      }

      //statrt Title
      & > :nth-child(2) {
        //title
        position: absolute;
        top: 22px;
        z-index: 998;
        left: 20px;
        transition: all 0.2s;
        transition-timing-function: linear;

        & > h5 {
          font-size: 0.9rem;
          margin: 0.8rem 0;
        }

        h4 {
          font-size: 1.25rem;
        }
      }
      //end Title

      //Start ShopNow btn
      & > :nth-child(3) {
        position: absolute;
        bottom: 30px;
        left: 15px;
        font-size: 0.8rem;
        color: white;
        z-index: 5;
        transform: translatey(200px);
        transition: all 0.4s;
        font-size: 1.1rem;

        &::before {
          //underLine ShopNow btn
          content: "";
          position: absolute;
          width: 100%;
          height: 2px;
          background-color: white;
          bottom: -5px;
          transition: all 0.3s 0.3s linear;
          transform-origin: center center;
          transform: scale(0);
        }
      }
      //end ShopNow btn

      &:hover > :nth-child(3)::before {
        //display ShopNow btn
        width: 100%;
        height: 2px;
        transform: scale(1);
      }
      &:hover :nth-child(3) {
        transform: translatey(0);
      }
      &:hover > :nth-child(2) {
        //change title color
        color: white;
      }
      &:hover::before {
        //change block color to parpel
        opacity: 0.9;
        transition: all 1s;
        background-color: ${mainColor.purple};
      }
    }
  }
  //end Styled Link
`;
