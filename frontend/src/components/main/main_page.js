import React from 'react';
import bg from './people.jpg';
class MainPage extends React.Component {

    render() {
        return (
            <div className="main">
                <div id="bg">
                    <img src={bg} id="bg" alt=""></img>
                </div>
                
                <footer>
                    <span>partyBnB</span>
                    Copyright &copy; 2020 PNC
                </footer>
            </div>
        );
    }
}

export default MainPage;