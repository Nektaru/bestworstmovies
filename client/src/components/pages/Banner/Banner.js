import React, {useState, useEffect} from 'react';
import axios from '../../../axios';
import requests from '../../../requests';
import './Banner.css'

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchWorstMovies /* && requests.fetchAwesomeMovies && requests.fetchBestMovies */);
            setMovie(
                request.data.results[Math.floor(Math.random() * request.data.results.length -1)]
            )
           return request;
        }

        fetchData();

    }, [])

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n -1) + "..." : str;
    }

    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
        }}>

            <div className="banner_content">
                <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner_buttons">
                    <button className="banner_button">Add to List</button>
                    <button className="banner_button">Reviews</button>
                </div>
                <h1 className="banner_description">
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>

            <div className="banner_fadeBottom" />
        </header>
    )
}

export default Banner


