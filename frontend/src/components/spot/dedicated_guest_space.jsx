import React from "react";

class DedicatedGuestSpace extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <div>Is this setup as a dedicated guest space?</div>
          <div>
            <input type="radio"> Condominium </input>
            <label>Yes, it’s primarily set up for guests</label>
          </div>
          <div>
            <input type="radio"></input>
            <label>No, I keep my personal belongings here</label>
          </div>
        </div>
      </div>
    );
  }
}

export default DedicatedGuestSpace;
