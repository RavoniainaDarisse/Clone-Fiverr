import React from 'react'
import './Featured.scss'

function Featured() {

  return (
    <div className='featured'>
        <div className="container">
           <div className="left">
                <h1>Find the perfect <i>freelance</i> services for your business</h1>
                <div className="search">
                    <div className="searchInput">
                        <img src="../img/search.png" alt="" />
                        <input type="text" placeholder='Try "Building mobile app"' />
                    </div>
                    <button>Search</button>
                </div>
                <div className="popular">
                    <span>Popular:</span>
                    <button>Web Design</button>
                    <button>Wordpress</button>
                    <button>Logo Design</button>
                    <button>AI Services</button>
                </div>
            </div> 
           <div className="right">
            <img src="../img/mman.png" alt="" />
           </div>
        </div>
    </div>
  )
}

export default Featured