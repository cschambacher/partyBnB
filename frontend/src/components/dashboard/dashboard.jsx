import React from 'react';
import Thumbnail from '../thumbnail/thumbnail'
import { fetchSpots } from '../../util/spot_util';
import { Link, withRouter } from 'react-router-dom';
import './dashboard.scss';

class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            spots: []
        }
    }

     componentDidMount(){
        fetchSpots().then(spots => {
            console.log(spots);
            this.setState({spots: spots.data});
        });
    }
    render() {
        if (this.state.spots.length > 0){
            return (
            <div className="thumb-display">
                {
                  this.state.spots.map(spot => (
                      <Thumbnail 
                      title={spot.title}
                      description={spot.description.description}
                      price={spot.price.basePrice.toString()}
                      key={spot.id}
                      imageUrl={spot.imageUrl}
                      id={spot._id}
                      />
                  ))  
                }
            </div>
        );
        } else return <div></div>
        
    }
}
export default withRouter(Dashboard);