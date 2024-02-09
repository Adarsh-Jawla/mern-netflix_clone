import React from 'react';
import styled from "styled-components";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();
  
  return (
    <Container className='flex a-center j-between'>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <button onClick={() => navigate(props.login? "/login" : "/signup")}>{props.login? "Log In" : "Sign up"}</button>
    </Container>
  )
};

const Container = styled.div`
padding: 0 4rem;
.logo{
  img{
    height: 4rem;
  }
}
button{
  padding: 0.4rem 0.9rem;
  background-color: #e50914;
  border: none;
  color: white;
  border-radius: 0.2rem;
  font-weight: bold;
  font-size: 1.05rem;
  cursor: pointer;
}
`;

export default Header;

