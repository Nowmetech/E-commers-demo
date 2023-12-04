
import React, { useState } from 'react'
import ProductData from "../products.json"
import { Link } from 'react-router-dom';
import SelectedCategoory from '../components/SelectedCategoory';
const title = <h2>Search Your One from<span>Thousand</span> of Product</h2>
const desc = "We have the largest collectin of products"
const bannerList = [
    {
    iconName: "icofont-users-alt-4",
    text: "1.5 Million Customers",
    },
    {
    iconName: "icofont-notification",
    text: "More then 2000 Marchent",
    },
    {
    iconName: "icofont-globe",
    text: "Buy Anything Online",
    },
];
function Banner() {
    const [searchInput, setSearchInput] = useState("")
    const [filteredinput, setFilteredInput] = useState(ProductData)
//  console.log(ProductsData)
const HandelSearch = (e) => {
    // taking the value from input field
    const searchTerm = e.target.value
  setSearchInput(searchTerm)
// filter the value here 
const filterList = ProductData.filter((item)=> item.name.toLocaleLowerCase() .includes(searchTerm.toLocaleLowerCase()))
setFilteredInput(filterList)

}
console.log(searchInput)

  return (
    <div className='banner-section style-4'>
        <div className='container'>
            <div className='banner-content'>
            {title} 
           <form>
            <SelectedCategoory select={"all"}/>
            <input type='text' name='search' id='search' value={searchInput} placeholder='search your products' onChange={HandelSearch}/>
            <button type='submit'><i className="icofont-search"></i></button>
           </form>
           <p>{desc}</p>
           <ul className='lab-ul'>
            {searchInput && filteredinput.map((item, index)=>
            <li key={index}><Link to={'/shop/${item.id}'}>{item.name}</Link></li>
            )}
           </ul>
            </div>
            
        </div>
    </div>
  )
}

export default Banner