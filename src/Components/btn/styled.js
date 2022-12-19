import styled from "styled-components";

export const Wraper = styled.div`
  .btnStyle {
    padding: 10px 15px;
    background-color: #717fe0;
    border-radius: 40px;
    color: white;
    cursor: pointer;
    border: none;
    width: 140px;
    text-decoration: none;
    
    @media (min-width: 676px) {
      font-size: 1rem;
    }

    &:hover{
      background-color: #000;
      color: white;
    }
  }

  .m-y{
    background-color: #ccc;
    color: #000;
    width: 200px;
  }
`;
