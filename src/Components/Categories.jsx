import React from 'react'
import styled from 'styled-components'
import CategoryItem from './CategoryItem'
import { categories } from '../data'


const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-around;
`
const Catogories = () => {
    return (
        <div>
            <Container>
                {categories.map(item => (
                    <CategoryItem item={item} key={item.id}/>
                ))}
            </Container>
        </div>
    )
}

export default Catogories