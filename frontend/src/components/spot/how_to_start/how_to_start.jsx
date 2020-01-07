import React, { Component } from 'react'

export default class HowToStart extends Component {
    handleClick = e => {
        console.log(e);
    }
    render() {
        return (
            <div className="how-to-start">
                <p className="header">How would you like to start?</p>
                <form>
                    <fieldset>
                        <div className="start-radio">
                            <input type="radio"
                            id="new-listing"
                            value="newListing"/>
                            <label htmlFor="new-listing">Create a new listing</label>
                        </div>
                    </fieldset>
                    <button className="grn-btn"
                    onClick={handleClick}>Next</button>
                </form>
            </div>
        )
    }
}
