import React from 'react'
import styled from 'styled-components'
import {AiOutlineArrowRight} from "react-icons/ai"

const Hero = () => {
  const myVideo = require("./Assets/vid.mp4");
  return (
    <Container>
      <Wrapper>
        <Video src={myVideo} autoPlay={true} muted playsInline loop={true} />
        <Card>
          <Up>Build the next <br /> tech Talent</Up>
          <Nav>You have the knowledge and the expertise, we have the platform. <br />
           Join us upskill the next generation of tech talents.</Nav>

           <Button>Get Started
                    <Icon><AiOutlineArrowRight /></Icon>
            </Button>
        </Card>

      </Wrapper>
    </Container>
  )
}

export default Hero

const Icon = styled.div`
    margin-left: 10px;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
`

const Button = styled.div`
    width: 170px;
    height: 57px;
    display: flex;
    background-color: #FBAF1B;
    border-radius: 7px;
    align-items: center;
    color: white;
    justify-content: center;
    box-shadow: rgba(251, 175, 27, 0.4) 0px 5px 40px 0px;
    margin-top: 60px;
    cursor: pointer;
`

const Nav = styled.div`
  text-align: center;
  font-size: 1.200rem;
  color: white;
  line-height: 30px;
  margin-top: 30px;
`

const Up = styled.div`
  color: white;
  font-weight: 600;
  font-size: 4rem;
  text-align: center;
`

const Card = styled.div`
  width: 50%;
  height: 380px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  z-index: 111;
`

const Container = styled.div`
  width: 100%;
  height: 600px;
  /* background-color: black; */
  /* color: white; */
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Wrapper = styled.div`
   width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Video = styled.video`
  width: 100%;
  height:100%;
  color: white;
  object-fit: cover;
  position: absolute;
  top: 0;
  /* z-index: -1; */
`;


