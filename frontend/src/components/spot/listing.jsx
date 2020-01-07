import React from "react";

class Listing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <div>Are you listing on Airbnb as part of a company?</div>
          <div>
            <input type="radio"> Condominium </input>
            <label>Yes, I work for or run a business</label>
          </div>
          <div>
            <input type="radio"></input>
            <label>No, that doesn’t sound like me</label>
            <div>
              This helps you get the right features for how you host—it won’t
              show up to guests or impact how you show up in search.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Listing;
