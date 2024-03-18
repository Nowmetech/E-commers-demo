import React  from 'react'

function Pageination({productsPerPage, totalProducts, PageinationClick, activePage }) {
    const number = []
    for(let i = 1; i<=Math.ceil(totalProducts / productsPerPage); i++){
        number.push(i)    
    }
  return (
    <ul className='default-pagination lab-ul'>
        <li>
            <a href="#" onClick={()=> {
                if(activePage < number.length){
                    PageinationClick(activePage - 1)
                }
            }}>
                <i className='icofont-rounded-left'></i>
            </a>
        </li>
        {
           
        number.map((num,index)=>(
            <li key={index} className={`page-item ${num === activePage ? "bg-warning": ""}`}>
                <button onClick={()=>PageinationClick(num)} className='bg-transparent'>{num}</button>
            </li>
        ))
        }
        <li>
            <a href="#" onClick={()=> {
                if(activePage < number.length){
                    PageinationClick(activePage + 1)
                }
            }}>
                <i className='icofont-rounded-right'></i>
            </a>
        </li>
    </ul>
  )
}

export default Pageination