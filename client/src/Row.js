import React, { useState, useEffect } from 'react';
import axios from './axios';
import requests from './requests';
import './Row.css';



const base_url = "https://image.tmdb.org/t/p/original/"

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);
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


    return (
        <div className="row">

            <h2>{title}</h2>

            <div className="row_posters">

                {movies.map(movie => (
                    <>
                    <h2>{title}</h2>
                    <img className="row_poster" src= {`${base_url}${movie.poster_path}`} alt={movie.name} />
                    </>
                ))}
            </div>
            
        </div>
    )
}

export default Row; 