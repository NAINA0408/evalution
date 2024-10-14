const products = [
    // Place the product array here...
  ];
  
  const reviews = [
    // Place the review array here...
  ];
  
  document.addEventListener("DOMContentLoaded", () => {
      renderProducts(products);
      updateCartCount();
  });
  
  function renderProducts(products) {
      const productContainer = document.getElementById('product-list');
      productContainer.innerHTML = '';
  
      products.forEach((product) => {
          const productCard = document.createElement('div');
          productCard.classList.add('product-card');
  
          // Calculate average rating
          const avgRating = calculateAverageRating(product.id);
  
          productCard.innerHTML = `
              <div class="image-slider">
                  <button onclick="changeImage(${product.id}, -1)">Previous</button>
                  <img src="${product.images[0]}" id="product-image-${product.id}" alt="${product.title}">
                  <button onclick="changeImage(${product.id}, 1)">Next</button>
              </div>
              <h3>${product.title}</h3>
              <p>${product.description}</p>
              <p>Price: $${product.price} <span class="strike">$${product.strikePrice}</span></p>
              <p>Available Quantity: ${product.quantity}</p>
              <p>Category: ${product.category}</p>
              <p>Rating: ${avgRating}</p>
              <button onclick="addToCart(${product.id})">Add to Cart</button>
              <button onclick="viewDetails(${product.id})">View Details</button>
          `;
          
          productContainer.appendChild(productCard);
      });
  }
  
  function calculateAverageRating(productId) {
      const productReviews = reviews.filter(review => review.productId === productId);
      const totalRating = productReviews.reduce((sum, review) => sum + review.rating, 0);
      return productReviews.length ? (totalRating / productReviews.length).toFixed(1) : "No ratings";
  }
  
  function addToCart(productId) {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.push(productId);
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartCount();
  }
  
  function updateCartCount() {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      document.getElementById('cart-count').textContent = cart.length;
  }
  
  function sortProducts() {
      // Sorting logic here...
  }
  
  function filterProducts() {
      // Filtering logic here...
  }
  
  function searchProducts() {
      // Search logic here...
  }
  
  function viewDetails(productId) {
      const product = products.find(p => p.id === productId);
      if (product) {
          localStorage.setItem('selectedProduct', JSON.stringify(product));
          window.location.href = 'product.html';
      }
  }
  
  function changeImage(productId, direction) {
      const product = products.find(p => p.id === productId);
      const imageElement = document.getElementById(`product-image-${productId}`);
      const currentSrc = imageElement.src;
      const currentIndex = product.images.indexOf(currentSrc);
      const newIndex = (currentIndex + direction + product.images.length) % product.images.length;
      imageElement.src = product.images[newIndex];
  }
  
  document.addEventListener("DOMContentLoaded", () => {
      const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));
      if (selectedProduct) {
          displayProductDetails(selectedProduct);
      }
  });
  
  function displayProductDetails(product) {
      // Populate product details in product.html
  }
  