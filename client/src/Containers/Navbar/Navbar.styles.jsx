import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
`;

export const NavWrapper = styled.div`
  text-align: center;
  /* background-color: rgb(247, 247, 247); */
  background-color: #f9daea;
`;

export const Logo = styled.img`
  margin: 15px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 15%;
`;

export const Links = styled.ul`
  list-style: none;
  /* padding: 3px; */
  /* margin: 3px; */
  text-decoration: none;
  display: inline-block;
  top: 0;
  color: black;
  text-transform: uppercase;
`;
