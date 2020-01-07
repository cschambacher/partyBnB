import React from 'react'

class Space extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
          <div>
            <div>What spaces can guests use?</div>
            <div>
              Include common areas, but don’t add spaces that aren’t on your
              property.
            </div>
            <div>
                <input type="checkbox" value="Private living room"/>
                <input type="checkbox" value="Kitchen"/>
                <input type="checkbox" value="Laundry-washer"/>
                <input type="checkbox" value="Laundry-dryer"/>
                <input type="checkbox" value="Parking"/>
                <input type="checkbox" value="Gym"/>
                <input type="checkbox" value="Pool"/>
                <input type="checkbox" value="Hot tub" />
            </div>
          </div>
        );
    }
}

export default Space