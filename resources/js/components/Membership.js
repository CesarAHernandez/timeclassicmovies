import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Membership = () => {
    const [stripe, setStripe] = useState(Stripe('pk_test_FakM84nEUfKPZFFI8dAEDfyf00WqcOJr8E'));
    const [card, setCard] = useState(null);
    useEffect(() => {
        const elements = stripe.elements();
        const cardElement = elements.create('card');
        setCard(cardElement);
        cardElement.mount('#card-element');
    }, []);
    const handleClick = e => {
        e.preventDefault();
        const promise = stripe.createToken(card);
        promise
            .then(result => result.token)
            .then(
                token => {
                    axios
                        .post('/api/subscription/one_month_free', { token: token.id })
                        .then(response => response.data)
                        .then(json => {
                            console.log(json);
                        });
                },
                reason => {
                    console.log(reason);
                }
            );
    };
    return (
        <div id="membership-page" className="container">
            <h2>Memberships</h2>
            <div className="content">
                <div className="membership">
                    <h3>Gold Membership</h3>
                    <img src="https://static3.bigstockphoto.com/2/0/3/large1500/30201035.jpg" />
                    <div className="description">
                        now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their
                        infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the
                        like)
                    </div>
                </div>
                <button onClick={handleClick}>buy now</button>
            </div>
            <form id="payment-form">
                <div className="form-row">
                    <label htmlFor="card-element">Credit or debit card</label>
                    <div id="card-element" />

                    <div id="card-errors" role="alert" />
                </div>

                <button onClick={handleClick}>Submit Payment</button>
            </form>
        </div>
    );
};

export default Membership;
