import { useEffect, useState } from 'react'
import { shopApi } from '../../utilities/api'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const [shopDetails, setShopDetails] = useState([])

  const productId = useParams().id

  useEffect(() => {
    fetch(`${shopApi}/${productId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('error fetch')
        }
        return response.json()
      })
      .then(response => setShopDetails(response))
      .catch(error => console.log(error.message))
    return
  }, [])

  return (
    <section>
      <img src={shopDetails.image} alt="" />
      <h2>{shopDetails.title}</h2>
    </section>
  )
}

export default ProductDetails
