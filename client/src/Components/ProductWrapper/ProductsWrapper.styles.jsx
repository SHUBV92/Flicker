import styled from "styled-components";

export const Container = styled.div`
  
  text-align: center;
  float: left;
  width: 33.33%;
  padding: 5px;
  
  .row::after {
  content: "";
  clear: both;
  display: table;
}
  h3 {
    color:"#ffd24d";
    margin:"10px";
    font-size:"30px"; 
    text-align:"center";
  }

  
`;

