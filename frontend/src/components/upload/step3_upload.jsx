import React from 'react';
import { connect } from 'react-redux';
import { updateSpot, fetchSpot } from "../../actions/spot_actions";
import './upload.scss'

class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           imageUrl: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }
    componentDidMount() {
        this.props.fetchSpot(this.props.match.params.spotId);
    }
     

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateSpot(this.props.match.params.spotId, { imageUrl: this.state.imageUrl })
        .then(spot => {
                                console.log(spot);
                                this.props.history.push(`/description/${this.props.match.params.spotId}`);
                            })
        .catch(err => console.log(err));
        console.log("pressed");
    }

    handleFile(e){
        // this.setState({ imageUrl: e.currentTarget.files[0] });
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ imageUrl: fileReader.result });
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }
    display(){
        if (this.state.imageUrl === ""){
            return <div className="upload-box">
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
        } else {
            return <img className="preview" src={this.state.imageUrl} />
        }
    }

    render() {
        console.log(this.state.imageUrl);
        
        return (
            <div>
                
                <div className="add-photos-to-listing">
                    <div className="upload-container">
                        <div className="upload-description">
                            <div className="upload-side">
                                <div className="add-photos-container">
                                    <div className="add-photos-captions">
                                        <h3>Add photos to your listing</h3>
                                    </div>
                                    <div className="upload-photos-file">
                                        <input className="upload-photos-btn"
                                            type="file"
                                            onChange={this.handleFile}
                                        />
                                    </div>
                                    <div className="add-photos-reason">
                                        <p>Photos help guests imagine staying in your place. You can
                                        start with one and add more after you publish.</p>
                                    </div>
                                    {this.display()}
                                </div>
                                {/* <div className="upload-box">
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
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="next-back">
                    <div className="row">
                        <span className="arrow-left"></span>
                        <p onClick={() => this.props.history.goBack()}>Back</p>
                    </div>
                    <button
                        className={`grn-btn ${this.state.imageUrl !== "" && "sharpen"}`}
                        disabled={this.state.imageUrl === ""}
                        onClick={this.handleSubmit}

                    >
                        Next
                </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    spot: state.entities.spotForm
});

const mapDispatchToProps = dispatch => ({
    updateSpot: (spotId, updatePayload) =>
        dispatch(updateSpot(spotId, updatePayload)),
    fetchSpot: spotId => dispatch(fetchSpot(spotId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Upload);