function Products() {
  const menuItems = [
    {
      id: 1,
      name: "Classic Fried Chicken",
      description: "Our signature crispy fried chicken with secret blend of herbs and spices",
      price: "$12.99",
      image: "🍗",
      category: "Main"
    },
    {
      id: 2,
      name: "Spicy Buffalo Wings",
      description: "Tender chicken wings tossed in our house buffalo sauce",
      price: "$10.99",
      image: "🌶️",
      category: "Wings"
    },
    {
      id: 3,
      name: "Chicken Sandwich",
      description: "Crispy chicken breast with lettuce, tomato, and mayo on a brioche bun",
      price: "$8.99",
      image: "🥪",
      category: "Sandwiches"
    },
    {
      id: 4,
      name: "Chicken Tenders",
      description: "Hand-breaded chicken tenders served with your choice of dipping sauce",
      price: "$9.99",
      image: "🍖",
      category: "Main"
    },
    {
      id: 5,
      name: "BBQ Chicken Wings",
      description: "Smoky BBQ glazed wings that are finger-licking good",
      price: "$10.99",
      image: "🍖",
      category: "Wings"
    },
    {
      id: 6,
      name: "Chicken Caesar Wrap",
      description: "Grilled chicken, romaine lettuce, parmesan, and caesar dressing in a tortilla",
      price: "$7.99",
      image: "🌯",
      category: "Sandwiches"
    },
    {
      id: 7,
      name: "Chicken & Waffles",
      description: "Crispy fried chicken served with golden waffles and maple syrup",
      price: "$13.99",
      image: "🧇",
      category: "Specialty"
    },
    {
      id: 8,
      name: "Honey Mustard Wings",
      description: "Sweet and tangy honey mustard glazed wings",
      price: "$10.99",
      image: "🍯",
      category: "Wings"
    }
  ]

  const categories = ["All", "Main", "Wings", "Sandwiches", "Specialty"]

  return (
    <div className="products">
      <div className="container">
        <div className="page-header">
          <h1>Our Menu</h1>
          <p>Discover our delicious selection of chicken dishes</p>
        </div>

        <div className="menu-categories">
          {categories.map(category => (
            <button key={category} className="category-btn">
              {category}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {menuItems.map(item => (
            <div key={item.id} className="menu-item">
              <div className="menu-item-image">
                <span className="item-emoji">{item.image}</span>
              </div>
              <div className="menu-item-content">
                <div className="menu-item-header">
                  <h3>{item.name}</h3>
                  <span className="price">{item.price}</span>
                </div>
                <p className="menu-item-description">{item.description}</p>
                <div className="menu-item-footer">
                  <span className="category-tag">{item.category}</span>
                  <button className="add-to-cart-btn">Add to Order</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="order-info">
          <h2>Ready to Order?</h2>
          <p>Call us at (555) 123-CHICK or visit our location at 123 Main Street</p>
          <div className="order-buttons">
            <button className="btn btn-primary">Call to Order</button>
            <button className="btn btn-secondary">View Location</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
