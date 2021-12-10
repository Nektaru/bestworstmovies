import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './FilmCard.css'

const base_url = "https://image.tmdb.org/t/p/original/"

function truncate(str, n) {
    return str?.length > n ? str.substr(0, n -1) + "..." : str;
}

const FilmCard = ({ _id, title, overview, vote_average, poster_path, backdrop_path }) => {

  return (
  <div className='card-list'>
    <div className="card-container">
        <Card className="film-card" id="card">
        <Card.Img src={`${base_url}${poster_path}`} />
        <Card.Body>
            <Card.Title><h2>{title}</h2></Card.Title>
            <Card.Text>
                {truncate(overview, 150)}
            </Card.Text>
        </Card.Body>
        </Card>
    </div>
  </div>  
  )
}

export default FilmCard