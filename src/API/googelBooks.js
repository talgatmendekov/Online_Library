import { API_KEY } from '../utils/constants/general'

export const getBook = (query) => {
   return fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`
   )

   // .then((response) => {
   //    if (!response.ok) {
   //       throw new Error("Ooops! Couldn't fetch the data")
   //    }
   //    return response.json()
   // })
}

export const addBookRequest = (bookShelfId, data) => {
   return fetch(
      `https://www.googleapis.com/books/v1/mylibrary/bookshelves/${bookShelfId}/addVolume?volumeId=${data.id}&key=${API_KEY}`,
      {
         headers: {
            'Content-Type': 'application/json',
         },
         method: 'POST',
         body: JSON.stringify(data),
      }
   )
}
