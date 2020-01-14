import React from 'react';
import './thumbnail.scss';
import pic from './pic.jpg';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons'

class Thumbnail extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
      // console.log(this.props.id);
        return (
          <div
            className="thumbnail"
            onClick={() =>
              this.props.history.push(`/spot/show/${this.props.id}`)
            }
          >
            <img className="thumbnail-image" src={this.props.imageUrl} alt="" />
            <p className="thumbnail-location">
              {this.props.city
                ? `${this.props.city}, ${this.props.state}`
                : `${this.props.state}`}
            </p>
            <div className="name">
              {this.props.title}
              <div className="rating">
                {/* {this.props.rating} */}
                <FontAwesomeIcon className="star-icon" icon={faStar} />
                4.5
              </div>
            </div>

            <div className="description">
              {this.props.description} Description
            </div>

            <div className="price">
              ${this.props.price}
              <div className="per-night"> / night</div>
              {this.props.distance ? (
                <div className="distance">
                  <p className="distance-p">{`${this.props.distance} miles away`}</p>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        );
    }
}

export default withRouter(Thumbnail)


