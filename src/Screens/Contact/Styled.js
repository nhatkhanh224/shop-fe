import styled from "styled-components";

export const Contactt = styled.div``;

export const ContactImg = styled.div`
  width: 100%;
  position: relative;
  & > img {
    width: 100%;
    height: 60px;
  }
  & > h4 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
    color: white;
  }
`;

export const ContactBox = styled.div`
  margin: 50px 10px;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  @media (min-width: 676px) {
    flex-direction: row;
  }
`;

export const EmailBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 10px 0;
  flex: 0 0 50%;

  & > h4 {
    font-size: 1.2rem;
  }

  & > form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    align-items: center;

    & > :first-child {
      //box email
      position: relative;
      display: flex;
      align-items: center;
      padding: 0 2px;
      width: 75%;

      & > i {
        //icon email
        position: absolute;
        left: 7px;
        font-size: 2rem;
      }

      & > input[type="email"] {
        //input email
        width: 100%;
        height: 40px;
        background-color: transparent;
        padding: 0 0 0 45px;
        font-size: 1rem;
        color: ${({ theme }) => theme.color};
        &:focus {
          outline: none;
        }
      }
    }

    & > :nth-child(2) {
      //txt area
      width: 70%;
      min-height: 75px;
      height: 75px;
      background-color: transparent;
      padding: 10px;
      resize: vertical;
      overflow: hidden;
      height: 202px;
      font-size: 1rem;
      color: ${({ theme }) => theme.color};

      &:focus {
        outline: none;
      }
    }

    & > :nth-child(3) {
      //submit btn
    }
  }
`;

export const AdressBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 50%;
  gap: 40px;
  padding: 20px 0;
  align-items: center;
  font-size: 1.2rem;
  & > div {
    //box
    display: flex;

    gap: 20px;
    width: 70%;
    & > :nth-child(2) {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
`;
