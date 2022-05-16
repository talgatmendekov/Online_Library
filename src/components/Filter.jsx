import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddBooks } from '../store/reducerActions'
import { reducerActions } from '../store/reducerSlice'
import './Filter.css'

export const Filter = () => {
   const { category, sorting } = useSelector((state) => state.library)

   const dispatch = useDispatch()

   const filterBooksHandler = (e) => {
      dispatch(reducerActions.filterBooks(e.target.value))
   }

   const sortBooksHandler = (e) => {
      dispatch(reducerActions.sortBooks(e.target.value))
   }

   const addBooksHandler = () => {
      dispatch(AddBooks(12, { id: '1' }))
   }
   return (
      <div className="filter">
         <div>
            <label htmlFor="category" className="form-label filter_label">
               Category
            </label>
            <select
               className="filter_select"
               id="category"
               value={category}
               onChange={filterBooksHandler}
            >
               <option value="all">all</option>
               <option value="art">art</option>
               <option value="biography">biography</option>
               <option value="computers">computers</option>
               <option value="history">history</option>
               <option value="medical">medical</option>
               <option value="poetry">poetry</option>
            </select>
         </div>

         <div>
            <label htmlFor="sort" className="form-label filter_label">
               Sort by
            </label>
            <select
               className="filter-select"
               aria-label="sort"
               id="sort"
               value={sorting}
               onChange={sortBooksHandler}
            >
               <option value="relevance">relevance</option>
               <option value="newest">newest</option>
            </select>
         </div>

         <button onClick={addBooksHandler}>add books</button>
      </div>
   )
}
