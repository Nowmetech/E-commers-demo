import React, { useState } from 'react'
import Data from '../products.json'
import PageHeader from '../components/PageHeader'
import ProductCard from './ProductCard'
import Pageination from './Pageination'
import Search from './Search'
import ProductCategory from './ProductCategory'
import PopularPost from './PopularPost'
import Tags from './Tags'





const title = "showing 01 - 12 of 139"
function Shop() {
  const [gridList, setGridList] = useState(true)
  const [products, setProducts] = useState(Data)
//  Pageination
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 12;
const ProductsLastPage = currentPage * productsPerPage;
const ProductsFirstPage = ProductsLastPage - productsPerPage;

const currentProducts = products.slice(ProductsFirstPage, ProductsLastPage);
const PageinationClick = (number) => {
  setCurrentPage(number)
}
// category 
  const [category, setCategory] = useState("All")
  const menuItem = [...new Set(Data.map((item)=>item.category))]

  const filterItem = (currentCategory) => {
   const filterData = Data.filter((item) => item.category === currentCategory)
   setCategory(currentCategory)
  setProducts(filterData)
  }
  // setCategory(currentCategory)
  // setProducts(filterData)
  
  
      return (
    <div>
      <PageHeader title={'Our Shop Page' }currentPage='Shop' />
        
        <div className='shop-page padding-tb'>
          <div className='container'>
            <div className='row justify-content-center'>             
              <div className='col-lg-8 col-12'>
                <section>
                  <div className='shop-title d-flex flex-wrap justify-content-between'>
                    <p>{title}</p>
                     <div className={`product-view-mode ${gridList ? "gridActive":"listActive"}`}>
                      <a className='grid' onClick={()=>setGridList(!gridList)}>
                        <i className="icofont-ghost"></i>                      
                      </a>
                      <a className='list' onClick={()=>setGridList(!gridList)}>
                        <i className="icofont-listine-dots"></i>                      
                      </a>
                     </div>
                  </div>
                  {/* products */}
                  <div>
                    <ProductCard GridList={gridList} Product={currentProducts}/>
                  </div>
                  <Pageination
                  productsPerPage={productsPerPage}
                  totalProducts={products.length}
                  PageinationClick={PageinationClick}
                  activePage={currentPage}
                  
                  />
                </section>
              </div>
              <div className='col-lg-4 col-12'>
                <Search GridList={gridList} Products={products}/>
                <ProductCategory 
                filterItem={filterItem}
                setItem={setProducts}
                menuItem={menuItem}
                setProducts={setProducts}
                category={category}              

                />
                <PopularPost/>
                <Tags/>
              </div>              
            </div>
          </div>
        </div>
    </div>
  )
}

export default Shop