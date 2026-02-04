// Array de productos actualizado según la nueva carta
const products = [
    // --- Ceviches ---
    {
        id: 1,
        name: "Leche de tigre",
        category: "ceviches",
        price: 20,
        description: "Trozos de pescado blanco, choclo, cancha, chifles y chicharrón de pota.",
        image: "./images/menu/leche-de-tigre.jpg",
        available: true
    },
    {
        id: 2,
        name: "Ceviche carretillero de pescado",
        category: "ceviches",
        price: 25,
        description: "Pescado blanco, choclo, camote, chicharrón de pota y chifles.",
        image: "./images/menu/ceviche-carretillero-de-pescado.jpg",
        available: true
    },
    {
        id: 3,
        name: "Ceviche carretillero de pota",
        category: "ceviches",
        price: 17,
        description: "Pota fresca, choclo, camote, chicharrón de pota y chifles.",
        image: "./images/menu/ceviche-carretillero-de-pota.jpg",
        available: true
    },
    {
        id: 4,
        name: "Ceviche mixto",
        category: "ceviches",
        price: 45,
        description: "Pescado blanco, pulpo, langostino, pota, choclo, cancha, camote, chifles.",
        image: "./images/menu/ceviche-mixto.jpg",
        available: true
    },
    {
        id: 5,
        name: "Ceviche de pescado",
        category: "ceviches",
        price: 40,
        description: "Pescado blanco 250gr, choclo, camote, leche de tigre, cancha.",
        image: "./images/menu/ceviche-pescado.jpg",
        available: true
    },
    {
        id: 6,
        name: "Ceviche en salsa de rocoto",
        category: "ceviches",
        price: 35,
        description: "Pescado blanco 250gr, choclo, camote, leche de tigre, cancha, en salsa especial de rocoto.",
        image: "./images/menu/ceviche-en-salsa-de-rocoto.jpg",
        available: true
    },
    {
        id: 7,
        name: "Ceviche puerto 28",
        category: "ceviches",
        price: 50,
        description: "Pescado blanco, pulpo, lapas, bañadas en leche de tigre especial de casa.",
        image: "./images/menu/ceviche-puerto-28.jpg",
        available: true
    },
    {
        id: 8,
        name: "Ceviche norteño",
        category: "ceviches",
        price: 35,
        description: "Pescado blanco preparado al estilo norteño, yuca, chifles, choclo, cancha.",
        image: "./images/menu/ceviche-norteno.jpg",
        available: true
    },
    {
        id: 9,
        name: "Causa acevichada",
        category: "ceviches",
        price: 25,
        description: "Causa rellena con ceviche montado.",
        image: "./images/menu/causa-acevichada.jpg",
        available: true
    },

    // --- Arroces ---
    {
        id: 20,
        name: "Arroz con mariscos",
        category: "arroces",
        price: 35,
        description: "Arroz con mariscos arisotado en salsa especial de la casa.",
        image: "./images/menu/arroz-con-mariscos.jpg",
        available: true
    },
    {
        id: 21,
        name: "Arroz con langostinos",
        category: "arroces",
        price: 35,
        description: "Arroz con langostinos arisotado en salsa especial de la casa.",
        image: "./images/menu/arroz-con-langostinos.jpg",
        available: true
    },
    {
        id: 22,
        name: "Chaufa de mariscos",
        category: "arroces",
        price: 35,
        description: "Mariscos, cebolla china todo al wok.",
        image: "./images/menu/chaufa-de-mariscos.jpg",
        available: true
    },
    {
        id: 23,
        name: "Chaufa de pescado",
        category: "arroces",
        price: 35,
        description: "Chicharrón de pescado, cebolla china, todo al wok.",
        image: "./images/menu/chaufa-pescado.jpg",
        available: true
    },
    {
        id: 24,
        name: "Chaufa de langostinos",
        category: "arroces",
        price: 35,
        description: "Langostinos, cebolla china, todo al wok.",
        image: "./images/menu/chaufa-de-langostinos.jpg",
        available: true
    }
    ,
    // --- Calientes ---
    {
        id: 30,
        name: "Sudado",
        category: "calientes",
        price: 35,
        description: "Cabrilla, cangrejo, mariscos, cebolla, tomate, ají amarillo en juliana, yuca, porción de arroz.",
        image: "./images/menu/sudado.jpg",
        available: true
    },
    {
        id: 31,
        name: "Parihuela",
        category: "calientes",
        price: 40,
        description: "Cabrilla, cangrejo, mariscos, yuca, porción de arroz.",
        image: "./images/menu/parihuela.jpg",
        available: true
    },
    {
        id: 32,
        name: "Chicharrón de pota",
        category: "calientes",
        price: 20,
        description: "250gr de chicharrón de pota.",
        image: "./images/menu/chicharron-pota.jpg",
        available: true
    },
    {
        id: 33,
        name: "Jalea mixta",
        category: "calientes",
        price: 45,
        description: "Pescado, pota, langostinos, yuca, salsa criolla.",
        image: "./images/menu/jalea-mixta.jpg",
        available: true
    },
    {
        id: 34,
        name: "Pescado frito",
        category: "calientes",
        price: 25,
        description: "Cabrilla frita, salsa criolla. Yuca, porción de arroz.",
        image: "./images/menu/cabrilla-frita.jpg",
        available: true
    },
    {
        id: 35,
        name: "Pulpo anticuchero",
        category: "calientes",
        price: 45,
        description: "Pulpo salteado en salsa anticuchera acompañado de papitas coctel salteadas en salsa al ajo y mantequilla.",
        image: "./images/menu/pulpo-anticuchero.jpg",
        available: true
    },
    {
        id: 36,
        name: "Saltado de mariscos",
        category: "calientes",
        price: 38,
        description: "Cebolla, tomate, mariscos, todo al wok y porción de arroz.",
        image: "./images/menu/saltado-de-mariscos.jpg",
        available: true
    },
    {
        id: 37,
        name: "Chilcano especial",
        category: "calientes",
        price: 20,
        description: "Chilcano de pescado + cangrejo.",
        image: "./images/menu/chilcano-especial.jpg",
        available: true
    }
    ,
    // --- Criollos ---
    {
        id: 50,
        name: "Lomo saltado",
        category: "criollos",
        price: 30,
        description: "Lomo saltado clásico.",
        image: "./images/menu/lomo-saltado.jpg",
        available: true
    },
    {
        id: 51,
        name: "Saltado de pollo",
        category: "criollos",
        price: 25,
        description: "Saltado de pollo clásico.",
        image: "./images/menu/lomo-saltado-pollo.jpg",
        available: true
    },
    {
        id: 52,
        name: "Chaufa de pollo",
        category: "criollos",
        price: 25,
        description: "Chaufa de pollo al wok.",
        image: "./images/menu/chaufa-de-pollo.jpg",
        available: true
    },
    {
        id: 53,
        name: "Pechuga a la plancha",
        category: "criollos",
        price: 25,
        description: "Pechuga de pollo a la plancha.",
        image: "./images/menu/pechuga-a-la-plancha.jpg",
        available: true
    },
    {
        id: 54,
        name: "Bistec a lo pobre",
        category: "criollos",
        price: 35,
        description: "Bistec a lo pobre tradicional.",
        image: "./images/menu/bistec-a-lo-pobre.jpg",
        available: true
    },
    {
        id: 55,
        name: "Arroz a la cubana",
        category: "criollos",
        price: 17,
        description: "Arroz a la cubana clásico.",
        image: "./images/menu/arroz-a-la-cubana.jpg",
        available: true
    },
    {
        id: 56,
        name: "Pollo broaster",
        category: "criollos",
        price: 25,
        description: "Pollo broaster crocante.",
        image: "./images/menu/pollo-broaster.jpg",
        available: true
    },
    {
        id: 57,
        name: "Tallarín saltado",
        category: "criollos",
        price: 25,
        description: "Tallarín saltado clásico.",
        image: "./images/menu/tallarin-saltado.jpg",
        available: true
    }
    ,
    // --- Duos ---
    {
        id: 70,
        name: "Ceviche + chicharrón",
        category: "duos",
        price: 30,
        description: "Combinación de ceviche y chicharrón.",
        image: "./images/menu/ceviche-chicharron.jpg",
        available: true
    },
    {
        id: 71,
        name: "Ceviche + arroz chaufa de mariscos",
        category: "duos",
        price: 30,
        description: "Ceviche acompañado de arroz chaufa de mariscos.",
        image: "./images/menu/ceviche-chaufa-mariscos.jpg",
        available: true
    },
    {
        id: 72,
        name: "Ceviche + arroz con marisco",
        category: "duos",
        price: 30,
        description: "Ceviche acompañado de arroz con marisco.",
        image: "./images/menu/ceviche-arroz-marisco.jpg",
        available: true
    },
    {
        id: 73,
        name: "Ceviche + causa",
        category: "duos",
        price: 30,
        description: "Ceviche acompañado de causa.",
        image: "./images/menu/ceviche-causa.jpg",
        available: true
    },
    {
        id: 74,
        name: "Ceviche + pulpo anticuchero",
        category: "duos",
        price: 35,
        description: "Ceviche acompañado de pulpo anticuchero.",
        image: "./images/menu/ceviche-pulpo-anticuchero.jpg",
        available: true
    },
    {
        id: 75,
        name: "Pulpo anticuchero + causa",
        category: "duos",
        price: 35,
        description: "Pulpo anticuchero acompañado de causa.",
        image: "./images/menu/pulpo-anticuchero-causa.jpg",
        available: true
    },
    {
        id: 76,
        name: "Pulpo anticuchero + arroz con marisco",
        category: "duos",
        price: 35,
        description: "Pulpo anticuchero acompañado de arroz con marisco.",
        image: "./images/menu/pulpo-anticuchero-arroz-marisco.jpg",
        available: true
    },
    {
        id: 77,
        name: "Pulpo anticuchero + arroz chaufa de mariscos",
        category: "duos",
        price: 35,
        description: "Pulpo anticuchero acompañado de arroz chaufa de mariscos.",
        image: "./images/menu/pulpo-anticuchero-chaufa-mariscos.jpg",
        available: true
    }
    ,
    // --- Trios ---
    {
        id: 90,
        name: "Ceviche + chicharrón + arroz con mariscos",
        category: "trios",
        price: 40,
        description: "Combinación de ceviche, chicharrón y arroz con mariscos.",
        image: "./images/menu/ceviche-chicharron-arroz-mariscos.jpg",
        available: true
    },
    {
        id: 91,
        name: "Ceviche + chicharrón + chaufa de mariscos",
        category: "trios",
        price: 40,
        description: "Combinación de ceviche, chicharrón y chaufa de mariscos.",
        image: "./images/menu/ceviche-chicharron-chaufa-mariscos.jpg",
        available: true
    },
    {
        id: 92,
        name: "Ceviche + chicharrón + causa",
        category: "trios",
        price: 40,
        description: "Combinación de ceviche, chicharrón y causa.",
        image: "./images/menu/ceviche-chicharron-causa.jpg",
        available: true
    },
    {
        id: 93,
        name: "Ceviche + arroz con mariscos + chaufa de mariscos",
        category: "trios",
        price: 40,
        description: "Combinación de ceviche, arroz con mariscos y chaufa de mariscos.",
        image: "./images/menu/ceviche-arroz-mariscos-chaufa-mariscos.jpg",
        available: true
    },
    {
        id: 94,
        name: "Ceviche + causa + arroz con mariscos",
        category: "trios",
        price: 40,
        description: "Combinación de ceviche, causa y arroz con mariscos.",
        image: "./images/menu/ceviche-causa-arroz-mariscos.jpg",
        available: true
    },
    {
        id: 95,
        name: "Ceviche + causa + chaufa de mariscos",
        category: "trios",
        price: 40,
        description: "Combinación de ceviche, causa y chaufa de mariscos.",
        image: "./images/menu/ceviche-causa-chaufa-mariscos.jpg",
        available: true
    },
    {
        id: 96,
        name: "Ceviche + causa + pulpo anticuchero",
        category: "trios",
        price: 45,
        description: "Combinación de ceviche, causa y pulpo anticuchero.",
        image: "./images/menu/ceviche-causa-pulpo-anticuchero.jpg",
        available: true
    },
    {
        id: 97,
        name: "Ceviche + chicharrón + pulpo anticuchero",
        category: "trios",
        price: 45,
        description: "Combinación de ceviche, chicharrón y pulpo anticuchero.",
        image: "./images/menu/ceviche-chicharron-pulpo-anticuchero.jpg",
        available: true
    },
    {
        id: 98,
        name: "Ceviche + arroz con mariscos + pulpo anticuchero",
        category: "trios",
        price: 45,
        description: "Combinación de ceviche, arroz con mariscos y pulpo anticuchero.",
        image: "./images/menu/ceviche-arroz-mariscos-pulpo-anticuchero.jpg",
        available: true
    },
    {
        id: 99,
        name: "Ceviche + chaufa de mariscos + pulpo anticuchero",
        category: "trios",
        price: 45,
        description: "Combinación de ceviche, chaufa de mariscos y pulpo anticuchero.",
        image: "./images/menu/ceviche-chaufa-mariscos-pulpo-anticuchero.jpg",
        available: true
    }
    ,
    // --- Rondas ---
    {
        id: 110,
        name: "Ronda de piqueos",
        category: "rondas",
        price: 50,
        description: "A elegir 4 entre (bolitas de causa, choritos a la chalaca, tequeños, pulpo al olivo, shots de leche de tigre y tiradito al ají amarillo).",
        image: "./images/menu/ronda-de-piqueos.jpg",
        available: true
    },
    {
        id: 111,
        name: "Ronda marina",
        category: "rondas",
        price: 60,
        description: "Ceviche + arroz con marisco o chaufa de mariscos + chicharrón de pescado + causa o leche de tigre.",
        image: "./images/menu/ronda-marina.jpg",
        available: true
    },
    {
        id: 112,
        name: "Ronda puerto 28",
        category: "rondas",
        price: 70,
        description: "Ceviche + arroz con marisco o chaufa + pulpo de anticuchero + leche de tigre o causa.",
        image: "./images/menu/ronda-puerto-28.jpg",
        available: true
    }
    ,
    // --- Piqueos ---
    {
        id: 120,
        name: "Choritos a la chalaca",
        category: "piqueos",
        price: 20,
        description: "12 unidades de choritos frescos.",
        image: "./images/menu/choritos-a-la-chalaca.jpg",
        available: true
    },
    {
        id: 121,
        name: "Tequeños en salsa de ají de mariscos (12und)",
        category: "piqueos",
        price: 20,
        description: "12 unidades de tequeños en salsa especial de ají de mariscos.",
        image: "./images/menu/tequenos-aji-mariscos.jpg",
        available: true
    },
    {
        id: 122,
        name: "Bolitas de causa (5und)",
        category: "piqueos",
        price: 20,
        description: "5 unidades de bolitas de causa rellenas de pollo.",
        image: "./images/menu/bolitas-de-causa.jpg",
        available: true
    },
    {
        id: 123,
        name: "Pulpo al olivo",
        category: "piqueos",
        price: 30,
        description: "Rodajas de pulpo bañadas en crema al olivo.",
        image: "./images/menu/pulpo-al-olivo.jpg",
        available: true
    },
    {
        id: 124,
        name: "Shots de leche de tigre",
        category: "piqueos",
        price: 10,
        description: "5 shots de leche de tigre.",
        image: "./images/menu/shots-leche-de-tigre.jpg",
        available: true
    },
    {
        id: 125,
        name: "Tiradito al ají amarillo",
        category: "piqueos",
        price: 30,
        description: "Láminas de pescado fresco en crema de ají amarillo especial.",
        image: "./images/menu/tiradito-aji-amarillo.jpg",
        available: true
    }
    ,
    // --- Bebidas ---
    {
        id: 130,
        name: "Agua",
        category: "bebidas",
        price: 3,
        description: "Agua embotellada.",
        image: "./images/menu/agua.jpg",
        available: true
    },
    {
        id: 131,
        name: "Gordita",
        category: "bebidas",
        price: 5,
        description: "Gaseosa tamaño gordita.",
        image: "./images/menu/gaseosa-gordita.jpg",
        available: true
    },
    {
        id: 132,
        name: "Gaseosa 600 ml",
        category: "bebidas",
        price: 4,
        description: "Gaseosa 600 ml fría.",
        image: "./images/menu/gaseosa-600ml.jpg",
        available: true
    },
    {
        id: 133,
        name: "Gaseosa 1 lt",
        category: "bebidas",
        price: 7,
        description: "Gaseosa 1 lt fría.",
        image: "./images/menu/gaseosa-inca-1lt.jpg",
        available: true
    },
    {
        id: 134,
        name: "Gaseosa 1/5 lt",
        category: "bebidas",
        price: 13,
        description: "Gaseosa 1/5 lt fría.",
        image: "./images/menu/gaseosa-inca-1-5lt.jpg",
        available: true
    },
    {
        id: 135,
        name: "Pilsen 630 ml",
        category: "bebidas",
        price: 12,
        description: "Cerveza Pilsen 630 ml.",
        image: "./images/menu/pilsen-630ml.jpg",
        available: true
    },
    {
        id: 136,
        name: "Pilsen chica 310 ml",
        category: "bebidas",
        price: 8,
        description: "Cerveza Pilsen chica 310 ml.",
        image: "./images/menu/pilsen-chica-310ml.jpg",
        available: true
    },
    {
        id: 137,
        name: "Cusqueña chica 310 ml",
        category: "bebidas",
        price: 8,
        description: "Cerveza Cusqueña chica 310 ml.",
        image: "./images/menu/cusquena-chica-310ml.jpg",
        available: true
    },
    {
        id: 138,
        name: "Cusqueña negra chica 310 ml",
        category: "bebidas",
        price: 8,
        description: "Cerveza Cusqueña negra chica 310 ml.",
        image: "./images/menu/cusquena-negra-chica-310ml.jpg",
        available: true
    },
    {
        id: 139,
        name: "Limonada frozen 1 lt",
        category: "bebidas",
        price: 18,
        description: "Limonada frozen 1 lt.",
        image: "./images/menu/limonada-frozen-1lt.jpg",
        available: true
    },
    {
        id: 140,
        name: "Limonada frozen 1/2 lt",
        category: "bebidas",
        price: 9,
        description: "Limonada frozen 1/2 lt.",
        image: "./images/menu/limonada-frozen-1-2lt.jpg",
        available: true
    },
    {
        id: 141,
        name: "Chicha morada 1 lt",
        category: "bebidas",
        price: 15,
        description: "Chicha morada 1 lt.",
        image: "./images/menu/chicha-morada-1lt.jpg",
        available: true
    },
    {
        id: 142,
        name: "Chicha morada 1/2 lt",
        category: "bebidas",
        price: 8,
        description: "Chicha morada 1/2 lt.",
        image: "./images/menu/jarra-chicha-morada.jpg",
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