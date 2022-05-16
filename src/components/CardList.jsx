import React from 'react'
import styled from 'styled-components'
import { Card } from './UI/Card'

export const CardList = (props) => {
   const cards = props.data?.map((book) => (
      <Card
         key={book.etag}
         id={book.id}
         img={
            book.volumeInfo.imageLinks?.thumbnail ||
            'https://via.placeholder.com/180x250/566273/FFFFFF?text=no%20image'
         }
         title={book.volumeInfo.title}
         authors={book.volumeInfo.authors}
         category={book.volumeInfo.categories}
      />
   ))
   return <CardContainer>{cards}</CardContainer>
}

const CardContainer = styled.div`
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
   gap: 2rem;
   margin-bottom: 1rem;
`
