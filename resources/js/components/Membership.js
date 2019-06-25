import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Membership = () => {
    const [stripe, setStripe] = useState(Stripe('pk_test_FakM84nEUfKPZFFI8dAEDfyf00WqcOJr8E'));
    const [card, setCard] = useState(null);
    useEffect(() => {
        var elems = document.querySelectorAll('.modal');
        var instances = M.Modal.init(elems);

        instances[0].close();
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
                        .then(
                            json => {
                                window.location.href = '/';
                            },
                            reason => console.log(reason)
                        );
                },
                reason => {
                    console.log(reason);
                }
            );
    };
    return (
        <div id="membership-page" className="container">
            <h2>Memberships</h2>
            <div className="row">
                <div className="col s3 offset-s4">
                    <div className="card medium">
                        <div className="card-image">
                            <img src="https://picsum.photos/200/300" />
                            <span className="card-title">Gold Membership</span>
                        </div>
                        <div className="card-content">
                            <p>
                                now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in
                                their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected
                                humour and the like)
                            </p>
                        </div>
                        <div className="card-action">
                            <button data-target="modal1" class="btn modal-trigger">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="modal1" class="modal">
                <div class="modal-content">
                    {/**TODO: Show a different message if a person that is not logged in */}
                    <form id="payment-form">
                        <div className="form-row">
                            <label htmlFor="card-element">Credit or debit card</label>
                            <div id="card-element" />

                            <div id="card-errors" role="alert" />
                        </div>

                        <button className="waves-effect waves-light btn" onClick={handleClick}>
                            Submit Payment
                        </button>
                    </form>
                </div>
                <div class="modal-footer">
                    <a href="#!" class="modal-close waves-effect waves-green btn-flat">
                        Cancel
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Membership;
