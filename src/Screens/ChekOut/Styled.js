import styled from "styled-components";

export const CartTotals = styled.div`
  padding: 15px;
  border: 1px solid;
  width: 100%;
  & > h4 {
    font-size: 1.2rem;
    padding: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid;
  }
  & > :nth-child(2) {
    display: flex;
    gap: 40px;
    font-size: 1.1rem;
    margin-bottom: 10px;
    padding: 20px 0;
    border-bottom: 1px solid;
  }

  & > :nth-child(3) {
    display: flex;
    gap: 40px;

    & > :nth-child(2) {
      display: flex;
      flex-direction: column;
      gap: 10px;
      & > p {
        line-height: 1.5rem;
      }
    }
  }
`;
export const TotalProducts = styled.div`
  overflow: auto;
  flex: 0 0 65%;
  border: 1px solid;
  width: 100%;

  & > table {
    border-collapse: collapse;
    width: 100%;
    height: 180px;
    @media (min-width: 1287px) {
      width: 100%;
    }
    & > tbody tr {
      text-align: center;
      border-bottom: 1px solid;
      & > td {
        padding: 15px;
        & > img {
          width: 40px;
          position: relative;
          top: 20px;
        }
        @media (min-width: 676px) {
          padding: 15px;
        }
      }
    }
  }
`;

export const CheckOutStyle = styled.div`
  display: flex;
  gap: 50px;
  align-items: start;
  flex-direction: column;

  @media (min-width: 1287px) {
    flex-direction: row;
  }
`;
export const Total = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 40px;
  font-size: 1.2rem;
  padding: 10px 0;
  border-top: 1px solid;
`;
