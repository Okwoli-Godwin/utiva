import React from "react";
import styled from "styled-components";
import logo from "./Assets/amazon.png";
import app from "./Assets/app2.svg";
import google from "./Assets/google2.svg";
import { BsFacebook, BsLinkedin, BsYoutube, BsTwitter, BsGithub } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Footer5: React.FC = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          {/* <FirstDiv>
            <Logo src={logo} />
            <Us>US (International) /<br />English</Us>
            <Us2>Help & Support</Us2>
          </FirstDiv> */}
          <SecondDiv>
            <Box1>
              <Title>Get to Know Us</Title>
              <Nav>Careers</Nav>
              <Nav>Blog</Nav>
              <Nav>About Amazon</Nav>
              <Nav>Investor Relations</Nav>
              <Nav>Amazon Devices</Nav>
              <Nav>Amazon Science</Nav>
            </Box1>
            <Box2>
              <Title>Make Money with Us</Title>
              <Nav>Sell products on Amazon</Nav>
              <Nav>Sell on Amazon Business</Nav>
              <Nav>Sell apps on Amazon</Nav>
              <Nav>Become an Affiliate</Nav>
              <Nav>Advertise Your Products</Nav>
              <Nav>Self-Publish with Us</Nav>
              <Nav>Host an Amazon Hub</Nav>
              <Nav>›See More Make Money<br />with Us</Nav>
            </Box2>
            <Box3>
              <Title>Amazon Payment Products</Title>
              <Nav>Amazon Business Card</Nav>
              <Nav>Shop with Points</Nav>
              <Nav>Reload Your Balance</Nav>
              <Nav>Amazon Currency Converter</Nav>
            </Box3>
            <Box4>
              <Title>Let Us Help You</Title>
              <Nav>Amazon and COVID-19</Nav>
              <Nav>Your Account</Nav>
              <Nav>Your Orders</Nav>
              <Nav>Shipping Rates & Policies</Nav>
              <Nav>Returns & Replacements</Nav>
              <Nav>Manage Your Content and Devices</Nav>
              <Nav>Amazon Assistant</Nav>
              <Nav>Help</Nav>
            </Box4>
            {/* <Box>
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
            </Box> */}
          </SecondDiv>
        </Wrapper>
        <CopyT></CopyT>
        <Amazon>
            <Amazons src={logo}/>
        </Amazon>
        {/* <Down>
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
        </Down> */}
      </Container>
    </div>
  );
};

export default Footer5;

const Amazon = styled.div``
const Amazons = styled.img``

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
const Box1 = styled.div`
    width: 300px;
    margin-right: -40px;
`
const Box2 = styled.div`
    width: 300px;
`
const Box3 = styled.div`
    width: 300px;
`
const Box4 = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
`
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
  width: 100%;
  height: 1px;
  background-color: #2B3340;
  display: flex;
`;
const Box = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;
const Title = styled.h4`
  margin: 0;
  margin-bottom: 20px;
  color: white;
  font-weight: 700;
  font-size: 18px;
`;
const Nav = styled.h5`
  color: #CDCFD1;
  transition: all ease-in 0.2s;
  font-weight: 400;
  margin: 10px;
  font-size: 14px;
  display: flex;
  display: flex;
  margin-left: -1px;

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
  width: 100%;
  margin-top: 20px;
  display: flex;
  /* grid-gap: 30px; */
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
  background-color: #232F3E;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
