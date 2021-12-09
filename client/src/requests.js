const requests = {
    fetchWorstMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&sort_by=vote_average.asc&include_video=en-US&page=1&vote_count.gte=100`,
    fetchBestMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&sort_by=vote_average.asc&include_video=en-US&page=2&vote_count.gte=100`,
    fetchAwesomeMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&sort_by=vote_average.asc&include_video=en-US&page=3&vote_count.gte=100`
}

export default requests;