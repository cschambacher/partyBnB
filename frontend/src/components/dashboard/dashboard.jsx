import React from 'react';
import Thumbnail from '../thumbnail/thumbnail'
import { fetchSpots } from '../../util/spot_util';
export default class Dashboard extends React.Component {
    componentDidMount(){
        fetchSpots().then(spots => this.setState({spots}));
    }
    constructor(props){
        super(props);
        this.state = {
            spots: {}
        }
    }
    render() {
        return (
          <div>
            {this.state.spots.map(spot => (
              <Thumbnail 
              title={spot.title}
              price={spot.price.baseprice}
              />
            ))}
          </div>
        );
    }
}
