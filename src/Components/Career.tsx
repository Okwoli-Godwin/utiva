import React from 'react'
import styled from 'styled-components'
import img from "./Assets/man1.png"
import img2 from "./Assets/green.png"
import img3 from "./Assets/product.png"
import img4 from "./Assets/business.png"
import img5 from "./Assets/lap.png"
import img6 from "./Assets/cloud.png"
import img7 from "./Assets/market.png"
import img8 from "./Assets/blockchain.png"
import {AiOutlineArrowRight} from "react-icons/ai"

const Career = () => {
  return (
    <Container>
        <Text>Newbie? Kickstart<br />your career in tech</Text>
        <P>Discover the right Virtual Experience Program for you</P>
        <Wrapper>
            <Box>
                <Up>
                    <Img src={img} />
                    
                </Up>
                <Down>
                    <Data>I am interested in<br /><span>Data</span> and <span>numbers</span></Data>
                    <View>View Courses 
                    <Icon>
                        <AiOutlineArrowRight />
                    </Icon>
                </View>
                </Down>
            </Box>
            <Box>
                <Up>
                    <Img src={img2} />
                </Up>
                <Down2>
                    <Data>I am interested in<br /><span>Design</span> and <span>Creatives</span></Data>
                    <View>View Courses 
                    <Icon>
                        <AiOutlineArrowRight />
                    </Icon>
                </View>
                    <New>Coming Soon</New>
                </Down2>
            </Box>
            <Box>
                <Up>
                    <Img src={img3} />
                </Up>
                <Down3>
                    <Data>I am interested in<br /><span>Products</span></Data>
                    <View>View Courses 
                    <Icon>
                        <AiOutlineArrowRight />
                    </Icon>
                </View>
                </Down3>
            </Box>
            <Box2>
                <Up>
                    <Img src={img4} />
                </Up>
                <Down4>
                    <Data>I am interested in<br /><span>Business Analysis</span></Data>
                    <View>View Courses 
                    <Icon>
                        <AiOutlineArrowRight />
                    </Icon>
                </View>
                </Down4>
            </Box2>
            <Box2>
                <Up>
                    <Img src={img5} />
                </Up>
                <Down5>
                    <Data>I am interested in<br /><span>Programming</span></Data>
                    <View>View Courses 
                    <Icon>
                        <AiOutlineArrowRight />
                    </Icon>
                </View>
                <New>Coming Soon</New>
                </Down5>
            </Box2>
            <Box2>
                <Up>
                    <Img src={img6} />
                </Up>
                <Down6>
                    <Data>I am interested in<br /><span>Cloud Development</span></Data>
                    <View>View Courses 
                    <Icon>
                        <AiOutlineArrowRight />
                    </Icon>
                </View>
                </Down6>
            </Box2>
        </Wrapper>
    </Container>
  )
}

export default Career
const New = styled.div`
    width: 240px;
    height: 30px;
    background-color: #FBAF1B;
    cursor: pointer;
    position: absolute;
    align-items: center;
    display: flex;
    padding-right: 20px;
    justify-content: flex-end;
    border-radius: 50px;
    bottom: 400px;
    right: 290px;
`
const Icon = styled.div`
    margin-left: 25px;
    margin-top: 5px;
`
const View = styled.div`
    line-height: 1.75rem;
    font-size: 1.125rem;
    display: flex;
    margin-top: 20px;
`
const Data = styled.div`
    font-size: 1.5rem;
    line-height: 2rem;
    span{
        font-weight: bolder;
        font-size: 1.5rem;
        line-height: 2rem;
    }
`
const Down = styled.div`
    width: 100%;
    height: 50%;
    background-color: #050794;
    display: flex;
    padding-top: 40px;
    padding-left: 40px;
    color: white;
    flex-direction: column;
    position: relative;
`
const Down2 = styled.div`
    width: 100%;
    height: 50%;
    background-color: #0C8F54;
    display: flex;
    padding-top: 40px;
    padding-left: 40px;
    color: white;
    flex-direction: column;
    position: relative;
`
const Down3 = styled.div`
    width: 100%;
    height: 50%;
    background-color: #7C01A7;
    display: flex;
    padding-top: 40px;
    padding-left: 40px;
    color: white;
    flex-direction: column;
`
const Down4 = styled.div`
    width: 100%;
    height: 50%;
    background-color: #A78700;
    display: flex;
    padding-top: 40px;
    padding-left: 40px;
    color: white;
    flex-direction: column;
`
const Down5 = styled.div`
    width: 100%;
    height: 50%;
    background-color: #A74F46;
    display: flex;
    padding-top: 40px;
    padding-left: 40px;
    color: white;
    flex-direction: column;
    position: relative;
`
const Down6 = styled.div`
    width: 100%;
    height: 50%;
    background-color: #0E8F8F;
    display: flex;
    padding-top: 40px;
    padding-left: 40px;
    color: white;
    flex-direction: column;
`
const Down7 = styled.div`
    width: 100%;
    height: 50%;
    background-color: #10A662;
    display: flex;
    padding-top: 40px;
    padding-left: 40px;
    color: white;
    flex-direction: column;
`
const Down8 = styled.div`
    width: 100%;
    height: 50%;
    background-color: #000269;
    display: flex;
    padding-top: 40px;
    padding-left: 40px;
    color: white;
    flex-direction: column;
    
`
const Img = styled.img`
    transition: all 350ms;
    object-fit: cover;
    cursor: pointer;
    :hover{
        display: block;
        transform: scale(1.1);
        background-image: linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.9));
        z-index: 1;
        filter: grayscale(3);
    }
`
const Up = styled.div`
    width: 100%;
    height: 50%;
    overflow: hidden;
    :hover{
        
    }
`
const Box = styled.div`
    width: 390px;
    height: 420px;
    overflow: hidden;
    border-radius: 10px;
    margin: 5px;
`
const Box2 = styled.div`
    width: 390px;
    height: 420px;
    overflow: hidden;
    border-radius: 10px;
    margin-top: 40px;
`
const Box3 = styled.div`
    width: 390px;
    height: 420px;
    overflow: hidden;
    border-radius: 10px;
    margin-top: 40px;
`
const Box4 = styled.div`
    width: 390px;
    height: 420px;
    overflow: hidden;
    border-radius: 10px;
    margin-top: 40px;
    visibility: hidden;
`
const P = styled.div`
    font-size: 1.125rem;
    width: 100%;
    line-height: 1.75rem;
    text-align: center;
    color: #000000;
    margin-top: -8px;
`
const Text = styled.h2`
    font-weight: 600;
    text-align: center;
    line-height: 1.25;
    font-size: 3rem;
    color: #050794;
`
const Wrapper = styled.div`
    width: 91%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 80px;
    justify-content: space-between;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 140px;
    padding-bottom: 90px;
`