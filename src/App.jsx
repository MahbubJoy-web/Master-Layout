import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import Navber from './Components/Navber/Navber'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import Services from './Pages/Services'
import LayoutOne from './Layout/LayoutOne'
import LayoutTwo from './Layout/LayoutTwo'
import Help from './Pages/Help'
import LayoutThree from './Layout/LayoutThree'
import HeadPage from './Pages/HeadPage'
import Bike from './Pages/Bike'

function App() {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route >
        {/* =======layout 1 */}
      <Route path='/' element ={<LayoutOne/>} >
        <Route index element= {<Home />} />
        <Route path='/about' element= {<About />} />
        <Route path='/product' element= {<Product />} />
      </Route>
      {/* ===========layout 2 */}
      <Route path='/LayoutTwo' element={<LayoutTwo/>}  >
        <Route index element={<Services />} />
        <Route path='/LayoutTwo/help' element={<Help />}/>
      </Route>
      {/* ============Layout 3 */}
      <Route path='/LayoutThree' element={<LayoutThree />} >
        <Route index element={<HeadPage />} />
        <Route path='/LayoutThree/Bike' element={<Bike />} />
      </Route>
      </Route>
    )
  )
  return (
    <>
      {/* <Navber /> */}
      <RouterProvider router={myRoute} />
    </>
  )
}

export default App
