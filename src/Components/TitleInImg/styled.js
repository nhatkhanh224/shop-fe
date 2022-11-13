import styled from "styled-components";

export const TitleImg = styled.div`
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
