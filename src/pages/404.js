import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/UI/Button'
import './404.css'

export default function NoPageFound() {
   const navigate = useNavigate()

   useEffect(() => {
      document.title = 'Page not found'
   })

   return (
      <div className="nopage">
         <div className="nopage_frame">
            <div className="nopage_book">
               <div className="nopage_title">
                  <h4 className="nopage_title--big">Page not found</h4>
                  <p className="nopage_title--small">404</p>
               </div>
            </div>
            <Button type="button" onClick={() => navigate('/')}>
               Open Home Page
            </Button>
         </div>
      </div>
   )
}
