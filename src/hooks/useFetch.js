import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { reducerActions } from '../store/reducerSlice'

export const useFetch = (url) => {
   const dispatch = useDispatch()

   const [error, setError] = useState(null)
   const [isLoading, setIsLoading] = useState(true)

   useEffect(() => {
      setIsLoading(true)
      fetch(url)
         .then((response) => {
            if (!response.ok) {
               throw new Error("Ooops! Couldn't fetch the data")
            }
            return response.json()
         })
         .then((data) => {
            dispatch(reducerActions.fetchBooks(data))
            setIsLoading(false)
            setError(null)
         })
         .catch((error) => {
            setError(error.message)
            setIsLoading(false)
         })
   }, [url])
   return { isLoading, error }
}
