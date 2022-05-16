import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

export const Card = (props) => {
   const { id, img, title, authors, category } = props

   return (
      <Link className="card card--link" to={`/Book${id}`} data-id={id}>
         <img
            className="card-img-top card_img"
            src={img}
            alt={title}
            title={title}
         />
         <div className="card_body">
            <h5 className="card_title">{title}</h5>
            <h6 className="card_subtitle">{category?.slice(0, 1)}</h6>
            <p className="card_text">{authors?.join(', ')}</p>
         </div>
      </Link>
   )
}
