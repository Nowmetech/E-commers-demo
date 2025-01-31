import React from 'react'
import { Link } from 'react-router-dom'

function PageHeader({title, currentPage}) {
  return (
    <div className='pageheader-section'>
        <div className='container'>
            <div className='row'>
                <div className="col-12">
                    <div className="pageheader-content text-center">
                        <h2>{title}</h2>
                        <nav aria-label='breadcrumb'>
                            <ol className='breadcrumb justify-content-center'>
                                <li className='breadcrumb-item'>
                                    <Link to='/'><i class="icofont-home"></i>Home</Link>
                                    <Link  aria-current='page'> / {currentPage}</Link>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PageHeader