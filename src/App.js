import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from './Layout'
import { Home } from './pages/Home'
import { Book } from './pages/Book'
import NoPageFound from './pages/404'

function App() {
   return (
      <Routes>
         <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="book/:id " element={<Book />} />
         </Route>
         <Route path="*" element={<NoPageFound />} />
      </Routes>
   )
}

export default App
