import React from 'react';
import Thumbnail from '../thumbnail/thumbnail'
import { fetchSpots } from '../../util/spot_util';
import { Link, withRouter } from 'react-router-dom';
import './dashboard.scss';
import Card from './card/card';
import party from './party1.jpg';

class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            spots: []
        }
    }

     componentDidMount(){
        fetchSpots().then(spots => {
            console.log("spots", spots);
            this.setState({spots: spots.data});
        });
    }
    render() {
        if (this.state.spots.length > 0){
            return (
                <div>
                    <h1 className="explore-header">Explore PartyBnB</h1>
                    <div className="dashboard-categories">
                        <Card imageUrl={party} title="City"/>
                        <Card imageUrl={party} title="Popular"/>
                        <Card imageUrl={party} title="Reviews"/>
                    </div>
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
                                    state={spot.location.state}
                                    city={spot.location.city}
                                />
                            ))
                        }
                    </div>
                </div>
        );
        } else return <div></div>
        
    }
}
export default withRouter(Dashboard);

