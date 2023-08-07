import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './components/shared/Home/Home'
import ShopList from './components/ShopList/ShopList'
import Navbar from './components/shared/Navbar/Navbar'
import ProductDetails from './components/ProductDetails/ProductDetails'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ShopList />} />
        <Route path="/shop/:id" element={<ProductDetails />} />
      </Routes>
    </>
  )
}

export default App
