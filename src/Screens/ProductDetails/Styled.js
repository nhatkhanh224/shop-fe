import styled from "styled-components";
import { mainColor } from "../../Shared/Theme";
export const PRODUCTDETAILS = styled.div`
  & > :first-child {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
    .slider-MW {
      max-width: 550px;
      padding: 20px;
    }

    @media (min-width: 992px) {
      padding: 0 150px;
    }
    @media (min-width: 1200px) {
      padding: 0 200px;
    }
  }
  @media (min-width: 570px) {
    margin-top: 55px;
  }
`;

export const Select = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Details = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid ${mainColor.purple};
  padding: 35px;
  font-size: 1rem;
  @media (min-width: 997px) {
    font-size: 1rem;
  }

  & > h4,
  > p,
  > span {
    display: block;
    margin-bottom: 1rem;
  }

  & > :nth-child(6),
  > :nth-child(7),
  > :nth-child(8) {
    margin: auto;
  }
`;

export const Description = styled.div`
margin-top:30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid ${mainColor.purple};
  padding: 10px;
`;
