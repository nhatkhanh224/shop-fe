import styled from "styled-components";
import { mainColor } from "../../Shared/Theme";
export const EMPTY = styled.div`
  display: flex;
  flex-direction: column;
  gap: 41px;
  align-items: center;
  font-size: 1.5rem;
  padding: 90px 11px;
  border: 2px solid ${mainColor.purple};
  margin: 56px auto;
  color: ${mainColor.purple};
  text-align: center;
  line-height: 2.2rem;

  & > a {
    font-weight: bold;
  }

  & > :last-child,
  > :first-child {
    font-weight: bold;
    font-size: 2rem;
  }
`;
