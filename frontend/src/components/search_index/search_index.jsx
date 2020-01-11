import React, { Component } from 'react'
import frustrated from "./frustrated.png";
import Thumbnail from '../thumbnail/thumbnail';
import { stateGuestSearch } from '../../util/spot_util';
import "./search_index.scss";
export default class SearchIndex extends Component {
    constructor(props){
        super(props);
        this.state = {
            spots: []
        }
    }

    componentDidMount(){
        const state = this.props.match.params.state;
        const guests = this.props.match.params.guests;
        stateGuestSearch(state, guests).then(spots => {
            this.setState({spots: spots.data})
        });
    }
    render() {
        if (this.state.spots.length > 0){
            console.log("spots", this.state.spots)
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
                                state={spot.location.state}
                            />
                        ))
                    }
                </div>
            );
        } else {
            return (
                <div className="no-spots-container">
                    <h1 className="no-spots">Unfortunately, there are no Party Spots that match your search criteria.
            We are always getting more spots, so please try searching again later or host your own spot</h1>
            <img className="frustrated" src={frustrated} />
                </div>
            )
        }
    }
}
