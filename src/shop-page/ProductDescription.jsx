import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const decs = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi iste minima corrupti non et in itaque quae animi sit recusandae"
function ProductDescription({product}) {
    // console.log(product);
    const {name,price,seller,ratingsCount,quantity,id ,img} = product

    const[preQuantity, setPreQuantity] = useState (quantity)
    const [coupon, setCoupon] = useState('')
    const [size, setSize] = useState("Select Size")
    const [color, setColor] = useState("Select Color")

    const HandleSizeChange = (e) => {
        setSize(e.target.value)
    
    }

    const HandleColorChange = (e) => {
        setColor(e.target.value)
    }
const HandleClickMinus = () =>{
    if(preQuantity > 1){
        setPreQuantity(preQuantity - 1)
    }

}
const HandleClickPlus = () =>{
    setPreQuantity(preQuantity + 1)
   

}


const HandleSubmit = (e) => {
    e.preventDefault();
    const products = {
        id: id,
        img: img,
        name: name,
        price: price,
        quantity: preQuantity,
        color: color,
        size: size,
        coupon: coupon      
        
    }
    const existingProducts = JSON.parse(localStorage.getItem("products")) || [];
    const existingItemIndex = existingProducts.findIndex(item => item.id === id );
    if(existingItemIndex === -1){
        existingProducts[existingItemIndex].quantity += preQuantity;

    }else{
        existingProducts.push(products);
    }
    
    localStorage.setItem("products", JSON.stringify(existingProducts));
    
    setColor("Select Color");
    setSize("Select Size");
    setCoupon("");
    setPreQuantity(1);
    console.log(existingProducts)
}


    
  return (
    <div>
        <div>
            <h4>{name}</h4>
            <p className='rating'>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <span>{ratingsCount} review</span>
            </p>
            <h4>${price}</h4>
            <h6>{seller}</h6>
            <p>{decs}</p>
        </div>
  {/* card component */}
    <div>
        <form  onSubmit={HandleSubmit} >
            <div className='select-product size' >
            <select value={size} onChange={HandleSizeChange}>
                <option > Select Size</option>
                <option value="SM">SM</option>
                <option value="MD">MD</option>
                <option value="LG">LG</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
            </select>
            <i className='icofont-rounded-down'></i>
            </div>
            <div className='select-product color' >
            <select value={color} onChange={HandleColorChange}>
                <option > Select Color</option>
                <option value="Pink">Pink</option>
                <option value="Red">Red</option>
                <option value="Black">Black</option>
                <option value="white">white</option>
                <option value="Blue">Blue</option>
            </select>
            <i className='icofont-rounded-down'></i>
            </div>
            <div className='cart-plus-minus'>
                <div className='dec qtybutton' onClick={HandleClickMinus}>-</div>
                <input type="text" className='cart-plus-minus-box' name='qtybutton' id='qtybutton' value={preQuantity } onChange={(e)=>setPreQuantity(parseInt(e.target.value,10))}/>
                <div className='inc qtybutton'onClick={HandleClickPlus}>+</div>
            </div>
            {/* coupon  */}
            <div className='discount-code mb-2'>
                <input type="text" placeholder='Enter your coupon code' value={coupon} onChange={(e)=>setCoupon(e.target.value)}/>
            </div>
            <button type='submit' className='lab-btn' ><span>Add to Cart</span></button>
            <Link to={'/cart-page'} className='lab-btn bg-primary'><span>Check out</span></Link>
        </form>
    </div>


    </div>
  )
}

export default ProductDescription