import {createBrowserRouter,RouterProvider} from 'react-router'
import ROUTES from '../src/Routes/routes'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const routes = createBrowserRouter(ROUTES)

function App() {
  

  return (
    <>
     <RouterProvider router={routes}/>
    </>
  )
}

export default App
