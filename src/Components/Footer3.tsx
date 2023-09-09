import React from "react";
import styled from "styled-components";
import logo from "./Assets/uber.svg";
import app from "./Assets/app.svg";
import google from "./Assets/google.png";
import { BsFacebook, BsLinkedin, BsYoutube, BsTwitter, BsGithub } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Footer3: React.FC = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <FirstDiv>
            <Logo src={logo} />
            <Image>
                <App src={app}/>
                <Google src={google}/>
            </Image>
            <Icon>
                <BsFacebook />
                <BsTwitter />
                <AiFillInstagram />
            </Icon>
          </FirstDiv>
          <SecondDiv>
            <Box>
              <Title>Get Help</Title>
              <Nav>Buy gift cards</Nav>
              <Nav>Add your restaurant</Nav>
              <Nav>Sign up to deliver</Nav>
              <Nav>Create a business account</Nav>
              <Nav>Promotions</Nav>
            </Box>
            <Box>
              <Title>Restaurants near me</Title>
              <Nav>View all cities</Nav>
              <Nav>View all countries</Nav>
              <Nav>Pickup near me</Nav>
              <Nav>About Uber Eats</Nav>
              <Nav>English</Nav>
            </Box>
          </SecondDiv>
        </Wrapper>
        <CopyT>
          <span>Privacy Policy</span>
          <Icons>
            Terms
          </Icons>
          <Text>
            Pricing
          </Text>
          <Text2>
            Do not sell my info (California)
          </Text2>
        </CopyT>
        <CopyT2>
          <span>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</span>
          <Icons>
            © 2022 Uber Technologies Inc.
          </Icons>
        </CopyT2>
      </Container>
    </div>
  );
};

export default Footer3;

const Icon = styled.div`
    width: 130px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 100px;
`

const Google = styled.img`
    height: 40px;
    margin-left: 10px;
`

const App = styled.img``

const Image = styled.div`
    display: flex;
    width: 100%;
    margin-top: 130px;
`

const Text2 = styled.div`
    margin-right: 50px;
`

const Text = styled.div`
    margin-right: 50px;
`

const Icons = styled.div`
    margin-right: 50px;
`

const CopyT = styled.div`
  text-align: center;
  opacity: 0.8;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  span{
    margin-right: 50px;
  }
`;
const CopyT2 = styled.div`
  text-align: center;
  opacity: 0.8;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
  span{
    margin-right: 50px;
  }
`;
const Box = styled.div`
    width: 190px;
`;
const Title = styled.h4`
  margin: 0;
  margin-bottom: 20px;
  color: black;
  font-weight: 500;
`;
const Nav = styled.h4`
  color: black;
  transition: all ease-in 0.2s;
  padding-bottom: 10px;
  font-weight: 500;

  :hover {
    cursor: pointer;
    color: #ffda0a;
    font-weight: 600;
  }
`;

const Logo = styled.img`
    height: 30px;
    margin-top: -40px;
`;
const Socials = styled.div`
  width: 10vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #0707b8;
  font-size: 1.3rem;
  margin-top: 30px;
`;
const FirstDiv = styled.div`
  width: 300px;

  /* height: 200px; */
  margin-top: 40px;

  p {
    color: black;
    margin-top: 30px;
  }
`;
const SecondDiv = styled.div`
  width: 40%;
  margin-top: 20px;
  margin-right: 300px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  padding: 30px;
`;
const Container = styled.div`
  /* height: 60vh; */
  width: 100%;
  background-color: #f0f5ff;
`;
