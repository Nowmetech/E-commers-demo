import React from 'react'
import Data from "../products.json"
function ProductCategory({filterItem, setItem, menuItem, setCategory, category}) {
  return (
   <>
    <div className='widget-header'>
       <h5 className='ms-2'>All Categories</h5>
      </div>
      <div>
        <button className={`m-2 ${category === 'All' ? 'bg-warning' : ""}`} onClick={()=>setItem(Data)}>All</button>
        
        {menuItem.map((item, index) => {
          return (
          <button key={index} className={`m-2 ${category === item ? 'bg-warning' : ""}`} onClick={()=>filterItem(item)}>{item}</button>
          );
        })}
      </div>
   
   </>
  )
}

export default ProductCategory