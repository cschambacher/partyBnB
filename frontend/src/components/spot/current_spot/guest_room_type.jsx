import React from "react";

class GuestRoomType extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <div>What will guest have?</div>
          <div>
            <div>
              <input type="radio" />
              <label>Entire place</label>
            </div>
            <div>
              <input type="radio" />
              <label>Private place</label>
            </div>
            <div>
              <input type="radio" />
              <label>Shared room</label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GuestRoomType;
