import React from 'react';
import Thumbnail from '../thumbnail/thumbnail'
import { fetchSpots } from '../../util/spot_util';
import { Link, withRouter } from 'react-router-dom';
import './dashboard.scss';
import Card from './card/card';
import party from './party1.jpg';
import city from './city.jpg';
import popular from './popular.jpg';
import cityImage from './roof2.jpg';
import { locationSearch } from '../../util/spot_util';
class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            spots: [],
            sanFran: [],
            sanFranClicked: false,
        }
    }

     componentDidMount(){
        fetchSpots().then(spots => {
            console.log("spots", spots);
            this.setState({spots: spots.data});
        });
         locationSearch("37.7749295", "-122.4194155").then(sanFranSpots => {
             this.setState({sanFran: sanFranSpots.data})
         })
    }
    render() {
        const sanFranDisplay = this.state.sanFranClicked ? (this.state.sanFran.map(spot => (
            
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
        ))) : (this.state.sanFran.slice(0, 6).map(spot => (
            
                
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
            
        )));
        if (this.state.sanFran.length > 0){
            return (
                <div>
                    <h1 className="explore-header">Explore PartyBnB</h1>
                    <div className="dashboard-categories">
                        <Card imageUrl={city} title="City"/>
                        <Card imageUrl={popular} title="Popular"/>
                        <Card imageUrl={party} title="Reviews"/>
                    </div>
                    <h1 className="explore-header">Party BnB Cities</h1>
                    <p className="dashboard-info">A great selection of cities for great parties</p>
                    <div className="city-banner">
                        <p className="banner-text-live">Live Free and</p>
                        <p className="banner-text">Experience the Party</p>
                    </div>
                    <h1 className="explore-header">Places to Party near San Francisco</h1>
                    
                        <div className="thumb-display">
                        {sanFranDisplay}
                        </div>
                        {(this.state.sanFranClicked === false) ?
                        <p className="display-all-button" onClick={() => this.setState({ sanFranClicked: true})}>Show all {`(${this.state.sanFran.length})`}</p>
                        : <div></div> }
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

