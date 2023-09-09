import React from 'react'
import styled from 'styled-components'
import {AiOutlineArrowRight} from "react-icons/ai"
import {FiArrowUpRight} from "react-icons/fi"
import image5 from "./Components/Assets/1.png"
import image6 from "./Components/Assets/2.png"
import image7 from "./Components/Assets/3.png"


interface Drop {
  sch: string;
  na1: String;
  na2: string;
  na3: string;
  na4: string;
  na9: string
  pr: string;
  na5: string;
  na6: string;
  na7: string;
  na8: string;
  na10: string
  q: string;
  a:string;
  image: string
  fr: string
}

const Globaldrop: React.FC<Drop> = ({sch, na1, na2, na3, na4, na9, pr, na5, na6, na7, na8, na10, q, a, image, fr}) => {
  return (
    <Container>
      <Up>
        <Img src={image} />
        <Utiv>{fr}</Utiv>
      </Up>
      <Down>
        <Card1>
          <Bold>{sch}</Bold>
          <Nav>{na1}
            <Icon><AiOutlineArrowRight /></Icon>
          </Nav>
          <Nav>{na2}
            <Icon><AiOutlineArrowRight /></Icon>
          </Nav>
          <Nav>{na3}
            <Icon><AiOutlineArrowRight /></Icon>
          </Nav>
          <Nav>{na4}
            <Icon><AiOutlineArrowRight /></Icon>
          </Nav>
        </Card1>
        <Card2>
          <Bold>{pr}</Bold>
          <Nav3>{na5}</Nav3>
          <Nav3>{na6}</Nav3>
          <Nav3>{na7}</Nav3>
          <Nav3>{na8}</Nav3>
          <Nav3>{na10}</Nav3>
        </Card2>
        <Card3>
          <Bold>{q}</Bold>
          <Nav2>{a}</Nav2>
          <Box>
                <ImageHold>
                    <Card5 src={image5} />
                    <Card6 src={image6} />
                    <Card7 src={image7} />
                </ImageHold>
                <TextHold2>
                    <Up1>Read Testimonials
                        <Icons>
                            <FiArrowUpRight />
                        </Icons>
                    </Up1>
                    <Dowm1>Over 20 amazing stories</Dowm1>
                </TextHold2>
            </Box>
        </Card3>
      </Down>
    </Container>
  )
}

export default Globaldrop
const Utiv = styled.div`
  color: #050794;
  margin-left: 15px;
  font-weight: 600;
  margin-top: 7px;
`
const Img = styled.img`
  
`
const Up1 = styled.h5`
    color: #050794;
    display: flex;
    font-size: 14px;
    margin: 0px;
    
`
const Dowm1 = styled.h6`
    margin: 0px;
    color: #747476;
    font-size: 12px;
    margin-right: 5px;
`
const Icons = styled.div`
    color: #050794;
    font-size: 20px;
    margin-top: -5px;
`
const TextHold2 = styled.div`
    width: 154px;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
`
const Box = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    margin-top: 40px;
    align-items: center;
    cursor: pointer;
    :hover{
        margin-left: -3px;
        transition: 350ms;
    }
`

const Card7 = styled.img`
    width: 38px;
    height: 38px;
    border-radius: 50px;
    border: 1px solid white;
    object-fit: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -12px;
`

const Card6 = styled.img`
    width: 38px;
    height: 38px;
    border-radius: 50px;
    border: 1px solid white;
    object-fit: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -12px;
`

const Card5 = styled.img`
    width: 38px;
    height: 38px;
    border-radius: 50px;
    border: 1px solid white;
    object-fit: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ImageHold = styled.div`
    width: 110px;
    align-items: center;
    display: flex;
`
const Icon = styled.div`
  color: #1e2027;
`
const Nav2 = styled.div`
  font-size: 14px;
  color: #747476;
  display: flex;
  width: 100%;
  margin-top: 20px;
  line-height: 25px;
  font-weight: 500;
`
const Nav = styled.div`
  font-size: 13px;
  color: #747476;
  display: flex;
  width: 100%;
  justify-content: space-between;
`
const Nav3 = styled.div`
  font-size: 13px;
  color: #747476;
  display: flex;
  width: 100%;
  justify-content: space-between;
`
const Bold = styled.div`
  font-weight: bold;
  color: #1e2027;
  display: flex;
`
const Card3 = styled.div`
  display: flex;
  width: 290px;
  height: 165px;
  margin-top: 40px;
  flex-direction: column;

`
const Card2 = styled.div`
  width: 200px;
  height: 200px;
  margin-top: 40px;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 110px;
  display: flex;
`
const Card1 = styled.div`
  display: flex;
  width: 250px;
  height: 165px;
  margin-top: 40px;
  flex-direction: column;
  justify-content: space-between;
`

const Down = styled.div`
  width: 100%;
  display: flex;
`

const Up = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
`

const Container = styled.div`
    position: absolute;
 	width: 75%;
 	height: 390px;
 	background-color: white;
  padding-top: 35px;
  padding-left: 55px;
  border-radius: 10px;
    top: 15%;
 	left: 14%;
 	right: 60%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  z-index: 11;
  transition: all 350ms;
`