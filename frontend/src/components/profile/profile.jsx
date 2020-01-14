import React from 'react';
import { Route, Link } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import { fetchAllSpots } from '../../util/spot_util';
import { fetchCurrentUser } from '../../actions/users_actions';
import profilepic from './pin9.jpg';
import Thumbnail from '../thumbnail/thumbnail'
import './profile.scss';
// const panes = [
//     { title: 'pins', content: <PinIndex /> },
//     { title: 'boards', content: <BoardIndex /> },
// ];

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            spots: []

        }

    }

    componentDidMount() {
        this.props.fetchCurrentUser().then(action => {
            console.log("user", action.currentUser);
            this.setState({ user: action.currentUser.data });
        });
        fetchAllSpots().then(spots => {
            console.log("spots", spots);
            const user = this.state.user;
            const spotsdata = spots.data;
            const userSpots = Object.values(spotsdata).filter(spot => spot.user._id === user.id )
            this.setState({ spots: userSpots });
        });
    }
    location(spots){
        if (spots.length === 0){
            return <p>I am not a host yet</p>
        }else{
            return <div className="thumb-display">
                {
                    spots.map(spot => (
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
        }
    }
    render() {
        console.log(this.state);
        
        const user = this.state.user;
        if (user === null) return null;
        const spots = this.state.spots;
        return (
            <div className="profile">
                <div className="profile-top">
                    <div className='profile-photo'>
                        <img src={profilepic} id="profilepic" alt=""></img>
                    </div>
                
                    <div className='profile-header'>
                        <h1>Hi, {user.firstName} {user.lastName}</h1>
                        
                        <p>Joined in 2016</p>
                        <p>Lives in: San Francisco, CA</p>

                    </div>
                </div>
                <div className='profile-header'>
                    <h1>Party spots</h1>

                    {this.location(spots)}

                </div>
            </div>
        )
    }
}