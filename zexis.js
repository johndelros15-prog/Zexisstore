// Product Data
const products = {
    sportswear: [
        {
            id: 1,
            name: "Zexis Pro Running Shoes",
            price: 999,
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
                "Easy wear": "✔"
            }
            },

             {
            id: 1,
            name: "Zexis Sports Watch",
            price: 3199,
            image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTw-658lX52Fkb1RU-pbBOsBx5sqjMbDRzU5kc0zchsAbTtyhmwUXDHaObjWsrXVICan1vXpu6B5iVeV6HxuhVQX1iBwdf2JM6boe5VIz6R231hZYF4FurfIA",
            description: "Premium Sports watch with many features",
            category: "sportswear",
            sizes: [" 28mm", "36mm ", "38mm ", "40mm ", "46mm "],
            colors: ["Black", "Army Green", "Gray"],
            specs: {
                "Material": "titanium, stainless steel, and ceramic, with the display almost exclusively protected by a sapphire crystal.",
                "Battery Life ": "3-5 days",
                "Charging time" : "2 hours",
                "Weight": "64g to over 90g",
                "SmartPhone Features" : "✔",
                "Advance Gps and Navigation": "✔",
                "Fitness Tracking": "✔",
                "Specialized Sport Modes": "✔",
                "Durability": "✔",
                "Easy wear": "✔"
                
            }
        },
        {
            id: 2,
            name: "Zexis Performance T-Shirt",
            price: 299,
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
            price: 349,
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
            price: 1199,
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
            price: 300,
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
            price: 5500,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlpENRCB0nzgdJ3fBBW7G2VpXpHSzGHpfYSg&s",
            description: "Smart AI-powered floor cleaning robot",
            category: "household",
            specs: {
                "Battery Life": "120 minutes",
                "Charging Time": "4 hours",
                "Coverage": "2000 sq ft per charge",
                "AI Features": "Smart mapping, obstacle detection",
                "Noise Level": "10 dB",
                "Electrictity Consumption": "25W operating, 5W standby",
                "Warranty": "1 year",
                "App Control": "iOS/Android compatible",
                "Cleaning features" : "Frontsweep, middle vacuum, back mop",
                "Professional grade noise reduction just work without disturbing": "✔"
            }
        },
        {
            id: 7,
            name: "Zexis AI Speaker Pro",
            price: 3200,
            image: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=400",
            description: "AI-powered smart speaker with voice control",
            category: "household",
            specs: {
                "Quantity" : "2 sets per order",
                "Power Output": "30W",
                "Connectivity": "WiFi, Bluetooth 5.0",
                "Voice Assistant": "Built-in AI assistant",
                "Battery": "8 hours playback",
                "Electrictity Consumption": "25W operating, 2W standby",
                "Warranty": "1 year",
                "Features": "Multi-room audio, smart home control",
                "Flagship sound quality": "✔",
                "Supports Aux" : "✔",
                "App remote control operated" : "✔"
                
            }
        },
        {
            id: 8,
            name: "Zexis Smart Air Purifier",
            price: 4800,
            image: "https://smartairfilters.com/wordpress/wp-content/uploads/sites/8/2020/12/sqair-clean-air-never-looked-so-good-daraz-bangladesh-square.jpg",
            description: "HEPA air purifier with AI air quality monitoring",
            category: "household",
            specs: {
                "Coverage": "500 sq ft",
                "Filter Type": "True HEPA H13",
                "CADR": "350 m³/h",
                "Noise Level": "5 dB",
                "Electrictity Consumption": "45W operating, 5W standby",
                "Warranty": "1 year",
                "Smart Features": "Air quality display, app control",
                "Eliminates" : "Smoke, Odor, bacterias",
                "Kills Viruses" : "✔",
                "Recommended in Hospitals clinics" : "✔"
                
            }
        },
        {
            id: 9,
            name: "Zexis Smart LED Bulb (4-pack)",
            price: 999,
            image: "data:image/jpeg;base64,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",
            description: "WiFi-enabled color-changing LED bulbs",
            category: "household",
            specs: {
                "Wattage": "9W equivalent to 60W",
                "Colors": "16 million colors",
                "Lifespan": "25,000 hours",
                "Connectivity": "WiFi 2.4GHz",
                "Electrictity Consumption": "9W per bulb",
                "Warranty": "2 years",
                "Features": "Voice control, scheduling",
                "Clap turn on-off function" : "✔",
                "Adjustable color temperature" : "✔",
                "Phone enabled conrtols" : "✔"
            }
        },
        {
            id: 10,
            name: "Zexis Smart Plug (2-pack)",
            price: 650,
            image: "https://ph.ecoflow.com/cdn/shop/files/ecoflow-smart-plug-51054392508759_869a3342-b13b-41e6-9c27-883b3e5ac927_720x.png?v=1722323097",
            description: "WiFi smart plugs with timer and voice control",
            category: "household",
            specs: {
                "Max Load": "10A",
                "Voltage": "220-240V",
                "Connectivity": "WiFi and Bluetooth",
                "Features": "Timer, schedule, remote control",
                "Electrictity Consumption": "1W standby",
                "Warranty": "1 year",
                "App": "iOS/Android compatible",
                "Adjustable Charging speed" : "✔",
                "Voice controls" : "✔"           
            }
        }
    ],
    perfume: [
        {
            id: 11,
            name: "Zexis Essence Pour Homme",
            price: 285,
            image: "https://m.media-amazon.com/images/I/518S-ni0fPL._AC_UF350,350_QL80_.jpg",
            description: "Sophisticated woody aromatic fragrance",
            category: "perfume",
            specs: {
                "Size": "100ml",
                "Concentration": "Eau de Parfum",
                "Top Notes": "Bergamot, Lemon, Pepper",
                "Heart Notes": "Lavender, Geranium, Jasmine",
                "Base Notes": "Sandalwood, Cedarwood, Musk",
                "Longevity": "9-16 hours"
            }
        },
        {
            id: 12,
            name: "Zexis Night Elite",
            price: 499,
            image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400",
            description: "Bold and mysterious evening fragrance",
            category: "perfume",
            specs: {
                "Size": "110ml",
                "Concentration": "Eau de Parfum",
                "Top Notes": "Black Pepper, Grapefruit",
                "Heart Notes": "Leather, Cinnamon",
                "Base Notes": "Oud, Amber, Vanilla",
                "Longevity": "10-12 hours"
            }
        },
        {
            id: 13,
            name: "Zexis Sport Fresh",
            price: 350,
            image: "data:image/jpeg;base64,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",
            description: "Energizing citrus sporty fragrance",
            category: "perfume",
            specs: {
                "Size": "100ml",
                "Concentration": "Eau de Toilette",
                "Top Notes": "Lemon, Mint, Ginger",
                "Heart Notes": "Apple, Sage",
                "Base Notes": "Musk, Cedar",
                "Longevity": "6-8 hours"
               
            }
        },
        {
            id: 14,
            name: "Zexis Classic Gentleman",
            price: 699,
            image: "data:image/jpeg;base64,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",
            description: "Timeless elegant masculine scent",
            category: "perfume",
            specs: {
                "Size": "100ml",
                "Concentration": "Eau de Parfum",
                "Top Notes": "Bergamot, Orange Blossom",
                "Heart Notes": "Rose, Jasmine",
                "Base Notes": "Patchouli, Oakmoss",
                "Longevity": "12 + hours"                
            }
        },
        {
            id: 15,
            name: "Zexis Aqua Blue",
            price: 400,
            image: "data:image/jpeg;base64,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",
            description: "Fresh aquatic marine fragrance",
            category: "perfume",
            specs: {
                "Size": "100ml",
                "Concentration": "Eau de Toilette",
                "Top Notes": "Sea Salt, Marine Notes",
                "Heart Notes": "Seaweed, Juniper",
                "Base Notes": "Musk, Ambergris",
                "Longevity": "6-8 hours"              
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


                                               
