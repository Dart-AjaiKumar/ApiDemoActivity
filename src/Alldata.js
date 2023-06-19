import React, { useContext } from 'react'
import Feed from './Feed'
import MainData from './Context/MainData'

const Alldata = () => {
  const {searchdata} = useContext(MainData)
  return (
    <>
      {searchdata.map(index => (
        <Feed
          key = {index.id} 
          data = {index}
        />
      ))} 
    </>
  )
}

export default Alldata
