import React from 'react'
class NarrowOption extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <div>Lets narrow things down</div>
                <div className="narrow-buttons-container">
                  <div>
                    <input type="radio"> Apartment </input>
                  </div>
                  <div>
                    <input type="radio"> House </input>
                  </div>
                  <div>
                    <input type="radio"> Secondary Unit </input>
                  </div>
                  <div>
                    <input type="radio"> Unique Space </input>
                  </div>
                  <div>
                    <input type="radio"> Bed and Breakfast </input>
                  </div>
                  <div>
                    <input type="radio"> Boutique Hotel </input>
                  </div>
                </div>
            </div>
                

        )
    }
}

export default NarrowOption