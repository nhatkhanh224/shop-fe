import styled from "styled-components";
import { mainColor } from "../../Shared/Theme";
export const Counter = styled.div`
  display: flex;
  gap: 10px;
  font-size: 1.5rem;
  align-items: center;
  & > button {
    font-size: 1.5rem;
    border: 1px solid ${({ theme }) => theme.color};
    width: 30px;
    height: 30px;
    color: ${({ theme }) => theme.color};

    &:hover {
      background-color: ${mainColor.purple};
      border: none;
    }
  }

  & > div {
    padding: 0px 20px;
    color: ${({ theme }) => theme.color};
  }
`;
