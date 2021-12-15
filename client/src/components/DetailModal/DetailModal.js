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

    useEffect(() => getAllMovieReviews(), []);

    const addReview = () => {
    
        reviewService
            .createReview(formData)
            .then(response => {
                getAllMovieReviews()
            })
            .catch(err => console.log(err))
    }

    // encuentra los reviews que se van a mostrar
    const getAllMovieReviews = () => {
        reviewService.getAllMovieReviews(props.details.id)
          .then(response => {
            const reviews = response.data
            setReviews(reviews)
    })
          .catch(err => console.log(err))
      };

    // abre el form para hacer nuevo review
    const toggleForm = () => { 
        showForm(!show) 
    };

    const addToList = () => {
        userService.createViewed(formData.filmApiId)
        // console.log('>>>>>',formData)
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
                        <Button onClick={addToList}>
                            Add to list
                        </Button>
                        <Button onClick={toggleForm}>
                            Leave Review
                        </Button>
                    </div>
                    
                    <div id='modal-description'>
                        <p id='description'>{props.details.overview}</p>
                    </div>
                    
                    <div className='modal-vote'>
                        <h1>Rating: {props.details.vote_average}</h1>
                    </div>

                    { show &&
                        
                    <Form id='review-form' onSubmit={handleSubmit}>
                        <h1 className='review' >Review</h1>

                    <Form.Group className="mb-3" controlId="formUsername">
                        <Form.Label >Review Title</Form.Label>
                    <Form.Control id='label-size' name="title" value={formData.title} onChange={handleInputChange} type="title" placeholder="Enter Review Title" />
                    </Form.Group>
                
                    <Form.Group>
                        <Form.Label>Type something</Form.Label>
                        <Form.Control onChange={handleInputChange} name="comment" type="comment" placeholder="Review goes here"/>
                    </Form.Group>
                
              <Button type="submit">Submit</Button>
              
            </Form>}

                    <div className='modal-comments'>
                        {reviews.length > 0 &&
                        reviews.map(review => (
                            <div>
                            
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
