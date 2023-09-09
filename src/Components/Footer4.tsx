import React from "react";
import styled from "styled-components";
import logo from "./Assets/freelancer.svg";
import app from "./Assets/app2.svg";
import google from "./Assets/google2.svg";
import { BsFacebook, BsLinkedin, BsYoutube, BsTwitter, BsGithub } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Footer4: React.FC = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <FirstDiv>
            <Logo src={logo} />
            <Us>US (International) /<br />English</Us>
            <Us2>Help & Support</Us2>
          </FirstDiv>
          <SecondDiv>
            <Box>
              <Title>Freelancer</Title>
              <Nav>Categories</Nav>
              <Nav>Projects</Nav>
              <Nav>Contests</Nav>
              <Nav>Freelancers</Nav>
              <Nav>Enterprise</Nav>
              <Nav>Membership</Nav>
              <Nav>Preferred Freelancer</Nav>
              <Nav>Program</Nav>
              <Nav>Project Management</Nav>
              <Nav>Local Jobs</Nav>
              <Nav>Photo Anywhere</Nav>
              <Nav>Showcase</Nav>
              <Nav>API for Developers</Nav>
              <Nav>Get Verified</Nav>
            </Box>
            <Box>
              <Title>About</Title>
              <Nav>About us</Nav>
              <Nav>How it Works</Nav>
              <Nav>Careers</Nav>
              <Nav>Security</Nav>
              <Nav>Investor</Nav>
              <Nav>Sitemap</Nav>
              <Nav>Stories</Nav>
              <Nav>News</Nav>
            </Box>
            <Box>
              <Title>Terms</Title>
              <Nav>Privacy Policy</Nav>
              <Nav>Terms and Conditions</Nav>
              <Nav>Copyright Policy</Nav>
              <Nav>Code of Conduct</Nav>
              <Nav>Fees and Charges</Nav>
            </Box>
            <Box>
              <Title>Partners</Title>
              <Nav>Escrow.com</Nav>
              <Nav>Loadshift</Nav>
              <Nav>Freightlancer</Nav>
              <Nav>Warrior Forum</Nav>
            </Box>
            <Box>
              <Title>Apps</Title>
              <Image>
                <App src={app}/>
                <Google src={google}/>
              </Image>
              <Icons>
                <BsFacebook />
                <BsTwitter />
                <BsYoutube />
                <AiFillInstagram />
          </Icons>
            </Box>
          </SecondDiv>
        </Wrapper>
        <CopyT></CopyT>
        <Down>
            <Box1>
                <Up>62,502,587</Up>
                <Dow>Registered Users</Dow>
            </Box1>
            <Box1>
                <Up>22,009,735</Up>
                <Dow>Total Jobs Posted</Dow>
            </Box1>
            <Box1>
                <Up2>Freelancer ® is a registered Trademark of Freelancer Technology Pty Limited (ACN 142 189 759)</Up2>
                <Dow2>Copyright © 2022 Freelancer Technology Pty Limited (ACN 142 189 759)</Dow2>
            </Box1>
        </Down>
      </Container>
    </div>
  );
};

export default Footer4;

const Up2 = styled.h6`
    margin: 0;
    color: #d1d1d1;
`
const Dow2 = styled.h6`
    margin: 0;
    color: #d1d1d1;
`

const Down = styled.div`
    display: flex;
    margin-left: 42px;
    width: 80%;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
`
const Box1 = styled.div``
const Up = styled.h4`
    color: #d1d1d1;
    margin: 0;
`
const Dow = styled.h5`
    color: #d1d1d1;
    margin: 0;
`

const Google = styled.img`
    height: 40px;
    margin-left: 10px;
    background-color: #161E2C;
    margin-left: -0.1px;
    margin-top: 20px;
`

const App = styled.img`
    background-color: #161E2C;
`

const Image = styled.div``

const Us = styled.div`
    color: white;
    margin-left: 30px;
    margin-top: 30px;
`
const Us2 = styled.div`
    color: white;
    margin-left: 30px;
    margin-top: 20px;
`

const Text2 = styled.h5`

`

const Text = styled.h4`
    
`

const Icons = styled.div`
    width: 135px;
    justify-content: space-between;
    display: flex;
    font-size: 20px;
    color: white;
    font-size: 25px;
    margin-top: 25px;
`

const CopyT = styled.div`
  width: 93%;
  height: 1px;
  background-color: #2B3340;
  display: flex;
  margin-left: 42px;
`;
const Box = styled.div``;
const Title = styled.h4`
  margin: 0;
  margin-bottom: 20px;
  color: white;
  font-weight: 700;
  font-size: 18px;
`;
const Nav = styled.h5`
  font-size: 0.8rem;
  color: #CDCFD1;
  transition: all ease-in 0.2s;
  font-weight: 400;
  margin: 8px;
  margin-left: -1px;
  font-size: 14px;

  :hover {
    cursor: pointer;
    color: #ffda0a;
    font-weight: 600;
  }
`;

const Logo = styled.img`
    height: 40px;
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
  width: 90%;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
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
  background-color: #161E2C;
`;
