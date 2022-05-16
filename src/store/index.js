import { applyMiddleware, configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from '@redux-devtools/extension'
import thunk from 'redux-thunk'
import reducerSlice from './reducerSlice'

const store = configureStore(
   {
      reducer: { library: reducerSlice.reducer },
   },
   composeWithDevTools(applyMiddleware(thunk))
)

export default store
