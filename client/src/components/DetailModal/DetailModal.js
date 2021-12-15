import React, {useEffect, useState} from 'react';
import './DetailModal.css';
import ReviewService from "../../services/review.services";


const base_url = "https://image.tmdb.org/t/p/original/"

function DetailModal(props) {

    const reviewService = new ReviewService();

    const [reviews, setReviews] = useState([]);

    useEffect(() => refreshFilm());

    const refreshFilm = () => {
        reviewService.getAllMovieReviews(props.details.id)
          .then(response => {
            const reviews = response.data
            setReviews(reviews)
    })
          .catch(err => console.log(err))
      };


    return (
        <div className='modal-background'>
            <div className='modal-container'>

                    <div id='modal-img'>
                        <img className='image' src={`${base_url}${props.details.backdrop_path}`} alt={props.details.title}/>
                    </div>
                <div id='everything'>
                    <div className='modal-buttons'>
                        <button>
                            Add to list
                        </button>
                    </div>
                    
                    <div id='modal-description'>
                        <p id='description'>{props.details.overview}</p>
                    </div>
                    
                    <div className='modal-vote'>
                        <h1>{props.details.vote_average}</h1>
                    </div>
                    <div className='modal-comments'>
                        {reviews.length > 0 &&
                        reviews.map(review => (
                            <div>
                                {/* <div className="reviewpic">
                                <img key={review.id} className="review_pic" src= {`${base_url}${review.poster_path}`} alt={review.title}/>
                                </div> */}
                                <div className="reviewcontent">
                                    <p>{review.title}</p>
                                    <p>{review.comment}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                 </div>
            </div>
        </div>
    )
}

export default DetailModal
