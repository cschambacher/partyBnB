import React from 'react'
import {withRouter} from 'react-router-dom'
import "./review.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

class Review extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            // reviews: 
        }
    }

    //  componentDidMount() {
         
    //  }

    render() {
        const {reviews} = this.props
        console.log(reviews)
        return (
            <div>
                <h4 className="reviews-caption">Reviews</h4>

               { Object.values(reviews).map((value) =>{
            return (
              <div>
                <div>
                  <div className="profile-icon"></div>
                  <div className="reviewer-name">{value.user}</div>
                    <div className="rating-container">
                        <FontAwesomeIcon className="review-star-icon" icon={faStar} />
                        <FontAwesomeIcon className="review-star-icon" icon={faStar} />
                        <FontAwesomeIcon className="review-star-icon" icon={faStar} />
                        <FontAwesomeIcon className="review-star-icon" icon={faStar} />
                        <FontAwesomeIcon className="review-star-icon" icon={faStar} />
                    </div> 
                </div>
                <div className="reviewer-comment">{value.comment}</div>
                <div className="review-comment-end-line"></div>
              </div>
            );
               } ) }
            </div>
            
            
        )
    }
}

export default withRouter(Review);


{/* <div className="guest-review-page">
    <div className="guest-reviews-caption-container">
        <caption></caption>
    </div>

    <div className="guest-review-container">
        <div className="picture-name-rating-container">
            <div className="guest-profile-pic"></div>
            <div className="name-and-date"></div>
            <div className="rating-stars"></div>
        </div>
        <div className="review-comment">Comment here</div>
        <div className="review-line"></div>
    </div>
</div> */}