import React, { Component } from 'react'
import './upload.scss'

class Upload extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
          <div className="add-photos-to-listing">
            <div className="upload-container">
              <div className="upload-description">
                <div className="upload-side">
                  <div className="add-photos-container">
                    <div className="add-photos-captions">
                      Add photos to your listing
                    </div>
                    <div className="add-photos-reason">
                      Photos help guests imagine staying in your place. You can
                      start with one and add more after you publish.
                    </div>
                  </div>
                  <div className="upload-box">
                    <form className="upload-form">
                      <div className="inner-upload-form-container">
                        <div className="inner-upload-padding">
                          <div className="upload-button-container-with-padding">
                            <div className="upload-button-container">
                                <div className="upload-photos-button">

                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Upload;
