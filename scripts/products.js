// Array de productos actualizado según la nueva carta
const products = [
    // --- Entradas ---
    {
        id: 1,
        name: "Choritos a la chalaca",
        category: "entradas",
        price: 12,
        description: "6 unidades de choritos a la chalaca.",
        image: "./images/menu/choritos-chalaca.jpg",
        available: true
    },
    {
        id: 2,
        name: "Causa de pulpa de cangrejo",
        category: "entradas",
        price: 20,
        description: "Deliciosa causa rellena de pulpa de cangrejo.",
        image: "./images/menu/causa-pulpa-cangrejo.jpg",
        available: true
    },
    {
        id: 3,
        name: "Tequeños con queso",
        category: "entradas",
        price: 10,
        description: "6 unidades de tequeños rellenos de queso.",
        image: "./images/menu/tequenos-queso.jpg",
        available: true
    },
    {
        id: 4,
        name: "Tequeños de langostinos",
        category: "entradas",
        price: 12,
        description: "6 unidades de tequeños rellenos de langostinos.",
        image: "./images/menu/tequenos-langostinos.jpg",
        available: true
    },
    {
        id: 5,
        name: "Tortitas de choclo",
        category: "entradas",
        price: 10,
        description: "4 unidades de tortitas de choclo.",
        image: "./images/menu/tortitas-choclo.jpg",
        available: true
    },

    // --- Ceviches ---
    {
        id: 10,
        name: "Ceviche carretillero",
        category: "ceviches",
        price: 23,
        description: "Fresco ceviche de toya acompañado de un crocante chicharrón de pota.",
        image: "./images/menu/ceviche-carretillero.jpg",
        available: true
    },
    {
        id: 11,
        name: "Ceviche clásico",
        category: "ceviches",
        price: 20,
        description: "Fresco ceviche de toya acompañado de sarandaja, choclo y camote.",
        image: "./images/menu/ceviche-clasico.jpg",
        available: true
    },
    {
        id: 12,
        name: "Ceviche norteño",
        category: "ceviches",
        price: 25,
        description: "Fresco ceviche de toya, zarándaja, choclo, camote y 2 tortitas.",
        image: "./images/menu/ceviche-norteno.jpg",
        available: true
    },
    {
        id: 13,
        name: "Ceviche mixto",
        category: "ceviches",
        price: 30,
        description: "Ceviche de toya, pulpo, langostinos, macha, conchas de avanico y cangrejo.",
        image: "./images/menu/ceviche-mixto.jpg",
        available: true
    },
    {
        id: 14,
        name: "Ceviche Cevive",
        category: "ceviches",
        price: 40,
        description: "Ceviche de toya, mixtura de mariscos, cangrejo y tortita de choclo.",
        image: "./images/menu/ceviche-cevive.jpg",
        available: true
    },
    {
        id: 15,
        name: "Ceviche de conchas negras",
        category: "ceviches",
        price: 35,
        description: "Pescado acompañado, sarandaja, choclo, camote, y 8 conchas negras.",
        image: "./images/menu/ceviche-conchas-negras.jpg",
        available: true
    },
    {
        id: 16,
        name: "Ceviche de caballa",
        category: "ceviches",
        price: 15,
        description: "Caballa fresca en trozos, jugo de limón, cebolla, ají limo, camote, choclo, lechuga.",
        image: "./images/menu/ceviche-caballa.jpg",
        available: true
    },
    {
        id: 17,
        name: "Ceviche de palabritas",
        category: "ceviches",
        price: 15,
        description: "Palabritas, jugo de limón, cebolla, ají limo, camote, choclo, lechuga.",
        image: "./images/menu/ceviche-palabritas.jpg",
        available: true
    },
    {
        id: 18,
        name: "Tiradito",
        category: "ceviches",
        price: 18,
        description: "Finas tiras de pescado sazonado con limón, sal y crema de ají amarillo.",
        image: "./images/menu/tiradito.jpg",
        available: true
    }
];

// Hacer el array accesible globalmente
window.restaurantProducts = products;

function renderProducts(category = 'ceviches') {
    const menuItemsContainer = document.getElementById('menu-items');
    if (!menuItemsContainer) return;

    menuItemsContainer.innerHTML = '';

    const filteredProducts = products.filter(product => product.category === category);

    if (filteredProducts.length === 0) {
        menuItemsContainer.innerHTML = `
            <div class="no-products">
                <i class="fas fa-utensils"></i>
                <p>No hay productos disponibles en esta categoría</p>
            </div>
        `;
        return;
    }

    filteredProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'menu-item';
        productElement.innerHTML = `
            <div class="item-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                ${!product.available ? '<span class="sold-out">Agotado</span>' : ''}
            </div>
            <div class="item-info">
                <h3>${product.name}</h3>
                <p class="description">${product.description}</p>
                <span class="price">S/ ${product.price.toFixed(2)}</span>
                ${product.available ? `
                <div class="item-actions">
                    <div class="quantity-control">
                        <button class="quantity-btn minus" data-id="${product.id}">-</button>
                        <input type="number" class="quantity-input" value="1" min="1" data-id="${product.id}">
                        <button class="quantity-btn plus" data-id="${product.id}">+</button>
                    </div>
                    <button class="add-to-cart" data-id="${product.id}">
                        Añadir al carrito
                    </button>
                </div>
                ` : ''}
            </div>
        `;
        menuItemsContainer.appendChild(productElement);
    });
}

function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            renderProducts(this.dataset.category);
        });
    });
}

function setupProductEvents() {
    // Evento delegado para controles de cantidad
    document.addEventListener('click', function(e) {
        // Control de cantidad
        const quantityBtn = e.target.closest('.quantity-btn');
        if (quantityBtn) {
            const input = quantityBtn.parentElement.querySelector('.quantity-input');
            let value = parseInt(input.value);
            
            if (quantityBtn.classList.contains('minus') && value > 1) {
                input.value = value - 1;
            } else if (quantityBtn.classList.contains('plus')) {
                input.value = value + 1;
            }
            return; // Salir para no procesar el clic como add-to-cart
        }
        
        // Evento para añadir al carrito
        const addToCartBtn = e.target.closest('.add-to-cart');
        if (addToCartBtn) {
            const productId = parseInt(addToCartBtn.dataset.id);
            const product = window.restaurantProducts.find(p => p.id === productId);
            
            if (product) {
                const quantityInput = addToCartBtn.closest('.item-actions').querySelector('.quantity-input');
                const quantity = parseInt(quantityInput.value) || 1;
                
                // Disparar evento personalizado con la cantidad correcta
                const event = new CustomEvent('productAddedToCart', {
                    detail: { product, quantity }
                });
                document.dispatchEvent(event);
                
                // Mostrar feedback visual
                const notification = document.createElement('div');
                notification.className = 'add-to-cart-feedback';
                notification.textContent = `+${quantity}`;
                addToCartBtn.appendChild(notification);
                
                setTimeout(() => {
                    notification.remove();
                }, 1000);
            }
        }
    });
}

function initProducts() {
    renderProducts('ceviches');
    setupFilters();
    setupProductEvents();
}

document.addEventListener('DOMContentLoaded', initProducts);