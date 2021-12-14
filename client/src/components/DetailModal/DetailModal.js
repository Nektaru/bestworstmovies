import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'
import './DetailModal.css'

const base_url = "https://image.tmdb.org/t/p/original/"

function DetailModal(props) {
    console.log(props)
    return (
        <div className='modal-background'>
            <div className='modal-container'>

                    <div id='modal-img'>
                        <img className='image' src={`${base_url}${props.details.backdrop_path}`}/>
                    </div>
                <div id='everything'>
                    <div className='modal-buttons'>
                        <button>
                            Mark as viewed
                        </button>
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
                </div>
                    </div>
            </div>
        </div>
    )
}

export default DetailModal
