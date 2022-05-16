import { createSlice } from '@reduxjs/toolkit'

const initState = {
   data: {},
   search: 'react',
   sorting: 'relevance',
   startId: 0,
   filteredData: null,
   category: 'all',
   numResults: 0,
   books: [],
}

const reducerSlice = createSlice({
   name: 'reducer',
   initialState: initState,
   reducers: {
      fetchBooks: (state, action) => {
         state.data = action.payload
         state.books = [...state.books, ...action.payload.items]
         state.numResults = action.payload.totalItems
      },
      searchBooks: (state, action) => {
         state.search = action.payload
         state.books = []
         state.category = 'all'
         state.startId = 0
         state.filteredData = null
      },
      sortBooks: (state, action) => {
         state.sorting = action.payload
         state.books = []
         state.category = 'all'
         state.startId = 0
         state.filteredData = null
      },
      loadBooks: (state) => {
         state.startId += 30
      },
      filterBooks: (state, action) => {
         if (action.payload === 'all') {
            state.filteredData = 0
            state.category = 'all'
            state.numResults = state.data.totalItems
         }

         const filteredBooks = state.books.filter((book) => {
            return book.volumeInfo.categories
               ?.map((i) => i.toLowerCase())
               .includes(action.payload)
         })
         state.filteredData = filteredBooks
         state.category = action.payload
         state.numResults = filteredBooks.length
      },
      addBook: () => {},
   },
})

export const reducerActions = reducerSlice.actions
export default reducerSlice
