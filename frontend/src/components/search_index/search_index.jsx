import React, { Component } from 'react'
import frustrated from "./frustrated.png";
import Thumbnail from '../thumbnail/thumbnail';
import { connect } from 'react-redux';
import { stateGuestSearch, locationSearch,} from '../../util/spot_util';
import { searchSpots } from '../../actions/spot_actions';
import "./search_index.scss";
export class SearchIndex extends Component {
                 constructor(props) {
                   super(props);
                   this.state = {
                     spots: [],
                     loading: false
                   };
                 }

                 componentDidMount() {
                   const lat = this.props.match.params.lat;
                   const lon = this.props.match.params.lng;
                   this.setState({ loading: true });
                   this.props.searchSpots(lat, lon)
                     .then(() => {
                       this.setState({ loading: false});
                     })
                     .catch(e => this.setState({ loading: false }));

                   // stateGuestSearch(state, guests).then(spots => {
                   //     this.setState({spots: spots.data})
                   // });
                 }
                 
                 render() {
                   if (this.props.results.length > 0) {
                     console.log("spots", this.props.results);
                     return (
                       <div className="thumb-display">
                         {this.props.results.map(spot => (
                           <Thumbnail
                             title={spot.title}
                             description={spot.description ? spot.description.description : ""}
                             price={spot.price ? spot.price.basePrice.toString(): ""}
                             key={spot.id}
                             imageUrl={spot.imageUrl ? spot.imageUrl : ""}
                             id={spot._id}
                             state={spot.location ? spot.location.state : ""}
                             city={spot.location ? spot.location.city : ""}
                             distance={Math.ceil(spot.dist.calculated)}
                           />
                         ))}
                       </div>
                     );
                   } else if (
                     !this.state.loading &&
                     this.props.results.length === 0
                   ) {
                     return (
                       <div className="no-spots-container">
                         <h1 className="no-spots">
                           Unfortunately, there are no Party Spots that match
                           your search criteria. We are always getting more
                           spots, so please try searching again later or host
                           your own spot
                         </h1>
                         <img className="frustrated" src={frustrated} />
                       </div>
                     );
                   } else {
                     return (
                       <div className="spinner-center">
                         <div className="loader"></div>
                       </div>
                     );
                   }
                 }
               }
  
const mapStateToProps = state => ({
  results: state.entities.search
});

const mapDispatchToProps = dispatch => ({
  searchSpots: (lat, lon) => dispatch(searchSpots(lat, lon))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchIndex);

