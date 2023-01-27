import React, { useContext } from 'react'
import Logo from '../Logo/Logo'
import "./_Navbar.scss"
import { AiOutlineSearch } from "react-icons/ai"
import { Link } from "react-router-dom"
import { mainContext } from '../../Context/Context'
const Navbar = () => {
  const { search, searchData, sortData, openInput, open } = useContext(mainContext)
  return (
    <div className='allNavbar'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 navbarLeft">
            <Logo />
          </div>
          <div className="col-6 navbarCenter">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/page">Pages</Link>
              </li>
              <li>
                <Link to="/add">Add</Link>
              </li>
            </ul>
          </div>
          <div className="col-3 navbarRight">
            <div className="searchInput">
              <AiOutlineSearch onClick={openInput} />
              <form style={open ? { display: "block" } : { display: "none" }}>
                <input type="text" placeholder='search here' value={search} onChange={searchData} />
              </form>
            </div>
            <button onClick={sortData}>Filter</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
