import styled from "styled-components";

export const CardApp = styled.div`
  display: inline-block;
  /* font-family: Arial, Helvetica, sans-serif; */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  /* transition: 0.3s; */
  width: 200px;
  height: 500px;
  margin: 10px;
  /* padding: 0px; */
`;

export const Image = styled.div`
  /* position: relative; */
  img {
    width: 100%;
    height: 200px;
  }
`;

export const CardContainer = styled.div`
  padding: 10px;
  /* border-bottom: 5px solid pink; */
  border-bottom-left-radius: 25px;

  & p {
    font-size: 10px;
  }
  h3{
    text-align:center;
    color: grey;
  }

  button {
    /* position: relative;
    top: 162px;
    left: 12px;
    width: 150px; */

    margin-top: 50px;

    /* transform: translate() (-50%, -50%); 
    -ms-transform: translate(-50%, -50%);  */
    /* background-color: #555; */
    background-color: pink;    
    opacity: 0.4;
    color: black;
    font-size: 10px;
    padding: 12px 18px;
    border: none;
    cursor: pointer;
    border-radius: 2px;
    transition: width 10s;

  }

  button:hover {
    background-color: grey;
    color: white;
    padding: 20px;
  }
`;
