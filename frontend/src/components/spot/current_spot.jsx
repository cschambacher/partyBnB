import React from 'react'
import NarrowOption from './narrow_option'
import PropertyType from './property_type'
import GuestRoomType from './guest_room_type'
import DedicatedGuestSpace from './dedicated_guest_space'
import Lisiting from './listing'


export default class CurrentSpot extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
          <div>
              <div>What kind of spot are you listing?</div>
              <NarrowOption/>
              <PropertyType/>
              <GuestRoomType/>
              <DedicatedGuestSpace/>
              <Lisiting/>
          </div>
        );
    }
}