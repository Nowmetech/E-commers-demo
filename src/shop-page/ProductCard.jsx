import React from 'react'
import { Link } from 'react-router-dom'
import Rating from '../components/Rating'

function ProductCard({GridList, Product}) {
    // console.log(Product)

  return (
    <div className={`shop-product-wrap row justify-content-center ${GridList ? "grid" : "list" }`}>
      {
        Product.map((item, index)=>(
          <div key={index} className='col-lg-4 col-md-6 col-12'>
            <div className='product-item'>
              <div className='product-thumb'>
                <div className='pro-thumb'>
                  <img src={item.img} alt="" />
                </div>
                {/* product link */}
                <div className='product-action-link'>
                  <Link to={`/shop/${item.id}`}><i className='icofont-eye'></i></Link>
                  <a href="#">
                    <i className='icofont-heart'></i>                    
                  </a>
                  <Link to='/cart-page'><i className='icofont-cart-alt'></i></Link>
                  
                </div>
              </div>
              {/* product content */}
              <div className='product-content'>
              <h5>
                <Link to={`/shop/${item.id}`}>{item.name}</Link>              
              </h5>
              <p className='productRating'>
                <Rating/>
              </p>
              <h6>${item.price}</h6>
              </div>
            </div>
           {/* product list item */}
           <div className='product-list-item'>
              <div className='product-thumb'>
                <div className='pro-thumb'>
                  <img src={item.img} alt="" />
                </div>
                {/* product link */}
                <div className='product-action-link'>
                  <Link to={`/shop${item.id}`}><i className='icofont-eye'></i></Link>
                  <a href="#">
                    <i className='icofont-heart'></i>                    
                  </a>
                  <Link to='/cart-page'><i className='icofont-cart-alt'></i></Link>
                  
                </div>
              </div>
              {/* product content */}
              <div className='product-content'>
              <h5>
                <Link to={`/shop/${item.id}`}>{item.name}</Link>              
              </h5>
              <p className='productRating'>
                <Rating/>
              </p>
              <h6>${item.price}</h6>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default ProductCard