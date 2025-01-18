import React, { useContext } from 'react'
import Feed from './Feed'
import DataContext from './context/DataContext';
const Home = () => {

  const {searchResults,isloading,fetchError} = useContext(DataContext);
  return (
    <main className='Home'>
    {isloading && <p className='statusMsg' >Loading posts ....</p>}
    {!isloading && fetchError && <p className='statusMsg' style={{color:"red"}} >{fetchError}</p>}
    {!isloading && !fetchError &&(searchResults.length ? <Feed posts={searchResults} /> : "No posts found.")}
    </ main>
  )
}

export default Home