import { addBookRequest, getBook } from '../API/googelBooks'
import { reducerActions } from './reducerSlice'

export const getBooks = (sorting) => async (dispatch) => {
   try {
      const res = await getBook(sorting)
      if (!res.ok) throw new Error("Ooops! Couldn't fetch the data")

      const data = await res.json()
      dispatch(reducerActions.fetchBooks(data))
   } catch (e) {
      throw new Error("Ooops! Couldn't fetch the data")
   }
}

export const AddBooks = (id, data) => async (dispatch) => {
   try {
      const res = await addBookRequest(id, data)
      if (!res.ok) throw new Error("Ooops! Couldn't fetch the data")

      dispatch(getBooks())
      return alert('added')
   } catch (e) {
      throw new Error("Ooops! Couldn't fetch the data")
   }
}
