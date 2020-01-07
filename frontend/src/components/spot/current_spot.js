import React from 'react'


class CurrentSpot extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
          <div>
            <div>
              <div>What kind of spot are you listing</div>
            </div>

            <div>
              <div>
                <div>
                  <div>Lets narrow things down</div>
                </div>
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


                <div>
                  <div>Choose property type</div>
                </div>
                <div className="property-buttons-container">
                  <div>
                    <input type="radio"> Apartment </input>
                  </div>
                  <div>
                    <input type="radio"> Condominium </input>
                  </div>
                  <div>
                    <input type="radio"> Casa partiular </input>
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
                  <div>
                      description....
                  </div>
                </div>


              </div>
            </div>
          </div>
        );
    }
}