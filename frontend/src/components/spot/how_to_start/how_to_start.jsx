import React from 'react';
import './how_to_start.css';
import balloons from './ballons.png';
export default class HowToStart extends React.Component {
    constructor(props){
        super(props);
        this.state =  {
            selected: ""
        }
    }
    handleClick = e => {
        e.preventDefault();
        this.props.history.push('/newListing')
    }
    render() {
        return (
          <div className="how-to-start">
            <p className="header">How would you like to start?</p>
            <form>
              <fieldset>
                <div className="start-radio">
                  <div className="row">
                    <input type="radio" id="new-listing" value="newListing"
                    value="newListing" 
                    onChange={(e) => this.setState({selected: e.currentTarget.value})}
                    checked={this.state.selected === "newListing"}/>
                    <label className="label" htmlFor="new-listing">
                      Create a new listing{" "}
                    </label>
                    <div className="balloons">
                      <img src={balloons} />
                    </div>
                  </div>
                </div>
              </fieldset>
              <button className={`grn-btn ${this.state.selected.length > 0 && "sharpen"}`} onClick={this.handleClick}>
                Next
              </button>
            </form>
          </div>
        );
    }
}
