// Product Data
const products = {
    sportswear: [
        {
            id: 1,
            name: "Zexis Pro Running Shoes",
            price: 1280,
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
            description: "Premium running shoes with advanced cushioning",
            category: "sportswear",
            sizes: ["7", "8", "9", "10", "11"],
            colors: ["Black/White", "Blue/Gray", "Red/Black"],
            specs: {
                "Material": "Breathable mesh upper",
                "Sole": "Rubber outsole with grip pattern",
                "Cushioning": "EVA midsole",
                "Weight": "280g per shoe",
                "Electrictity Consumption": "None - Manual operation",
                "Warranty": "6 months"
            }
        },
        {
            id: 2,
            name: "Zexis Performance T-Shirt",
            price: 890,
            image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
            description: "Moisture-wicking athletic shirt",
            category: "sportswear",
            sizes: ["S", "M", "L", "XL", "XXL"],
            colors: ["White", "Black", "Navy", "Gray"],
            specs: {
                "Material": "92% Polyester, 8% Spandex",
                "Technology": "Moisture-wicking",
                "UV Protection": "UPF 50+",
                "Care": "Machine washable",
                "Electrictity Consumption": "None - Manual operation",
                "Warranty": "3 months"
            }
        },
        {
            id: 3,
            name: "Zexis Training Shorts",
            price: 1250,
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400",
            description: "Comfortable training shorts with pockets",
            category: "sportswear",
            sizes: ["S", "M", "L", "XL", "XXL"],
            colors: ["Black", "Navy", "Gray", "Green"],
            specs: {
                "Material": "Lightweight polyester",
                "Features": "Side pockets, elastic waistband",
                "Length": "7-inch inseam",
                "Care": "Machine washable",
                "Electrictity Consumption": "None - Manual operation",
                "Warranty": "3 months"
            }
        },
        {
            id: 4,
            name: "Zexis Sports Hoodie",
            price: 1850,
            image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400",
            description: "Warm fleece hoodie for outdoor activities",
            category: "sportswear",
            sizes: ["S", "M", "L", "XL", "XXL"],
            colors: ["Gray", "Black", "Navy", "Green"],
            specs: {
                "Material": "Cotton-polyester blend",
                "Features": "Kangaroo pocket, drawstring hood",
                "Weight": "400g",
                "Care": "Machine washable",
                "Electrictity Consumption": "None - Manual operation",
                "Warranty": "3 months"
            }
        },
        {
            id: 5,
            name: "Zexis Athletic Socks (3 pairs)",
            price: 450,
            image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400",
            description: "Cushioned athletic socks",
            category: "sportswear",
            sizes: ["S", "M", "L"],
            colors: ["White", "Black", "Gray"],
            specs: {
                "Material": "Cotton-polyester blend",
                "Features": "Arch support, cushioned sole",
                "Pack": "3 pairs",
                "Care": "Machine washable",
                "Electrictity Consumption": "None - Manual operation",
                "Warranty": "1 month"
            }
        }
    ],
    household: [
        {
            id: 6,
            name: "Zexis AI Floor Cleaner Bot",
            price: 8500,
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
            description: "Smart AI-powered floor cleaning robot",
            category: "household",
            specs: {
                "Battery Life": "120 minutes",
                "Charging Time": "4 hours",
                "Coverage": "2000 sq ft per charge",
                "AI Features": "Smart mapping, obstacle detection",
                "Noise Level": "55 dB",
                "Electrictity Consumption": "25W operating, 5W standby",
                "Warranty": "1 year",
                "App Control": "iOS/Android compatible"
            }
        },
        {
            id: 7,
            name: "Zexis AI Speaker Pro",
            price: 4200,
            image: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=400",
            description: "AI-powered smart speaker with voice control",
            category: "household",
            specs: {
                "Power Output": "30W",
                "Connectivity": "WiFi, Bluetooth 5.0",
                "Voice Assistant": "Built-in AI assistant",
                "Battery": "8 hours playback",
                "Electrictity Consumption": "25W operating, 2W standby",
                "Warranty": "1 year",
                "Features": "Multi-room audio, smart home control"
            }
        },
        {
            id: 8,
            name: "Zexis Smart Air Purifier",
            price: 6800,
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
            description: "HEPA air purifier with AI air quality monitoring",
            category: "household",
            specs: {
                "Coverage": "500 sq ft",
                "Filter Type": "True HEPA H13",
                "CADR": "350 m³/h",
                "Noise Level": "35-55 dB",
                "Electrictity Consumption": "45W operating, 5W standby",
                "Warranty": "1 year",
                "Smart Features": "Air quality display, app control"
            }
        },
        {
            id: 9,
            name: "Zexis Smart LED Bulb (4-pack)",
            price: 1850,
            image: "https://images.unsplash.com/photo-1565636192335-f2e4b8f9c0a9?w=400",
            description: "WiFi-enabled color-changing LED bulbs",
            category: "household",
            specs: {
                "Wattage": "9W equivalent to 60W",
                "Colors": "16 million colors",
                "Lifespan": "25,000 hours",
                "Connectivity": "WiFi 2.4GHz",
                "Electrictity Consumption": "9W per bulb",
                "Warranty": "2 years",
                "Features": "Voice control, scheduling"
            }
        },
        {
            id: 10,
            name: "Zexis Smart Plug (2-pack)",
            price: 950,
            image: "https://images.unsplash.com/photo-1589256469033-5c26d37536b1?w=400",
            description: "WiFi smart plugs with timer and voice control",
            category: "household",
            specs: {
                "Max Load": "10A",
                "Voltage": "220-240V",
                "Connectivity": "WiFi 2.4GHz",
                "Features": "Timer, schedule, remote control",
                "Electrictity Consumption": "1W standby",
                "Warranty": "1 year",
                "App": "iOS/Android compatible"
            }
        }
    ],
    perfume: [
        {
            id: 11,
            name: "Zexis Essence Pour Homme",
            price: 2850,
            image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400",
            description: "Sophisticated woody aromatic fragrance",
            category: "perfume",
            specs: {
                "Size": "100ml",
                "Concentration": "Eau de Parfum",
                "Top Notes": "Bergamot, Lemon, Pepper",
                "Heart Notes": "Lavender, Geranium, Jasmine",
                "Base Notes": "Sandalwood, Cedarwood, Musk",
                "Longevity": "8-10 hours",
                "Electrictity Consumption": "None - Manual operation",
                "Warranty": "6 months"
            }
        },
        {
            id: 12,
            name: "Zexis Night Elite",
            price: 3200,
            image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400",
            description: "Bold and mysterious evening fragrance",
            category: "perfume",
            specs: {
                "Size": "100ml",
                "Concentration": "Eau de Parfum",
                "Top Notes": "Black Pepper, Grapefruit",
                "Heart Notes": "Leather, Cinnamon",
                "Base Notes": "Oud, Amber, Vanilla",
                "Longevity": "10-12 hours",
                "Electrictity Consumption": "None - Manual operation",
                "Warranty": "6 months"
            }
        },
        {
            id: 13,
            name: "Zexis Sport Fresh",
            price: 1850,
            image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400",
            description: "Energizing citrus sporty fragrance",
            category: "perfume",
            specs: {
                "Size": "100ml",
                "Concentration": "Eau de Toilette",
                "Top Notes": "Lemon, Mint, Ginger",
                "Heart Notes": "Apple, Sage",
                "Base Notes": "Musk, Cedar",
                "Longevity": "6-8 hours",
                "Electrictity Consumption": "None - Manual operation",
                "Warranty": "6 months"
            }
        },
        {
            id: 14,
            name: "Zexis Classic Gentleman",
            price: 3500,
            image: "https://images.unsplash.com/photo-1560421683-6856ea585c78?w=400",
            description: "Timeless elegant masculine scent",
            category: "perfume",
            specs: {
                "Size": "100ml",
                "Concentration": "Eau de Parfum",
                "Top Notes": "Bergamot, Orange Blossom",
                "Heart Notes": "Rose, Jasmine",
                "Base Notes": "Patchouli, Oakmoss",
                "Longevity": "12+ hours",
                "Electrictity Consumption": "None - Manual operation",
                "Warranty": "6 months"
            }
        },
        {
            id: 15,
            name: "Zexis Aqua Blue",
            price: 2100,
            image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400",
            description: "Fresh aquatic marine fragrance",
            category: "perfume",
            specs: {
                "Size": "100ml",
                "Concentration": "Eau de Toilette",
                "Top Notes": "Sea Salt, Marine Notes",
                "Heart Notes": "Seaweed, Juniper",
                "Base Notes": "Musk, Ambergris",
                "Longevity": "6-8 hours",
                "Electrictity Consumption": "None - Manual operation",
                "Warranty": "6 months"
            }
        }
    ]
};

// Cart and Orders
let cart = [];
let orders = [];

// DOM Elements
const cartIcon = document.querySelector('.cart-icon');
const cartModal = document.getElementById('cart-modal');
const checkoutModal = document.getElementById('checkout-modal');
const productModal = document.getElementById('product-modal');
const ordersModal = document.getElementById('orders-modal');
const myOrdersBtn = document.getElementById('my-orders-btn');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    setupEventListeners();
});

function renderProducts() {
    // Sportswear
    const sportswearContainer = document.getElementById('sportswear-products');
    products.sportswear.forEach(product => {
        sportswearContainer.appendChild(createProductCard(product));
    });

    // Household
    const householdContainer = document.getElementById('household-products');
    products.household.forEach(product => {
        householdContainer.appendChild(createProductCard(product));
    });

    // Perfume
    const perfumeContainer = document.getElementById('perfume-products');
    products.perfume.forEach(product => {
        perfumeContainer.appendChild(createProductCard(product));
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-price">₱${product.price.toLocaleString()}</p>
            <p class="product-description">${product.description}</p>
            <div class="product-actions">
                <div class="quantity-control">
                    <button class="quantity-btn" onclick="updateQuantity(${product.id}, -1)">-</button>
                    <span id="qty-${product.id}">1</span>
                    <button class="quantity-btn" onclick="updateQuantity(${product.id}, 1)">+</button>
                </div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    <i class="fas fa-cart-plus"></i> Add to Cart
                </button>
            </div>
        </div>
    `;
    
    card.addEventListener('click', function(e) {
        if (!e.target.closest('.product-actions')) {
            showProductDetail(product);
        }
    });
    
    return card;
}

function updateQuantity(productId, change) {
    const qtyElement = document.getElementById(`qty-${productId}`);
    let currentQty = parseInt(qtyElement.textContent);
    currentQty = Math.max(1, currentQty + change);
    qtyElement.textContent = currentQty;
}

function addToCart(productId) {
    const qty = parseInt(document.getElementById(`qty-${productId}`).textContent);
    const product = findProductById(productId);
    
    if (product) {
        const cartItem = {
            ...product,
            quantity: qty,
            selectedSize: product.sizes ? product.sizes[0] : null,
            selectedColor: product.colors ? product.colors[0] : null,
            id: Date.now() // Unique ID for cart item
        };
        cart.push(cartItem);
        updateCartDisplay();
        showNotification('Product added to cart!');
    }
}

function findProductById(id) {
    for (let category in products) {
        const product = products[category].find(p => p.id === id);
        if (product) return product;
    }
    return null;
}

function showProductDetail(product) {
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
        <div class="product-detail">
            <img src="${product.image}" alt="${product.name}" class="product-detail-image">
            <div class="product-detail-info">
                <h3>${product.name}</h3>
                <p class="product-detail-price">₱${product.price.toLocaleString()}</p>
                <p>${product.description}</p>
                
                <div class="product-specs">
                    <h4>Specifications:</h4>
                    <ul>
                        ${Object.entries(product.specs).map(([key, value]) => 
                            `<li><strong>${key}:</strong> ${value}</li>`
                        ).join('')}
                    </ul>
                </div>
                
                ${product.sizes ? `
                    <div class="size-color-options">
                        <label>Size:</label>
                        <select id="detail-size">
                            ${product.sizes.map(size => `<option value="${size}">${size}</option>`).join('')}
                        </select>
                    </div>
                ` : ''}
                
                ${product.colors ? `
                    <div class="size-color-options">
                        <label>Color:</label>
                        <select id="detail-color">
                            ${product.colors.map(color => `<option value="${color}">${color}</option>`).join('')}
                        </select>
                    </div>
                ` : ''}
                
                <div class="quantity-control" style="margin: 1rem 0;">
                    <button class="quantity-btn" onclick="updateDetailQuantity(-1)">-</button>
                    <span id="detail-qty">1</span>
                    <button class="quantity-btn" onclick="updateDetailQuantity(1)">+</button>
                </div>
                
                <button class="add-to-cart" onclick="addToCartFromDetail(${product.id})">
                    <i class="fas fa-cart-plus"></i> Add to Cart
                </button>
            </div>
        </div>
    `;
    
    productModal.style.display = 'block';
}

let detailQuantity = 1;

function updateDetailQuantity(change) {
    detailQuantity = Math.max(1, detailQuantity + change);
    document.getElementById('detail-qty').textContent = detailQuantity;
}

function addToCartFromDetail(productId) {
    const product = findProductById(productId);
    const size = document.getElementById('detail-size')?.value || null;
    const color = document.getElementById('detail-color')?.value || null;
    
    if (product) {
        const cartItem = {
            ...product,
            quantity: detailQuantity,
            selectedSize: size,
            selectedColor: color,
            id: Date.now()
        };
        cart.push(cartItem);
        updateCartDisplay();
        showNotification('Product added to cart!');
        productModal.style.display = 'none';
        detailQuantity = 1;
    }
}

function setupEventListeners() {
    // Cart icon click
    cartIcon.addEventListener('click', showCart);
    
    // Modal close buttons
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });
    
    // My orders button
    myOrdersBtn.addEventListener('click', showOrders);
    
    // Checkout button
    document.getElementById('checkout-btn').addEventListener('click', showCheckout);
    
    // Payment method selection
    document.querySelectorAll('.payment-option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.payment-option').forEach(o => o.classList.remove('selected'));
            this.classList.add('selected');
            showPaymentForm(this.dataset.method);
        });
    });
}

function showCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty</p>';
    } else {
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-details">
                        ${item.selectedSize ? `Size: ${item.selectedSize}<br>` : ''}
                        ${item.selectedColor ? `Color: ${item.selectedColor}<br>` : ''}
                        ₱${item.price.toLocaleString()} each
                    </div>
                </div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateCartItemQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateCartItemQuantity(${item.id}, 1)">+</button>
                </div>
                <div>
                    ₱${(item.price * item.quantity).toLocaleString()}
                </div>
                <button onclick="removeFromCart(${item.id})" style="background: #ff6b6b; color: white; border: none; padding: 0.5rem; border-radius: 5px;">
                    <i class="fas fa-trash"></i>
                </button>
            `;
            cartItems.appendChild(cartItem);
        });
    }
    
    updateCartTotal();
    cartModal.style.display = 'block';
}

function updateCartItemQuantity(itemId, change) {
    const item = cart.find(item => item.id === itemId);
    if (item) {
        item.quantity = Math.max(1, item.quantity + change);
        showCart();
    }
}


function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCartDisplay();
    showCart();
} 

function updateCartDisplay() {
    const cartCount = document.querySelector('.cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('cart-total').textContent = total.toLocaleString();
}

function showCheckout() {
    cartModal.style.display = 'none';
    checkoutModal.style.display = 'block';
}

function showPaymentForm(method) {
    const paymentForm = document.getElementById('payment-form');
    
    switch(method) {
        case 'gcash':
            paymentForm.innerHTML = `
                <div class="payment-form">
                <h4>GCash Payment</h4>
                    <div class="form-group">
                        <label>GCash Number:</label>
                        <input type="text" placeholder="09XX XXX XXXX" id="gcash-number">
                    </div>
                    <div class="form-group">
                        <label>Account Name:</label>
                        <input type="text" placeholder="Juan Dela Cruz" id="gcash-name">
                    </div>
                    <div class="form-group">
                        <label>Amount:</label>
                        <input type="text" value="₱${cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toLocaleString()}" readonly>
                    </div>
                    <button class="checkout-btn" onclick="processPayment('gcash')">
                        Pay with GCash
                        </button>
                </div>
            `;
            break;
        case 'card':
            paymentForm.innerHTML = `
                <div class="payment-form">
                    <h4>Credit/Debit Card</h4>
                    <div class="form-group">
                        <label>Card Number:</label>
                        <input type="text" placeholder="1234 5678 9012 3456" id="card-number">
                    </div>
                    <div class="form-group">
                        <label>Cardholder Name:</label>
                        <input type="text" placeholder="JUAN DELA CRUZ" id="card-name">
                    </div>
                    <div class="form-group">
                        <label>Expiry Date:</label>
                        <input type="text" placeholder="MM/YY" id="card-expiry">
                    </div>
                    <div class="form-group">
                        <label>CVV:</label>
                        <input type="text" placeholder="123" id="card-cvv">
                    </div>
                    <button class="checkout-btn" onclick="processPayment('card')">
                        Pay with Card
                    </button>
                </div>
            `;
            break;
        case 'cod':
            paymentForm.innerHTML = `
                <div class="payment-form">
                    <h4>Cash on Delivery</h4>
                    <div class="form-group">
                        <label>Full Name:</label>
                        <input type="text" placeholder="Juan Dela Cruz" id="cod-name">
                    </div>
                    <div class="form-group">
                        <label>Delivery Address:</label>
                        <input type="text" placeholder="123 Main St, Barangay, City" id="cod-address">
                    </div>
                    <div class="form-group">
                        <label>Contact Number:</label>
                        <input type="text" placeholder="09XX XXX XXXX" id="cod-contact">
                    </div>
                    <div class="form-group">
                        <label>Amount to Pay:</label>
                        <input type="text" value="₱${cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toLocaleString()}" readonly>
                    </div>
                    <button class="checkout-btn" onclick="processPayment('cod')">
                        Place Order
                    </button>
                </div>
            `;
            break;
    }
}

function processPayment(method) {
    // This is just a demo, so we'll create an order
    const order = {
        id: Date.now(),
        items: [...cart],
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        paymentMethod: method,
        status: 'pending',
        date: new Date().toLocaleString(),
        orderNumber: 'ZX' + Date.now().toString().slice(-6)
    };
    
    orders.push(order);
    cart = [];
    updateCartDisplay();
    
    checkoutModal.style.display = 'none';
    
    alert(`Thanks for your order! This is only a demo store.\nOrder Number: ${order.orderNumber}\nTotal: ₱${order.total.toLocaleString()}`);
}

function showOrders() {
    const ordersList = document.getElementById('orders-list');
    ordersList.innerHTML = '';
    
    if (orders.length === 0) {
        ordersList.innerHTML = '<p>No orders yet</p>';
    } else {
        orders.forEach(order => {
            const orderDiv = document.createElement('div');
            orderDiv.className = 'order-item';
            orderDiv.innerHTML = `
                <div class="order-header">
                    <div>
                        <strong>Order #${order.orderNumber}</strong><br>
                        ${order.date}
                    </div>
                    <div class="order-status ${order.status}">${order.status.toUpperCase()}</div>
                </div>
                <div>
                    ${order.items.map(item => `
                        <div class="order-item-details">
                            <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 5px;">
                            <div>
                                <strong>${item.name}</strong><br>
                                Qty: ${item.quantity} × ₱${item.price.toLocaleString()}
                                ${item.selectedSize ? `<br>Size: ${item.selectedSize}` : ''}
                                ${item.selectedColor ? `<br>Color: ${item.selectedColor}` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div style="text-align: right; margin-top: 1rem;">
                    <strong>Total: ₱${order.total.toLocaleString()}</strong><br>
                    <small>Payment: ${order.paymentMethod.toUpperCase()}</small>
                </div>
                ${order.status === 'pending' ? `
                    <button class="cancel-order" onclick="cancelOrder(${order.id})">
                        Cancel Order
                    </button>
                ` : ''}
            `;
            ordersList.appendChild(orderDiv);
        });
    }
    
    ordersModal.style.display = 'block';
}

function cancelOrder(orderId) {
    if (confirm('Are you sure you want to cancel this order?')) {
        const order = orders.find(o => o.id === orderId);
        if (order) {
            order.status = 'cancelled';
            showOrders();
            showNotification('Order cancelled successfully');
        }
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4ecdc4;
        color: white;
        padding: 1rem 2rem;
        border-radius: 5px;
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Close modals when clicking outside
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); }
        to { transform: translateX(0); }
    }
`;
document.head.appendChild(style);


                                               
