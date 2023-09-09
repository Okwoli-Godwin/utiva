import React from "react";
import styled from "styled-components";
import logo from "./Assets/vercel.png";
import { BsFacebook, BsLinkedin, BsYoutube, BsTwitter, BsGithub } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Footer: React.FC = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <FirstDiv>
            <Logo src={logo} />
          </FirstDiv>
          <SecondDiv>
            <Box>
              <Title>Frameworks</Title>
              <Nav>Next.js</Nav>
              <Nav>Create React App</Nav>
              <Nav>Svelte</Nav>
              <Nav>Nuxt</Nav>
              <Nav>Gatsby</Nav>
              <Nav>Vue</Nav>
              <Nav>Angular</Nav>
              <Nav>More Frameworks</Nav>
            </Box>
            <Box>
              <Title>Resources</Title>
              <Nav>Documentation</Nav>
              <Nav>Experts</Nav>
              <Nav>Customers</Nav>
              <Nav>Guides</Nav>
              <Nav>Help</Nav>
              <Nav>API Reference</Nav>
              <Nav>OSS</Nav>
              <Nav>Command-Line</Nav>
              <Nav>Integrations</Nav>
            </Box>
            <Box>
              <Title>Company</Title>
              <Nav>Home</Nav>
              <Nav>Blog</Nav>
              <Nav>Changelog</Nav>
              <Nav>About</Nav>
              <Nav>Careers</Nav>
              <Nav>Pricing</Nav>
              <Nav>Enterprise</Nav>
              <Nav>Security</Nav>
              <Nav>Next.js Conf</Nav>
              <Nav>Partners</Nav>
              <Nav>Contact Us</Nav>
            </Box>
            <Box>
              <Title>Legal</Title>
              <Nav>Privacy Policy</Nav>
              <Nav>Terms of Service</Nav>
              <Nav>Trademark Policy</Nav>
              <Nav>Inactivity Policy</Nav>
              <Nav>DMCA Policy</Nav>
              <Nav>Support Terms</Nav>
              <Nav>DPA</Nav>
              <Nav>SLA</Nav>
              <Nav>Sub-processors</Nav>
              <Nav>Cookie Preferences</Nav>
              <Nav>Event Terms and Conditions</Nav>
              <Nav>Job Applicant Privacy Notice</Nav>
            </Box>
          </SecondDiv>
        </Wrapper>
        <CopyT>
          <span>Copyright © 2022 Vercel Inc. All rights reserved.</span>
          <Icons>
            <BsGithub />
            <BsTwitter />
          </Icons>
          <Text>
            Status:All systems normal.
          </Text>
          <Text2>
            System
          </Text2>
        </CopyT>
      </Container>
    </div>
  );
};

export default Footer;

const Text2 = styled.h5`

`

const Text = styled.h4`
    
`

const Icons = styled.div`
    width: 65px;
    justify-content: space-between;
    display: flex;
    font-size: 20px;
`

const CopyT = styled.div`
  text-align: center;
  opacity: 0.8;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Box = styled.div``;
const Title = styled.h4`
  margin: 0;
  margin-bottom: 20px;
  color: #3F3F3F;
  font-weight: 400;
`;
const Nav = styled.h5`
  font-size: 0.8rem;
  color: #7F7F7F;
  transition: all ease-in 0.2s;
  padding-bottom: 10px;
  font-weight: 400;

  :hover {
    cursor: pointer;
    color: #ffda0a;
    font-weight: 600;
  }
`;

const Logo = styled.img`
    height: 80px;
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
  width: 70%;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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
  background-color: #f0f5ff;
`;
