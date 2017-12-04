import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
    handleClick = () => {
        const { id, addToCart, removeFromCart, isInCart } = this.props;

        if (isInCart) {
            removeFromCart(id);
        } else {
            addToCart(id);
        }
    }

    render() {
        const { name, author, price, currency, image, isInCart } = this.props;

        return (
            <div className="book thumbnail">
                <img src={image} alt="book" />
                <div className="caption">
                    <h3>{name}</h3>
					<h4>By {author}</h4>
                    <div className="book__price">{price} {currency}</div>
                    <div className="book__button-wrap">
                        <button
                            className={isInCart ? 'btn btn-danger' : 'btn btn-primary'}
                            onClick={this.handleClick}
                        >
                            {isInCart ? 'Remove' : 'Add to cart'}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

Book.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
    price: PropTypes.number,
    currency: PropTypes.string,
    image: PropTypes.string,
    isInCart: PropTypes.bool.isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
}

export default Book;
