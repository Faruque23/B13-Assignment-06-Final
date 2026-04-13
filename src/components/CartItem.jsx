import PropTypes from 'prop-types'

export default function CartItem({ item, onRemove }) {
  const { id, name, price, period, icon } = item

  return (
    <div className="cart-item">
      <div className="cart-item-content">
        <div className="cart-item-icon">{icon}</div>
        <div className="cart-item-info">
          <h4>{name}</h4>
          <p className="cart-item-price">${price}</p>
          <p className="cart-item-period">{period}</p>
        </div>
      </div>
      <button 
        className="btn-remove"
        onClick={() => onRemove(id)}
        aria-label={`Remove ${name} from cart`}
      >
        Remove
      </button>
    </div>
  )
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    period: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
}
