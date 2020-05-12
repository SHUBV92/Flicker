import styled from "styled-components";

export const App = styled.div`
  display: flex;
  width: full;
height: 8rem;
  flex-direction: row;
  background-color: rgb(247, 247, 247);
  justify-content: center;

    position: fixed;
    top: 0;
    width: 100%;
  
`;

export const Img = styled.img`
display: flex;
justify-content:flex-start;
width:20vh;
margin:10px;
padding:10px;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;



`

export const Container = styled.ul`
  list-style: none;
  padding: 3px;
  margin: 3px;
  flex-direction: row;
  align-items: center;
`;

export const Routes = styled.li`
  font-weight: bold;
  text-transform: uppercase;
`;
