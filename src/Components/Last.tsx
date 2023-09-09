import React from 'react'
import styled from 'styled-components'
import img from "./Assets/map1.png"
import img2 from "./Assets/lap.svg"
import img3 from "./Assets/prof.svg"
import img4 from "./Assets/brief.svg"
import img5 from "./Assets/net.svg"
import image5 from "./Assets/1.png"
import image6 from "./Assets/2.png"
import image7 from "./Assets/3.png"
import image8 from "./Assets/lady.png"
import image9 from "./Assets/ma.png"
import image10 from "./Assets/pro.svg"
import image11 from "./Assets/nev.svg"
import image12 from "./Assets/love.svg"
import {FiArrowUpRight} from "react-icons/fi"
import {AiOutlineArrowRight} from "react-icons/ai"

const Last = () => {
  return (
    <Container>
        <Wrapper>
            <First>
                <Left1>
                    <Text>How you will <span>Learn</span></Text>
                    <P>Premium skills learning across the entire digital product lifecycle: data, <br />
                     design, development, marketing, and product management.</P>
                </Left1>
                <Right1>
                    <Img src={img} />
                </Right1>
            </First>
            <Second>
                <Lap>
                    <Lab src={img2} />
                    <Lec>Lectures & Lab</Lec>
                    <Wee>
                    <ul>
                        <li>Weekend classes</li>
                        <li>Intensive training</li>
                        <li>Focus on real business cases</li>
                    </ul>
                </Wee>
                </Lap>
                <Lap>
                    <Lab src={img3} />
                    <Lec>Projects and Coaching</Lec>
                    <Wee>
                    <ul>
                        <li>Work on multiple projects</li>
                        <li>Get real time feedback</li>
                        <li>Real time mentoring</li>
                    </ul>
                </Wee>
                </Lap>
                <Lap>
                    <Lab src={img4} />
                    <Lec>Community Learning</Lec>
                    <Wee>
                    <ul>
                        <li>Join the Utiva community</li>
                        <li>Join free courses</li>
                        <li>Build your portfolio faster</li>
                    </ul>
                </Wee>
                </Lap>
                <Lap>
                    <Lab src={img5} />
                    <Lec>Job & Career Coaching</Lec>
                    <Wee>
                    <ul>
                        <li>Learn to leverage LinkedIn</li>
                        <li>CV for tech industry</li>
                        <li>Access to job opportunities</li>
                        <li>Demo sessions on interviews</li>
                    </ul>
                </Wee>
                </Lap>
            </Second>
            <Third>
                <Hi>
                    <Acce><span>Accelerate Your</span> <br />
                 <span>Growth.</span> Think it, <br /> become it with Utiva</Acce>
                </Hi>
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
            </Third>
            <Fourth>
                <Wrap>
                    <Cardt>
                    <K>30K+</K>
                    <S>Students Trained</S>
                </Cardt>
                <Cardt>
                    <L src={image8} />
                </Cardt>
                <Cardt2>
                    <K>85%</K>
                    <S1>Hiring rate of Utiva <br /> Learners</S1>
                </Cardt2>
                <Cardt>
                    <L src={image9} />
                </Cardt>
                </Wrap>
                <Plat>We are a platform that helps you learn tech skills and turn projects into hiring visibility.</Plat>
                <Get>Get Started
                    <I><AiOutlineArrowRight /></I>
                </Get>
                <Final>
                    <Pr src={image10} />
                </Final>
            </Fourth>
        </Wrapper>
    </Container>
  )
}

export default Last
const Pr = styled.img`
height: 35px;
margin-top: 40px;
`
const Final = styled.div`
    width: 200px;
    display: flex;
    align-items: center;
`
const I = styled.div`
    margin-top: 7px;
    margin-left: 10px;
`
const Get = styled.div`
    font-size: 1.125rem;
    line-height: 1.75rem;
    color: #fbaf16;
    padding-right: 0.75rem;
    align-items: center;
    display: flex;
    margin-top: 20px;
`
const Plat = styled.div`
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 300;
    color: #A8A9CC;
    margin-top: 25px;
`
const Wrap = styled.div`
   width: 100%;
   display: flex;
`
const L = styled.img`
    
`
const S = styled.div`
    padding-top: 0.5rem;
    margin-top: 10px;
    margin-left: -17px;
`
const S1 = styled.div`
    padding-top: 0.5rem;
    margin-top: 10px;
    margin-left: 8px;
    line-height: 27px;
`
const K = styled.div`
    font-size: 3.75rem;
    line-height: 1;
    font-weight: 600;
    color: 1e2027;
`
const Cardt = styled.div`
    width: 25%;
    height: 330px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`
const Cardt2 = styled.div`
    width: 25%;
    height: 330px;
    background-color: #05CE73;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`
const Fourth = styled.div`
    width: 100%;
    display: flex;
    margin-top: 80px;
    flex-direction: column;
`
const Dowm = styled.h6`
    margin: 0px;
    color: #747476;
    font-size: 12px;
    margin-right: 5px;
`

const Icons = styled.div`
    color: white;
    font-size: 20px;
    margin-top: -5px;
`

const Up = styled.h5`
    color: white;
    display: flex;
    font-size: 14px;
    margin: 0px;
    
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
const TextHold2 = styled.div`
    width: 154px;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
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
    margin-top: 350px;
    :hover{
        margin-left: -3px;
        transition: 350ms;
    }
`
const Hi = styled.div`
    width: 700px;
`
const Acce =styled.div`
    background: linear-gradient(94.63deg,#87ced9 10.17%,#fbaf1b 47.09%,#10a662 83.25%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 1.25;
    font-size: 3.75rem;
    font-weight: 600;
    margin-top: 180px;
    
    span{
        background: white;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`
const Third = styled.div`
    width: 100%;
    display: flex;
`
const Wee = styled.div`
    font-size: 1rem;
    line-height: 1.5rem;
    color: #F3F3F8;
    line-height: 30px;
    font-weight: 500;
    margin-left: -23px;
    margin-top: -10px;
`
const Lec = styled.div`
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
    font-size: 1.25rem;
    line-height: 1.75rem;
    color: white;
    font-weight: 600;
`
const Lab = styled.img`
    height: 50px;
    margin-left: -170px;
`
const Lap = styled.div`
    width: 270px;
    display: flex;
    flex-direction: column;
    
`
const Second = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`
const P = styled.div`
    font-size: 1.125rem;
    line-height: 1.75rem;
    margin-top: 1.5rem;
    color: #E8E8F1;
`
const Text = styled.div`
    line-height: 1.25;
    font-size: 3rem;
    font-weight: 600;
    color: white;
    span{
        color: #fbaf1b;
        line-height: 1.25;
        font-size: 3rem;
        font-weight: 600;
    }
`
const Img = styled.img`
    height: 350px;
    margin-left: -35px;
`
const Right1 = styled.div`
    width: 50%;
`

const Left1 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: -180px;
`

const First = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
    width: 91%;
    display: flex;
    flex-direction: column;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #000269;
    padding-top: 70px;
    justify-content: center;
    align-items: center;
    padding-bottom: 110px;
`