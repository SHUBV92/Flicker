import styled from "styled-components";

export const CartDisplay = styled.div`
background-color: rgb(247, 247, 247);
padding: 100px;
`

export const Header = styled.h3`
  margin: 10px;
  padding: 10px;
  h3{
    text-align: center;
  }
`;

export const ItemCard = styled.div`

display: inline-block;

  width:50vh;
  padding: 10px;
  margin: 25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  p.solid {border-style: solid;};
`;

export const Checkout = styled.section`

  padding-left: 800px;
  /* position: fixed; */
 `

export const Description = styled.div`
 margin-left: 10px;

`