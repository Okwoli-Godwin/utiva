import React from 'react'
import styled from 'styled-components'

const Business = () => {
  return (
    <Container>
        <Wrapper>
            <Text>Digital Transformation for <br /> Individuals and Businesses.</Text>
            <P>We are a Technology Workforce Development company that helps people <br />
             learn premium technology skills virtually and partners with companies to <br />
              hire the best talents and invest in workforce development. Currently with <br />
              learners from 19 countries.</P>
        </Wrapper>
    </Container>
  )
}

export default Business

const P = styled.div`
    line-height: 2rem;
    font-size: 1.125rem;
    margin-top: 35px;
    color: #474748;
`

const Text = styled.div`
    line-height: 1.25;
    font-size: 3rem;
    color: #1e2027;
    font-weight: bold;
`
const Wrapper = styled.div`
    width: 91%;
    display: flex;
    flex-direction: column;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    background-color: #FBFBFD;
    padding-top: 120px;
    padding-bottom: 120px;
    justify-content: center;
    align-items: center;
`