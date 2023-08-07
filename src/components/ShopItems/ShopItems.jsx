import { useEffect, useState } from 'react'
import { shopApi } from '../../utilities/api'
import ShopList from '../ShopList/ShopList'
import { Link } from 'react-router-dom'

const ShopItems = ({ product }) => {
  return (
    <article>
      <div className="product_frame">
        <img src={product.image} alt={product.title} />
        <Link to={`/shop/${product.id}`}>Show more</Link>
        <h3>{product.title}</h3>
        <p>{product.price}</p>
      </div>
    </article>
  )
}

export default ShopItems
