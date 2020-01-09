import React from 'react';
import Thumbnail from '../thumbnail/thumbnail'
import { fetchSpots } from '../../util/spot_util';
import './dashboard.scss';
export default class Dashboard extends React.Component {
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
                      />
                  ))  
                }
            </div>
        );
        } else return <div></div>
        
    }
}
