import React from 'react'
import "./_TrendingProduct.scss"
import { AiFillDelete } from "react-icons/ai"
import { useContext } from 'react'
import { mainContext } from '../../Context/Context'
const TrendingProduct = () => {
    const { data, search, delData } = useContext(mainContext)
    return (
        <div className='productSection'>
            <div className="container-fluid">
                <div className='headerTitle'>
                    <h3>Popular Item in the market</h3>
                    <h1>Trending Product</h1>
                    <div className="headerLine"></div>
                </div>
               <div className="productCard">
               <div className="row">
                    {data && data
                        .filter((item) => {
                            return search.trim().toUpperCase() === "" ? item : item.name.toLowerCase().includes(search.toLowerCase())
                        })
                        .map((e, index) => {
                        return    <div className="col-3 card" key={index}>
                                <div className='headerImage'>
                                    <img src={e.url} alt="" />
                                </div>
                                <h5>{e.mark}</h5>
                                <h3>{e.name}</h3>
                                <h4>${e.price}</h4>
                                <button onClick={() => delData(e._id)}><AiFillDelete /></button>
                            </div>
                        })
                    }
                </div>
               </div>
            </div>
        </div>
    )
}

export default TrendingProduct
