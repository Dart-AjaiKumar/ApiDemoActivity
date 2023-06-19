import React from 'react'
import { Link } from 'react-router-dom'

const Feed = ({data}) => {
  return (
    <article className='data'>
        <Link to = {`datapost/${data.id}`}>
        <h2>{"ID : "+ data.id}</h2>
        <h2>{"Name : "+data.name}</h2>
            
        </Link>
    </article>
  )
}

export default Feed
