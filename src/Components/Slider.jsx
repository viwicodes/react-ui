import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import styled from 'styled-components'

import one from './images/1.png'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`

const Arrow = styled.div`
    width: 50px;
    cursor: pointer;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    opacity: 0.5;
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props => props.ind * -100}vw);
`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg};
`
const ImageContainer = styled.div`
    flex: 1;
    padding: 50px;
`

const Image = styled.img`
    height: 10%;
    width: 50%;
`

const InfoContainer = styled.div`
    flex: 1;
`

const Title = styled.h1`
   font-size : 70px ;
`

const Description = styled.p`
   margin : 50px 0px;
   font-size: 20px;
   font-weight: 500;
   letter-spacing: 3px;
`

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

const Slider = () => {
    const [slidein, setSlidein] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlidein(slidein > 0 ? slidein - 1 : 2)
        }
        else {
            setSlidein(slidein < 2 ? slidein + 1 : 0)
        }
    }
    return (
        <div>
            <Container>
                <Arrow direction="left" onClick={() => handleClick("left")}>
                    <ArrowLeftOutlined />
                </Arrow>
                <Wrapper ind={slidein}>
                    <Slide bg="fsfafd">
                        <ImageContainer>
                            <Image src={one} />
                        </ImageContainer>
                        <InfoContainer>
                            <Title>SUMMER SALE</Title>
                            <Description>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Description>
                            <Button>SHOW NOW</Button>
                        </InfoContainer>
                    </Slide>
                    <Slide bg="fcf1ed">
                        <ImageContainer>
                            <Image src={one} />
                        </ImageContainer>
                        <InfoContainer>
                            <Title>WINTER SALE</Title>
                            <Description>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Description>
                            <Button>SHOW NOW</Button>
                        </InfoContainer>
                    </Slide>
                    <Slide bg="fbf0f4">
                        <ImageContainer>
                            <Image src={one} />
                        </ImageContainer>
                        <InfoContainer>
                            <Title>POPULAR SALE</Title>
                            <Description>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Description>
                            <Button>SHOW NOW</Button>
                        </InfoContainer>
                    </Slide>
                </Wrapper>
                <Arrow direction="right" onClick={() => handleClick("right")}>
                    <ArrowRightOutlined />
                </Arrow>
            </Container>
        </div>
    )
}

export default Slider