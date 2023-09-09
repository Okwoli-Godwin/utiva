import React from 'react'
import styled from 'styled-components'
import img1 from "./Assets/bundle.png"
import img2 from "./Assets/move.png"
import img3 from "./Assets/flutter.png"
import img4 from "./Assets/paystack.png"
import img5 from "./Assets/mono.png"
import img6 from "./Assets/cowry.png"
import img7 from "./Assets/bamboo.png"
import img8 from "./Assets/nomba.png"
import img9 from "./Assets/team.png"
import img10 from "./Assets/prospa.png"
import img11 from "./Assets/pig.png"
import img12 from "./Assets/thrive.png"
import img13 from "./Assets/cred.png"
import img14 from "./Assets/auto.png"
import img15 from "./Assets/palm.png"
import img16 from "./Assets/kuda.png"
import img17 from "./Assets/opay.png"
import img18 from "./Assets/okra.png"

const Icons = () => {
  return (
    <Container>
        <Wrapper>
            <Text>Our Talents Work With Many of these Leading Tech Companies</Text>
            <Up>
                <Logo1 src={img1}/>
                <Logo2 src={img2} />
                <Logo3 src={img3} />
                <Logo4 src={img4} />
                <Logo5 src={img5} />
                <Logo6 src={img6} />
                <Logo7 src={img7} />
                <Logo8 src={img8} />
                <Logo9 src={img9} />
            </Up>
            <Down>
                <Logo10 src={img10} />
                <Logo11 src={img11} />
                <Logo12 src={img12} />
                <Logo13 src={img13} />
                <Logo14 src={img14} />
                <Logo15 src={img15} />
                <Logo16 src={img16} />
                <Logo17 src={img17} />
                <Logo18 src={img18} />
            </Down>
            <Last>
                <Box>
                    <Texts>NEW⚡</Texts>
                </Box>
                <Write>HP Inc to support Utiva's mission to empower African women. <span>Read more</span></Write>
            </Last>
        </Wrapper>
    </Container>
  )
}

export default Icons
const Logo17 = styled.img`
    height: 70px;
`
const Write = styled.div`
    font-size: .875rem;
    line-height: 1.25rem;
    color: #6768BE;
    margin-left: 15px;
    span{
        font-weight: 600;
        color: #050794;
        cursor: pointer;
    }
`
const Texts = styled.div`
    font-size: .75rem;
    line-height: 1rem;
    color: white;
`
const Box = styled.div`
    background: linear-gradient(90deg,#61db99,#08a05c 104.42%);
    border-radius: 20.541px;
    padding-left: 0.75rem;
    padding-right: 0.5rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
`
const Last = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 40px;
`
const Logo18 = styled.img`
    height: 60px;
`
const Logo16 = styled.img`
    height: 25px;
`
const Logo15 = styled.img`
    height: 30px;
`
const Logo14 = styled.img`
    height: 30px;
`
const Logo13 = styled.img`
    height: 25px;
`
const Logo12 = styled.img`
    height: 70px;
`
const Logo11 = styled.img`
    height: 40px;
`
const Logo10 = styled.img`
    height: 37px;
`
const Down = styled.div`
    width: 100%;
    display: flex;
    margin-top: 30px;
    align-items: center;
    justify-content: space-between;
`
const Logo9 = styled.img`
    height: 35px;
`
const Logo8 = styled.img`
    height: 33px;
`
const Logo7 = styled.img`
    height: 35px;
`
const Logo6 = styled.img`
    height: 22px;
`
const Logo5 = styled.img`
    height: 20px;
`

const Logo4 = styled.img`
    height: 20px;
`

const Logo3 = styled.img`
    height: 40px;
`

const Logo2 = styled.img`
    height: 58px;
`

const Text = styled.h4`
    color: #1e2027;
    font-weight: 500;
    font-size: 1.125rem;
`

const Logo1 = styled.img`
    height: 40px;
`

const Up = styled.div`
    width: 100%;
    display: flex;
    margin-top: 20px;
    align-items: center;
    justify-content: space-between;
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
    justify-content: center;
    align-items: center;
    margin-top: 70px;
`