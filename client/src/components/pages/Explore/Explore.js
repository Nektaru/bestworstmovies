import React, { Component, useEffect, useState } from "react";
// import { Container } from 'react-bootstrap'
import FilmService from "../../../services/film.services";


// function Explore() {
//     return (
//         <div>
//             {""}
//         </div>
//     )
// }

// export default Explore

const Explore = () => {

    const [films, setFilms] = useState([])

    const filmService = new FilmService()

    useEffect(() => refreshFilms(), [])


    const refreshFilms = () => {

    filmService.getAllFilms()
      .then(response => {
        const films = response.data
console.log(response.data)
        setFilms(films)
      })
      .catch(err => console.log(err))
  }

    return (
        <>
        <h1>Film List</h1>
        <p>{films[0]?.title}</p>
        <p>AAAAAAAAAAAAHHHHHHHHHHHHHHHHHHH</p>
        </>
    
        )
    
}

export default Explore

{/* <CoasterList refreshCoasters={this.refreshCoasters} coasters={this.state.coasters} /> */}