import styled from 'styled-components'
import React from 'react'

const Container = styled.div`
    flex: 1;
    margin: 3px;
    width: 100%;
    height: 70vh;
    position: relative;
    /* cursor: pointer; */
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Info = styled.div`
    position : absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
`

const Title = styled.h1`
    font-weight: 600;
    letter-spacing: 1px;
`

const Button = styled.button`
    ${Info}:hover & {
        background-color: white;
        color: black;
        transition: all 0.5s ease;
    }
    border: none;
    padding: 10px;
    background-color: wheat;
    color: grey;
    cursor: pointer;
    font-weight: 600;
`


const CategoryItem = ({ item }) => {
    return (
        <div>
            <Container>
                <Image src={item.img} />
                <Info>
                    <Title>{item.title}</Title>
                    <Button>SHOP NOW</Button>
                </Info>
            </Container>
        </div>
    )
}

export default CategoryItem