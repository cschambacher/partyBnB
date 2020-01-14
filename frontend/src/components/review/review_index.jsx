import React from 'react'
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
        console.log(this.props.reviews)
        const {reviews} = this.props
        return (
            <div>
                <h1>this is for my reviews</h1>

               { Object.values(reviews).map((value) =>{
            return   <div>  {value.user}, 
                            {value.rating}, 
                            {value.comment},
                            {value.spot}
                      </div>
               } ) }
            </div>
            
            
        )
    }
}

export default Review;


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