import PropTypes from 'prop-types'

/**
 * ProductCard Component
 * 
 * Displays individual product information with:
 * - Product icon/emoji
 * - Name and description
 * - Price and billing period
 * - Feature list
 * - Product badge (new, popular, best-seller)
 * - Add to cart functionality
 * 
 * @param {Object} product - Product data object
 * @param {number} product.id - Unique product identifier
 * @param {string} product.name - Product name
 * @param {string} product.description - Short product description
 * @param {number} product.price - Product price
 * @param {string} product.period - Billing period (monthly/one-time)
 * @param {string} product.icon - Product icon (emoji)
 * @param {string} product.tag - Badge label
 * @param {string} product.tagType - Badge type (best-seller/popular/new)
 * @param {Array} product.features - Array of feature strings
 * @param {Function} onAddToCart - Callback function triggered on add to cart
 */

export default function ProductCard({ product, onAddToCart }) {
  const { id, name, description, price, period, tag, tagType, features, icon } = product

  const getBadgeColor = (type) => {
    const colors = {
      'best-seller': 'bg-yellow-100 text-yellow-800',
      'popular': 'bg-purple-100 text-purple-800',
      'new': 'bg-green-100 text-green-800',
    }
    return colors[type] || ''
  }

  return (
    <div className="product-card">
      {tag && tagType && (
        <span className={`product-badge ${getBadgeColor(tagType)}`}>
          {tag}
        </span>
      )}
      <div className="product-icon">{icon}</div>
      <h3 className="product-name">{name}</h3>
      <p className="product-description">{description}</p>
      <div className="product-price">
        <span className="price-amount">${price}</span>
        <span className="price-period">/{period}</span>
      </div>
      <ul className="product-features">
        {features.map((feature, index) => (
          <li key={index}>
            <span className="feature-check">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <button 
        className="btn-primary buy-btn"
        onClick={() => onAddToCart(product)}
      >
        Buy Now
      </button>
    </div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    period: PropTypes.string.isRequired,
    tag: PropTypes.string,
    tagType: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
}

