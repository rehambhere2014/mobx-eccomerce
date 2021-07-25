import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { isTemplateTail } from 'typescript'
import { productProps } from '../../store/ProductsStore'
import { Footer, OverLay, Wrapper } from './product.style'
import { Link } from 'react-router-dom'
import { formatPrice } from '../../utils/FormatPrice'
const Product: React.FC<productProps> = ({ name, image, price, id }) => {
  console.log(price.toFixed(2))
  return (
    <article>
      <Wrapper>
        <img src={image} alt="img" style={{ width: "100%" }} />
        <div className="overlay">
          <Link to={`/products/${id}`} className='link'>
            <FaSearch />
          </Link>
        </div>
      </Wrapper>


      <Footer>
        <h5>{name}</h5>
        <p>{formatPrice(price)}$</p>
      </Footer>
    </article>
  )
}

export default Product