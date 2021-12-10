import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';
import Youtube from "react-youtube"
import movieTrailer from "movie-trailer"



const base_url = "https://image.tmdb.org/t/p/original/"

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    // const cosa = useState('');
    // cosa[0] --> variable de estado
    // cosa[1] --> funcion que cambia el estado

    useEffect(() => {
        async function fetchData() {

            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
         
        fetchData();
    
    }, [fetchUrl]);

    const opts ={
        height: "390",
        width: "100%",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay:1
        },
    }

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('')
        } else {
            movieTrailer(movie?.name|| "")
            .then((url) => {
                // https://www.youtube.com/watch?v=Rfd9fMj92H0
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl (urlParams.get("v"));
            }).catch((error) => console.log(error))
        }
    }

    return (
        <div className="row">

            <h2>{title}</h2>

            <div className="row_posters">

                {movies.map(movie => (
                    <>
                    <img key={movie.id} onClick={() => handleClick(movie)} className="row_poster" src= {`${base_url}${movie.poster_path}`} alt={movie.name} />
                    </>
                ))}
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row; 