import PropTypes from 'prop-types';

export default function ProductCard({ product, onAddToCart }) {
  const { id, name, description, price, period, tag, tagType, features, icon } = product;

  const getBadgeColor = (type) => {
    switch (type) {
      case 'best-seller':
        return 'bg-yellow-100 text-yellow-800';
      case 'popular':
        return 'bg-purple-100 text-purple-800';
      case 'new':
        return 'bg-green-100 text-green-800';
      default:
        return '';
    }
  };

  return (
    <div className="product-card">
      {tag && (
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
  );
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
};
