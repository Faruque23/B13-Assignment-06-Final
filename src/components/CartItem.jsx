import PropTypes from 'prop-types'

/**
 * CartItem Component
 * 
 * Displays a single item in the shopping cart with:
 * - Product icon/emoji
 * - Product name
 * - Price and billing period
 * - Remove from cart button
 * - Accessible remove button with aria-label
 * 
 * @param {Object} item - Cart item data object
 * @param {number} item.id - Unique product identifier
 * @param {string} item.name - Product name
 * @param {number} item.price - Product price
 * @param {string} item.period - Billing period (monthly/one-time)
 * @param {string} item.icon - Product icon (emoji)
 * @param {Function} onRemove - Callback function triggered on remove button click
 */

export default function CartItem({ item, onRemove }) {
  const { id, name, price, period, icon } = item

  return (
    <div className="cart-item" role="listitem">
      <div className="cart-item-content">
        <div className="cart-item-icon" aria-hidden="true">{icon}</div>
        <div className="cart-item-info">
          <h4>{name}</h4>
          <p className="cart-item-price" aria-label={`Price: $${price}`}>${price}</p>
          <p className="cart-item-period" aria-label={`Billing period: ${period}`}>{period}</p>
        </div>
      </div>
      <button 
        className="btn-remove"
        onClick={() => onRemove(id)}
        aria-label={`Remove ${name} from cart`}
        title={`Remove ${name}`}
      >
        ✕
      </button>
    </div>
  )
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
