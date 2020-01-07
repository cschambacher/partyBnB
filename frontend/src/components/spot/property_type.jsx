import React from 'react'

class PropertyType extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return (
          <div>
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
              <div>description....</div>
            </div>
          </div>
        );
    }
}

export default PropertyType