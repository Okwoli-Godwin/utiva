import React from 'react'
import styled from 'styled-components'
import img from "./Assets/slide1.svg"
import img2 from "./Assets/ga.png"
import {AiOutlineArrowRight} from "react-icons/ai"

const Slide = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Icon src={img} />
                <Business>For Business</Business>
                <P>Utiva offers companies the technology, contents, <br />
                and the best training approaches that help drive <br />
                workforce development</P>
                <G>Get Started
                    <Icons>
                        <AiOutlineArrowRight />
                    </Icons>
                </G>
            </Left>
            
            <Right>
                <Card src={img2}/>
                <Hold>
                    <Hol>
                        <Up>15k</Up>
                        <Down>Students <br /> Trained</Down>
                    </Hol>
                    <Hol>
                        <Up>90%</Up>
                        <Down>Apprenticeship</Down>
                    </Hol>
                    <Hol>
                        <Up>500+</Up>
                        <Down>Projects <br /> Completed</Down>
                    </Hol>
                </Hold>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Slide
const Down = styled.div`
    font-size: .9375rem;
    font-size: .9375rem;
    margin: 0;
    color: #E5F6EE;
`
const Hol = styled.div`
    width: 120px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center
`
const Up = styled.div`
    color: white;
    font-size: 2.25rem;
    line-height: 2.5rem;
    font-weight: 600;
`
const Hold = styled.div`
    width: 450px;
    height: 160px;
    justify-content: center;
    background-color: #10A662;
    position: absolute;
    border-radius: 10px;
    left: 295px;
    top: 270px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
const Card = styled.img`
    width: 400px;
    height: 410px;
    border-radius: 10px;
    object-fit: cover
`
const Icons = styled.div`
    margin-left: 10px;
    :hover{
        color: #3435A8;
    }
`

const G = styled.div`
    display: flex;
    color: #3435A8;
    margin-top: 50px;
    font-size: 18px;
    cursor: pointer;
    :hover{
        color: #FBAF1B;
    }
`

const P = styled.div`
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.75rem;
    color: #1e2027;
    margin-top: 30px;
`

const Business = styled.div`
    font-size: 1.875rem;
    line-height: 2.25rem;
    font-weight: 500;
    margin-top: 30px;
`

const Icon = styled.img`
    height: 70px;
    margin-left: -410px;
`

const Left = styled.div`
    width: 40%;
    flex-direction: column;
    display: flex;
`
const Right = styled.div`
    position: relative;
`

const Wrapper = styled.div`
    width: 91%;
    display: flex;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 140px;
    padding-bottom: 170px;
`