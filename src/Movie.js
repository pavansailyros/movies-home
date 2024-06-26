import React, { useState } from 'react'
import { useEffect } from 'react';

import MoviesCards from './MoviesCard';
// 200aed05
import './App.css'
import serchIcon from './search.svg'
const API_URL = 'https://www.omdbapi.com?apikey=200aed05';
// const movie1 = {
//   "Title": "Superman IV: The Quest for Peace",
//   "Year": "1987",
//   "imdbID": "tt0094074",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BMmIwZWY1YTYtNDlhOS00NDRmLWI4MzItNjk2NDc1N2NhYzNlXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg"
// }

export default function Movie() {
  const [movies,setMovies] = useState([]);
  const [searchTerm,setsearchTerm] = useState ('superman');
  const searchMovies = async (title)=>{
    const response = await fetch (`${API_URL}&s=${title}`);
    const data  = await response.json();
    setMovies(data.Search)
}

    useEffect (()=>{
   searchMovies('')
    },[])
 
  return (
    <div className='app'>
      <h1>MovieHome</h1>
      <div className='search'>
        <input placeholder='Enter movie name' 
        value={searchTerm}
        onChange={(e)=>setsearchTerm(e.target.value)}></input>

        <img src={serchIcon}
        alt='search movies'
        onClick={()=>searchMovies(searchTerm)}></img>
        
      </div>
      {
        movies?.length>0 
        ? (  <div className='container'>
        {movies.map((movie)=>(<MoviesCards movie = {movie} />))
        }
         </div>):(
         <div className='empty'>
         <h2>No Movies found</h2>
         </div>
         )
      }
    
    </div>
  )
}
