import React, {useState} from 'react'
import styled from 'styled-components'
import GlobalButton from './Components/GlobalButton'
import {AiOutlineArrowRight} from "react-icons/ai"
import {FiArrowUpRight} from "react-icons/fi"
import img from "./Components/Assets/map.svg"
import image from "./Components/Assets/human1.png"
import image2 from "./Components/Assets/human2.png"
import image3 from "./Components/Assets/human3.png"
import image4 from "./Components/Assets/human4.png"
import image5 from "./Components/Assets/1.png"
import image6 from "./Components/Assets/2.png"
import image7 from "./Components/Assets/3.png"


const Body = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [Hovering, setHovering] = useState(false);
    const [HoveringIn, setHoveringIn] = useState(false);
    const [MyHoveringIn, setMyHoveringIn] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const MouseOver = () => {
    setHovering(true);
  };

  const MouseOut = () => {
    setHovering(false);
  };
  const MouseOverIn = () => {
    setHoveringIn(true);
  };

  const MouseOutIn = () => {
    setHoveringIn(false);
  };
  const MyMouseOverIn = () => {
    setMyHoveringIn(true);
  };

  const MyMouseOutIn = () => {
    setMyHoveringIn(false);
  };

  
  return (
    <Container>
        <Left>
            <Bold>
                Building Top<br />Tech Talents<br />for the World
            </Bold>
            <P>One Single Platform That Helps You Learn Tech and Helps<br />Companies Hire you Fast - 100X Better</P>
            <ButtonHold>
                <Button>Individual
                    <Icon><AiOutlineArrowRight /></Icon>
                </Button>
                <Button>Business
                    <Icon><AiOutlineArrowRight /></Icon>
                </Button>
                <Button>Impact
                    <Icon><AiOutlineArrowRight /></Icon>
                </Button>
            </ButtonHold>
        </Left>
        <Right>
            <Logo src={img}/>
            <Card1 src={image} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/>
            <Card2 src={image2} onMouseOver={MouseOver} onMouseOut={MouseOut}/>
            <Card3 src={image3} onMouseOver={MouseOverIn} onMouseOut={MouseOutIn}/>
            <Card4 src={image4} onMouseOver={MyMouseOverIn} onMouseOut={MyMouseOutIn}/>
            {isHovering && (<TextHold>
                <Text>Read Mayowa's story</Text>
            </TextHold>)}
            {Hovering && (<TextHold3>
                <Text>Read Fola's story</Text>
            </TextHold3>)}
            {HoveringIn && (<TextHold4>
                <Text>Read Ferammi's story</Text>
            </TextHold4>)}
            {MyHoveringIn && (<TextHold5>
                <Text>Read Temmy's story</Text>
            </TextHold5>)}
            <Box>
                <ImageHold>
                    <Card5 src={image5} />
                    <Card6 src={image6} />
                    <Card7 src={image7} />
                </ImageHold>
                <TextHold2>
                    <Up>Read Testimonials
                        <Icons>
                            <FiArrowUpRight />
                        </Icons>
                    </Up>
                    <Dowm>Over 20 amazing stories</Dowm>
                </TextHold2>
            </Box>
        </Right>
    </Container>
  )
}

export default Body

const Dowm = styled.h6`
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

const Up = styled.h5`
    color: #050794;
    display: flex;
    font-size: 14px;
    margin: 0px;
    
`

const TextHold2 = styled.div`
    width: 154px;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
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
    width: 200px;
    align-items: center;
    display: flex;
    justify-content: flex-end;
`

const Box = styled.div`
    width: 680px;
    height: 40px;
    display: flex;
    margin-top: 40px;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;
    :hover{
        margin-left: -3px;
        transition: 350ms;
    }
`

const TextHold = styled.div`
    width: 143px;
    height: 30px;
    border-radius: 50px;
    border: 2px solid #B3F4C7;
    background-color: #E3FDE8;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 238px;
    left: 5px;
    cursor: pointer;
    transition: all ease-in 350ms;
`
const TextHold3 = styled.div`
    width: 143px;
    height: 30px;
    border-radius: 50px;
    border: 2px solid #B3F4C7;
    background-color: #E3FDE8;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 272px;
    left: 212px;
    cursor: pointer;
    transition: all ease-in 350ms;
`
const TextHold4 = styled.div`
    width: 143px;
    height: 30px;
    border-radius: 50px;
    border: 2px solid #B3F4C7;
    background-color: #E3FDE8;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 253px;
    left: 370px;
    cursor: pointer;
    transition: all ease-in 350ms;
`
const TextHold5 = styled.div`
    width: 143px;
    height: 30px;
    border-radius: 50px;
    border: 2px solid #B3F4C7;
    background-color: #E3FDE8;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 200px;
    left: 510px;
    cursor: pointer;
    transition: all ease-in 350ms;
`
const Text = styled.div`
    font-size: .6rem;
    color: #1e2027;
`

const Card1 = styled.img`
    width: 43px;
    height: 43px;
    border-radius: 50px;
    border: 3px solid #B3F4C7;
    position: absolute;
    top: 180px;
    left: 50px;
    object-fit: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    :hover{
        border: 5px solid #B3F4C7;
        transition: all ease-in 350ms;
        
    }
`
const Card2 = styled.img`
    width: 43px;
    height: 43px;
    border-radius: 50px;
    border: 3px solid #B3F4C7;
    position: absolute;
    top: 210px;
    left: 260px;
    object-fit: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    :hover{
        border: 5px solid #B3F4C7;
        transition: all ease-in 350ms;
        
    }
`
const Card3 = styled.img`
    width: 43px;
    height: 43px;
    border-radius: 50px;
    border: 3px solid #B3F4C7;
    position: absolute;
    top: 190px;
    left: 418px;
    object-fit: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    :hover{
        border: 5px solid #B3F4C7;
        transition: all ease-in 350ms;
        
    }
`
const Card4 = styled.img`
    width: 43px;
    height: 43px;
    border-radius: 50px;
    border: 3px solid #B3F4C7;
    position: absolute;
    top: 140px;
    left: 555px;
    object-fit: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    :hover{
        border: 5px solid #B3F4C7;
        transition: all ease-in 350ms;
        
    }
`

const Logo = styled.img`
    margin-top: 50px;
`

const Icon = styled.div`
    margin-left: 10px;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
`

const Button = styled.div`
    width: 150px;
    height: 55px;
    display: flex;
    background-color: #FAAE1A;
    border-radius: 7px;
    align-items: center;
    color: white;
    justify-content: center;
    box-shadow: 0px 48px 100px 10px #ffefc8;
    cursor: pointer;
    :hover{
        margin-top: -5px;
        transition: all 350ms;
    }
`
const ButtonHold = styled.div`
    display: flex;
    width: 470px;
    justify-content: space-between;
    margin-left: 60px;
    margin-top: 50px;
`

const P = styled.div`
    margin-left: 60px;
    line-height: 30px;
    color: #47494C;
    font-size: 18px;
    margin-top: -5px;
`

const Bold = styled.h1`
    color: #040693;
    margin-left: 60px;
    font-size: 70px;
`

const Left = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`
const Right = styled.div`
    position: relative;
    flex-direction: column;
    margin-top: 20px;
`

const Container  = styled.div`
    width: 100%;
    display: flex;
    /* margin-top: 40px; */
    background-color: #FDFDFB;
    padding-bottom: 130px;
`