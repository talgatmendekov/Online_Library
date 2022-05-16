import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Filter } from '../components/Filter'
import { Result } from '../components/UI/ResultContainer'
import { CardList } from '../components/CardList'
import { Button } from '../components/UI/Button'
import { useFetch } from '../hooks/useFetch'
import Loader from '../components/UI/Spinner'
import { reducerActions } from '../store/reducerSlice'
import { API_KEY } from '../utils/constants/general'
import { getBooks } from '../store/reducerActions'

export const Home = () => {
   const dispatch = useDispatch()
   const { data, search, books, startId, sorting, numResults, filteredData } =
      useSelector((state) => state.library)
   const { loading, error } = useFetch(
      `https://www.googleapis.com/books/v1/volumes?q=${search}&orderBy=${sorting}&key=${API_KEY}&maxResults=30&startIndex=${startId}`
   )

   useEffect(() => {
      dispatch(getBooks(sorting))
   }, [dispatch, search, sorting])

   return (
      <div>
         <Filter />
         {error && <div>{error}</div>}
         {data && (
            <>
               <Result>{numResults} results</Result>
               <CardList data={filteredData || books} />
               <div>
                  {numResults > 30 && books.length < data.totalItems && (
                     <Button
                        type="button"
                        onClick={() => dispatch(reducerActions.loadBooks())}
                     >
                        Load more
                     </Button>
                  )}
               </div>
            </>
         )}
         {loading && <Loader />}
      </div>
   )
}
