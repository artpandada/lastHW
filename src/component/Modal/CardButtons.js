function CardButtons() {
    return (
        <div className="cart-buttons">
            <div className="cart-buttons__buttons btn-group">
                <div className="cart-buttons__info">
                    <span className="cart-buttons__info-text">total</span>
                    <span className="cart-buttons__info-price">€55.00</span>
                </div>
                <button
                    type="submit"
                    className="cart-buttons__button btn-group__button button"
                >
                    order
                </button>
            </div>
        </div>
    )
}

export default CardButtons;