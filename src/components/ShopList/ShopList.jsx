import { useEffect, useState } from 'react'
import { shopApi } from '../../utilities/api'
import ShopItems from '../ShopItems/ShopItems'

const ShopList = () => {
  const [products, setProducts] = useState([])
  console.log(shopApi)

  useEffect(() => {
    fetch(`${shopApi}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('error fetch')
        }
        return response.json()
      })
      .then(response => setProducts(response))
      .catch(error => console.log(error.message))
    return
  }, [])

  return (
    <>
      <h2>Hier shop</h2>
      <section className="product_section">
        {products.map(product => (
          <ShopItems key={product.id} product={product} />
        ))}
      </section>
    </>
  )
}

export default ShopList
