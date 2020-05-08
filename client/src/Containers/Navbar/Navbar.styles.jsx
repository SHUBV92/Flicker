import styled from "styled-components";

export const App = styled.div`
  display: flex;
  width: 100vh;
  height: 10rem;
  flex-direction: row;
  background-color: salmon;
  justify-content: flex-end;
`;

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
