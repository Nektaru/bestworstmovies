import React, {useEffect, useState} from 'react';
import './DetailModal.css';
import ReviewService from "../../services/review.services";
import UserService from "../../services/user.services";
import { Form, Button } from 'react-bootstrap';


const base_url = "https://image.tmdb.org/t/p/original/"

const DetailModal = (props) => {

    const userService = new UserService()
    const reviewService = new ReviewService();
    const [reviews, setReviews] = useState([]);
    const [show, showForm] = useState(false);
    const [formData, setFormData] = useState({
        comment: "",
        title: "",
        filmApiId: props.details.id
    });
    const [viewedFilmsTitleArray, setViewedFilmsTitleArray] = useState([]);


    useEffect(() => getAllMovieReviews(), []);

    useEffect(() => {
        setViewedFilmsTitleArray(props.currentUser?.films?.viewed.map(film => film.title))
    }, [props?.currentUser]);


    const addReview = () => {
        reviewService
            .createReview(formData)
            .then(response => {
                getAllMovieReviews()
            })
            .catch(err => console.log(err))
    }

    const getAllMovieReviews = () => {
        reviewService.getAllMovieReviews(props.details.id)
          .then(response => {
            const reviews = response.data
            setReviews(reviews)
    })
          .catch(err => console.log(err))
      };


      const toggleForm = () => { 
        showForm(!show) 
    };

    const addToList = () => {
        if (!viewedFilmsTitleArray.includes(props.details.title)) {
            userService.createViewed(formData)
                .then(response => {
                    const updatedUser = response.data
                    props.storeUser(updatedUser)
                })
                .catch(err => console.log(err))
        }
    };

    const removeFromList = () => {
        if (viewedFilmsTitleArray.includes(props.details.title)) {
            userService.removeViewed(formData)
                .then(response => {
                    const updatedUser = response.data
                    props.storeUser(updatedUser)
                    console.log('----------------------', updatedUser)
                })
                .catch(err => console.log(err))
        }
    };

    const handleInputChange = (e) => {
        let { name, value } = e.currentTarget
        setFormData({ ...formData, [name]: value })
      }
    
      const handleSubmit = (e) => {
        e.preventDefault();
        addReview()
      };


    return (
        <div className='modal-background'>
            <div className='modal-container'>

                    <div id='modal-img'>
                        <img className='image' src={`${base_url}${props.details.backdrop_path}`} alt={props.details.title}/>
                    </div>
                <div id='everything'>
                    <div className='modal-buttons'>
                    {
                        !viewedFilmsTitleArray?.includes(props.details.title) ?
                        <Button onClick={addToList}>
                            Add to list
                        </Button>
                        :
                        <Button onClick={removeFromList}>
                            Remove from list
                        </Button>
                    }
                       
                        <Button onClick={toggleForm}>
                            Leave Review
                        </Button>
                    </div>
                    
                    <div id='modal-description'>
                        <p id='description'>{props.details.overview}</p>
                    </div>
                    
                    <div className='modal-vote'>
                        <h2>Rating: {props.details.vote_average}</h2>
                    </div>

                    { show &&
                        
                    <Form id='review-form' onSubmit={handleSubmit}>

                    <div className="review-labels">    
                    <Form.Group className="mb-1" controlId="formUsername">
                        <Form.Label >Review Title</Form.Label>
                    <Form.Control id='label-size' name="title" value={formData.title} onChange={handleInputChange} type="title" placeholder="Title" />
                    </Form.Group>
                
                    <Form.Group className='mb-3'>
                        <Form.Label>Type something</Form.Label>
                        <Form.Control onChange={handleInputChange} name="comment" type="comment" placeholder="Review goes here"/>
                    </Form.Group>
                    </div>
                
              <Button className="review-submit" type="submit">Submit</Button>
              
            </Form>}

                    <div className='modal-comments'>
                        {reviews.length > 0 &&
                        reviews.map(review => (
                            <div key={review._id}>
                                <div className="reviewcontent">
                                    <div className="review-title-div">
                                    <p className="reviewTitle">Title: {review.title}</p>
                                    </div>
                                    <div className="review-body-div">
                                    <p className="reviewBody">Review: {review.comment}</p>
                                    </div>
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
