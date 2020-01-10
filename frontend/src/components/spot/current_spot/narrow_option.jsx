import React from 'react'
class NarrowOption extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
          <div>
            <div>Lets narrow things down</div>
            <div className="narrow-buttons-container">
              <div>
                <input type="radio" />
                <label>Apartment</label>
              </div>
              <div>
                <input type="radio" />
                <label>House</label>
              </div>
              <div>
                <input type="radio" />
                <label>Secondary unit</label>
              </div>
              <div>
                <input type="radio"/>
                <label>Unique Space</label>
              </div>
              <div>
                <input type="radio"/>
                <label> Hotel</label>
              </div>
            </div>
          </div>
        );
    }
}

export default NarrowOption