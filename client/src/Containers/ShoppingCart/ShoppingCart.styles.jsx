import styled from "styled-components";

export const CartDisplay = styled.div`
background-color: rgb(247, 247, 247);
`

export const Header = styled.h3`
  margin: 10px;
  padding: 10px;
`;

export const ItemCard = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width:50vh;
  justify-content: flex-center;
  // background-color: white;
  padding: 10px;
  margin: 25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  p.solid {border-style: solid;};
`;

export const Items = styled.section`
  padding: 2px 16px;
`;

export const Checkout = styled.section`
  display:flex;
  justify-content:flex-end;
 `
