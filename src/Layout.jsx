import React from 'react'
import { Outlet } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import { Header } from './components/Header'

export const Layout = () => {
   return (
      <Container>
         <Header />
         <Outlet />
      </Container>
   )
}
