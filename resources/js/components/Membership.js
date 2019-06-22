import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Membership extends React.Component {
    //Test
    state = {
        users: []
    };

    handleClick() {
        axios
            .get('/api/subscription/one_month_free')
            .then(response => {
                return response.data;
            })
            .then(json => {
                console.log(json);
            });
    }
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
                        <button onClick={this.handleClick}>buy now</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Membership;
