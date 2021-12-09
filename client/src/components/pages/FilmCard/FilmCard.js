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
    <Card className="film-card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`${base_url}${poster_path}`} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
            {truncate(overview, 150)}
        </Card.Text>

        {/* <Link to={`/coaster/${_id}`}>
          <Button variant="primary">Detalles</Button>
        </Link> */}
      </Card.Body>
    </Card>
  )
}

export default FilmCard