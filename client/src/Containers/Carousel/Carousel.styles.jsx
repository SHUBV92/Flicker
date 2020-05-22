import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid red;
  position: relative;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  overflow: hidden;
  background: slategray;
  i {
    font-size: 2vw;
  }
`;
export const Slider = styled.div`
  border: 1px solid blue;
  position: relative;
  min-width: 100%;
  height: 30%;
  transition: 0.5s;
  overflow: hidden;
  border: none;
`;

export const Button = styled.div`
  position: absolute;
  color: salmon;

  top: 50%;
  transform: translateY() (-50%);
  width: 10%;
  height: 50%;
  background: none;
  border: none;
  outline: none;
  transition: 0.5s;

  Button:hover{
      background: rgba(0, 0, 0, 0.356);
  }
`;
