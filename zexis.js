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
                "High-Rebound Midsole Foam": "Better cushioning",
                "Feather-light feel": "✔",
                "Stable and supportive at any speed":"✔",
                "Soft landing + powerful toe-off": "✔",
                "Very Durable": "✔",
                "Easy wear": "✔'
                
            }
        },
        {
            id: 2,
            name: "Zexis Performance T-Shirt",
            price: 390,
            image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQXEbMXVuX0S27fSeEneIAw5fbgcM-4h83WjmC517A1w98VGR-SuOMKnQtBDKB3wnQ_It0GERtwOTr-mGVsmE00HbIypDFKxonuJBitl4gbgKnyIl3npT08LQ",
            description: "Moisture-wicking athletic shirt",
            category: "sportswear",
            sizes: ["S", "M", "L", "XL", "XXL"],
            colors: ["White", "Black", "Navy", "Gray"],
            specs: {
                "Material": "92% Polyester, 8% Spandex",
                "Technology": "Moisture-wicking",
                "UV Protection": "UPF 50+",
                "Care": "Machine washable",
                "Stretchable": "✔",
                "Comfortable": "✔",
                "Quick Drying" : "✔"
            }
        },
        {
            id: 3,
            name: "Zexis Training Shorts",
            price: 450,
            image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQsSZb72WDnYNNm4oClSo3RnsFD_M2j27cxKDFdM9UOP5nuj0EPaRAXNifGfb_kI04PnL7pyHWRXkRAQfwS8s4hnq_mThkAFdrVqgopHJ8g-9FQexU5tFLoeXKv&usqp=CAc",
            description: "Comfortable training shorts with pockets",
            category: "sportswear",
            sizes: ["S", "M", "L", "XL", "XXL"],
            colors: ["Black", "Navy", "Gray", "Green"],
            specs: {
                "Material": "Lightweight polyester",
                "Features": "Side pockets, elastic waistband",
                "Length": "7-inch inseam",
                "Care": "Machine washable",
                "Fabric": "✔",
                "Durability": "✔",
                "Unisex": "✔"
            }
        },
        {
            id: 4,
            name: "Zexis Sports Hoodie",
            price: 1550,
            image: "data:image/jpeg;base64,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",
            description: "Warm fleece hoodie for outdoor activities",
            category: "sportswear",
            sizes: ["S", "M", "L", "XL", "XXL"],
            colors: ["Gray", "Black", "Navy", "Green"],
            specs: {
                "Material": "Cotton-polyester blend",
                "Features": "Kangaroo pocket, drawstring hood",
                "Weight": "400g",
                "Care": "Machine washable",
                "Waterproof":  "✔",
                "adjustable Hood":  "✔",
                "Convenient pockets" :  "✔",
                "Functional Fit" :  "✔"
            }
        },
        {
            id: 5,
            name: "Zexis Athletic Socks (3 pairs)",
            price: 450,
            image: "data:image/jpeg;base64,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",
            description: "Cushioned athletic socks",
            category: "sportswear",
            sizes: ["S", "M", "L"],
            colors: ["White", "Black", "Gray"],
            specs: {
                "Material": "Cotton-polyester blend",
                "Features": "Arch support, cushioned sole",
                "Pack": "3 pairs",
                "Care": "Machine washable",
                "Moisture-Wicking": "✔", 
                "Odor Control": "✔",
                "Ankle support": "✔"
                
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


                                               
