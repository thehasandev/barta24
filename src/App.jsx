import React from 'react'
import Container from './components/Container'
import Routes from './routes/Routes'
import { RouterProvider } from 'react-router-dom'
function App() {
  return (
 <RouterProvider router={Routes}/>
  )
}

export default App