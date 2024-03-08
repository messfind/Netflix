import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from "./axios"
import requists from './requist'
function Banner() {
    const [movie, setMovies] = useState([])
    useEffect(() => {
        async function fetchData() {
            const requist = await axios.get(requists.fetchNetflixOriginals);
            setMovies(requist?.data.results[
                Math.floor(Math.random() * requist.data.results.length)
            ]
            );
            return requist;
        }
        fetchData()
    },[])
    return (
        <header className='banner 'style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${ movie?.backdrop_path }")`,
            backgroundPosition:"center center"
        }} >
            <div className='banner_contents'>
                <h1 className='banner_title'>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className='banner_buttons'>
                    <button className='banner_button'>Play</button>
                    <button className='banner_button'>My List</button>
                </div>
                <h1 className='banner_description'>{movie?.overview}</h1>
            </div>
            <div className='banner_fadeBottom'/>
      </header>
  )
}

export default Banner;
