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
                <input type="radio" />
                <label>Apartment</label>
              </div>
              <div>
                <input type="radio" />
                <label>Condominium</label>
              </div>
              <div>
                <input type="radio" />
                <label>Casa particular</label>
              </div>
              <div>
                <input type="radio" />
                <label>Loft</label>
              </div>
              <div>
                <input type="radio" />
                <label>Serviced apartment</label>
              </div>
            </div>
          </div>
        );
    }
}

export default PropertyType