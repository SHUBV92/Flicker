import styled from "styled-components";

export const CardApp = styled.div`
  display: inline-block;
  font-family: Arial, Helvetica, sans-serif;
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
    padding: 0px;
    /* background-color: green; */
    transition: transform 0.2s; /* Animation */
    width: 100%;
    height: 250px;
    margin: 0 auto;

    /* width: 100%; */
    /* height: 200px; */
   
  }

  p{
    display:none;
  }

  img:active {
    padding: 10px;
    background-color: #f9daea;

    transform: scale(
      1.5
    ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
    border-radius: 50px;
  }

  img:hover{
    p{
      display: block;
    }
  }

  

`;

export const CardContainer = styled.div`
  padding: 10px;
  /* border-bottom: 5px solid pink; */
  border-bottom-left-radius: 25px;

  & p {
    font-size: 10px;
  }
  h3 {
    text-align: center;
    color: grey;
    width: 180px;
    height: 32px;
  }

  h4 {
    margin-top: 40px;
    margin-left: 65px;
  }

  hr {
    margin-top: 50px;
  }

  button {
    /* position: relative;
    top: 162px;
    left: 12px;
    width: 150px; */

    margin-top: 40px;
    margin-left: 40px;

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
  }
`;

// export const product = {
//   main: "inline-block",
//   flexDirection:
// }

// export const CartApp.defaultProps = {
//   theme: {
//     main: "flex",
//     color: "black",
//     width: "500px"
//   }
// }

// export const CartApp = styled.div `
// display: ${props => props.theme.main};
/* font-family: Arial, Helvetica, sans-serif; */
//   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
//   /* transition: 0.3s; */
//   width: 200px;
//   height: 500px;
//   margin: 10px;
// `
