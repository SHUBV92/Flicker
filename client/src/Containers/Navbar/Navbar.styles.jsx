import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  height: 200px;
  width: 100%;
  z-index: 100;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);

  /* Dropdown Button */
  .dropbtn {
    background-color: #f9daea;
    color: grey;
    padding: 16px;
    font-size: 16px;
    border: none;
  }

  /* The container <div> - needed to position the dropdown content */
  .dropdown {
    position: relative;
    display: inline-block;
    opacity: 0.8;
  }

  /* Dropdown Content (Hidden by Default) */
  .dropdown-content {
    display: none;
    position: absolute;
    /* background-color: #f1f1f1; */
    background-color: #f9daea;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px
      rgba(0, 0, 0, 0.2);
    z-index: 1;
    border-radius: 10px;
    margin-right: 50px;  
    /* margin-top: 5px; */
  }

  /* Links inside the dropdown */
  .dropdown-content a {
    color: black;
    font-size: 20px;
    font-style: bold;
    padding: 12px 16px;
    opacity: 0.5;
    text-decoration: none;
    display: block;
  }

  /* Change color of dropdown links on hover */
  .dropdown-content a:hover {
    background-color: #ddd;
  }

  /* Show the dropdown menu on hover */
  .dropdown:hover .dropdown-content {
    display: block;
  }

  /* Change the background color of the dropdown button when the dropdown content is shown */
  .dropdown:hover .dropbtn {
    background-color: #fff;
  }
`;

export const NavWrapper = styled.div`
  /* padding-top:15px; */
  text-align: center;
  /* background-color: rgb(247, 247, 247); */
  background-color: #f9daea;
  /* height: 55px; */
`;

export const Logo = styled.img`
  margin: 15px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 15%;
`;

export const Links = styled.ul`
  /* margin: 40px; */
  list-style: none;
  /* padding: 3px; */
  /* margin: 3px; */
  text-decoration: none;
  display: inline-block;
  top: 0;
  color: black;
  text-transform: uppercase;
`;
