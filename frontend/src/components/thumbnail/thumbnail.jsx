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
        return (
          <div className="thumbnail" onClick={() => this.props.history.push(`/spot/show/${this.props.id}`)}>
            <img className="thumbnail-image" src={this.props.imageUrl} />

            <div className="name">
              {this.props.title}
              <div className="rating">
                {/* {this.props.rating} */}
                <FontAwesomeIcon className="star-icon" icon={faStar} />
                4.5
              </div>
            </div>

            <div className="description">{this.props.description} Description</div>

            <div className="price">${this.props.price}
                <div className="per-night"> / night</div>
            </div>
          </div>
        );
    }
}

export default withRouter(Thumbnail)


