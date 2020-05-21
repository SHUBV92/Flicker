import styled from "styled-components";

export const CardApp = styled.div`
  display: inline-block;
  font-family: Arial, Helvetica, sans-serif;
  /* flex-drirection: columns; */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin: 10px;
`;

export const CardContainer = styled.div`
  margin: 10px;
  padding: 10px 16px;
  bottom-border: 5px solid pink;
  border-bottom-left-radius: 25px;
`;

export const ImageButton = styled.div`
  position: relative;
  width: 50%;

  img {
    width: 200px;
    height: 200px;
  }

  button {
    position: absolute;
    top: 162px;
    left: 1.5px;

    transform: translate() (-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    background-color: #555;
    opacity: 0.7;
    color: white;
    font-size: 10px;
    padding: 12px 18px;
    border: none;
    cursor: pointer;
    border-radius: 2px;
  }

  button:hover {
    background-color: pink;
  }
`;
