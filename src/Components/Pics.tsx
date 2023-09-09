import React from 'react'
import styled from 'styled-components'
import logo1 from "./Assets/man3.png"
import logo2 from "./Assets/man2.png"
import logo3 from "./Assets/man.png"

const Pics = () => {
  return (
    <Container>
        <Wrapper>
            <Box1>
                <Img src={logo1} />
            </Box1>
            <Box2>
                <Img src={logo2} />
            </Box2>
            <Box3>
                <Img src={logo3} />
            </Box3>
        </Wrapper>
    </Container>
  )
}

export default Pics
const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 13px;
`

const Box1 = styled.div`
`
const Box2 = styled.div`
`
const Box3 = styled.div`

`

const Wrapper = styled.div`
    width: 90%;
    height: 400px;
    display: grid;
    grid-template-columns:  3fr 2fr 4fr;
    grid-gap: 20px;
`

const Container = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
`