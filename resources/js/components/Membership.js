import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center'
};

class Membership extends React.Component {
    state = {
        token: localStorage['appState'] ? JSON.parse(localStorage['appState']).user.auth_token : '',
        users: []
    };

    render() {
        return (
            <div id="membership-page" className="container">
                <h2>Memberships</h2>
                <div className="content">
                    <div className="membership">
                        <h3>Gold Membership</h3>
                        <img src="https://static3.bigstockphoto.com/2/0/3/large1500/30201035.jpg" />
                        <div className="description">
                            now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their
                            infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and
                            the like)
                        </div>
                        <button>buy now</button>
                    </div>

                    <div className="membership">
                        <h3>Gold Membership</h3>
                        <img src="https://static3.bigstockphoto.com/2/0/3/large1500/30201035.jpg" />
                        <div className="description">
                            now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their
                            infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and
                            the like)
                        </div>
                        <button>buy now</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Membership;
