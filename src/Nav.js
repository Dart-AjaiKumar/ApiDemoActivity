import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import MainData from './Context/MainData'

const Nav = () => {
  const {handleLogout,search,setSearch} = useContext(MainData)
  return (
    <main>
        <nav>
            <ul>
                <Link to="alldata"><li>Employee Details</li></Link>
                <Link to="datapost"><li>Add Employee</li></Link>
           </ul>
           <form className='formdata' onSubmit={(e)=>e.preventDefault()}>
                <label htmlFor='Searchdata' ></label> 
                <input
                  type = "text"
                  placeholder='Search name'
                  value ={search}
          onChange={(e) => setSearch(e.target.value)}
                />
                <button onClick={() =>handleLogout()}>Logout</button>
            </form>
            
        </nav>

    </main>
  )
}

export default Nav
