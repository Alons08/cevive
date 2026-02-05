// Array de productos actualizado según la nueva carta
const products = [
    // --- Entradas ---
    {
        id: 1,
        name: "Choritos a la chalaca",
        category: "entradas",
        price: 12,
        description: "6 unidades de choritos a la chalaca.",
        image: "./images/menu/choros-chalaca.jpg",
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
        image: "./images/menu/ceviche-carretillero-de-pescado.jpg",
        available: true
    },
    {
        id: 11,
        name: "Ceviche clásico",
        category: "ceviches",
        price: 20,
        description: "Fresco ceviche de toya acompañado de sarandaja, choclo y camote.",
        image: "./images/menu/ceviche-pescado.jpg",
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
    },

    // --- Leches ---
    {
        id: 25,
        name: "La marina",
        category: "leches",
        price: 20,
        description: "Leche de tigre con trozos de pescado + arroz con mariscos.",
        image: "./images/menu/la-marina.jpg",
        available: true
    },
    {
        id: 26,
        name: "La oriental",
        category: "leches",
        price: 20,
        description: "Leche de tigre con trozos de pescado + chaufa de mariscos.",
        image: "./images/menu/la-oriental.jpg",
        available: true
    },
    {
        id: 27,
        name: "La carretillera",
        category: "leches",
        price: 18,
        description: "Leche de tigre con trozos de pescado + chicharrón de pota.",
        image: "./images/menu/la-carretillera.jpg",
        available: true
    },
    {
        id: 28,
        name: "Leche de tigre",
        category: "leches",
        price: 15,
        description: "Jugo de limón, trozos de pescado cancha serrana y trozos de camote.",
        image: "./images/menu/leche-de-tigre.jpg",
        available: true
    },
    {
        id: 29,
        name: "Leche de pantera",
        category: "leches",
        price: 18,
        description: "Mezcla de mariscos, jugo de limón y un toque de pisco o cerveza.",
        image: "./images/menu/leche-de-pantera.jpg",
        available: true
    },

    // --- Chicharrones ---
    {
        id: 35,
        name: "Chicharrón de pota",
        category: "chicharrones",
        price: 18,
        description: "Crocante chicharrón de pota acompañado de yuca y salsa criolla.",
        image: "./images/menu/chicharron-pota.jpg",
        available: true
    },
    {
        id: 36,
        name: "Chicharrón mixto",
        category: "chicharrones",
        price: 25,
        description: "Chicharrón de pescado y pota, acompañado de yuca y salsa criolla.",
        image: "./images/menu/chicharron-mixto.jpg",
        available: true
    },

    // --- Duos ---
    {
        id: 40,
        name: "Combinado (Personal)",
        category: "duos",
        price: 25,
        description: "Ceviche de de toya + chicharrón mixto.",
        image: "./images/menu/duo-marino.jpg",
        available: true
    },
    {
        id: 41,
        name: "Combinado (Mediano)",
        category: "duos",
        price: 30,
        description: "Ceviche de de toya + chicharrón mixto.",
        image: "./images/menu/duo-marino.jpg",
        available: true
    },
    {
        id: 42,
        name: "Combinado (Familiar)",
        category: "duos",
        price: 40,
        description: "Ceviche de de toya + chicharrón mixto.",
        image: "./images/menu/duo-marino.jpg",
        available: true
    },
    {
        id: 43,
        name: "Combinado marino (Personal)",
        category: "duos",
        price: 25,
        description: "Ceviche de de toya + arroz con mariscos.",
        image: "./images/menu/duo-marino-arroz.jpg",
        available: true
    },
    {
        id: 44,
        name: "Combinado marino (Mediano)",
        category: "duos",
        price: 30,
        description: "Ceviche de de toya + arroz con mariscos.",
        image: "./images/menu/duo-marino-arroz.jpg",
        available: true
    },
    {
        id: 45,
        name: "Combinado marino (Familiar)",
        category: "duos",
        price: 40,
        description: "Ceviche de de toya + arroz con mariscos.",
        image: "./images/menu/duo-marino-arroz.jpg",
        available: true
    },
    {
        id: 46,
        name: "Cevichaufa (Personal)",
        category: "duos",
        price: 25,
        description: "Ceviche de de toya + chaufa de mariscos.",
        image: "./images/menu/duo-marino-chaufa.jpg",
        available: true
    },
    {
        id: 47,
        name: "Cevichaufa (Mediano)",
        category: "duos",
        price: 30,
        description: "Ceviche de de toya + chaufa de mariscos.",
        image: "./images/menu/duo-marino-chaufa.jpg",
        available: true
    },
    {
        id: 48,
        name: "Cevichaufa (Familiar)",
        category: "duos",
        price: 40,
        description: "Ceviche de de toya + chaufa de mariscos.",
        image: "./images/menu/duo-marino-chaufa.jpg",
        available: true
    },   

    // --- Trios ---
    {
        id: 55,
        name: "Trio con causa (Mediano)",
        category: "trios",
        price: 35,
        description: "Ceviche de toya + causa + chaufa de mariscos.",
        image: "./images/menu/trio-con-causa.jpg",
        available: true
    },
    {
        id: 56,
        name: "Trio con causa (Familiar)",
        category: "trios",
        price: 45,
        description: "Ceviche de toya + causa + chaufa de mariscos.",
        image: "./images/menu/trio-con-causa.jpg",
        available: true
    },
    {
        id: 57,
        name: "Triple marino (Mediano)",
        category: "trios",
        price: 30,
        description: "Ceviche de toya + Chicharrón de pota + chaufa de mariscos.",
        image: "./images/menu/triple-marino.jpg",
        available: true
    },
    {
        id: 58,
        name: "Triple marino (Familiar)",
        category: "trios",
        price: 40,
        description: "Ceviche de toya + Chicharrón de pota + chaufa de mariscos.",
        image: "./images/menu/triple-marino.jpg",
        available: true
    },
    {
        id: 59,
        name: "Trio mixto (Personal)",
        category: "trios",
        price: 20,
        description: "Ceviche de toya + arroz seco + chaufa de mariscos.",
        image: "./images/menu/trio-mixto.jpg",
        available: true
    },
    {
        id: 60,
        name: "Trio mixto (Mediano)",
        category: "trios",
        price: 30,
        description: "Ceviche de toya + arroz seco + chaufa de mariscos.",
        image: "./images/menu/trio-mixto.jpg",
        available: true
    },
    {
        id: 61,
        name: "Trio mixto (Familiar)",
        category: "trios",
        price: 40,
        description: "Ceviche de toya + arroz seco + chaufa de mariscos.",
        image: "./images/menu/trio-mixto.jpg",
        available: true
    },

    // --- Rondas ---
    {
        id: 70,
        name: "Ronda marina",
        category: "rondas",
        price: 35,
        description: "Ceviche de toya + arroz con mariscos + chicharrón de pota + chaufa de mariscos.",
        image: "./images/menu/ronda-marina.jpg",
        available: true
    },
    {
        id: 71,
        name: "Ronda mixta",
        category: "rondas",
        price: 35,
        description: "Ceviche de toya + pellejito en sarsa + carne seca + chicharrón de pota",
        image: "./images/menu/ronda-mixta.jpg",
        available: true
    },
    {
        id: 72,
        name: "Ronda norteña",
        category: "rondas",
        price: 45,
        description: "Ceviche de pota + ceviche de toya + pellejito en sarsa + carne seca + 4 tortitas.",
        image: "./images/menu/ronda-nortena.jpg",
        available: true
    },
    {
        id: 73,
        name: "Ronda familiar",
        category: "rondas",
        price: 60,
        description: "Ceviche de toya + causa + pescado a lo macho + chicharrón mixto + pellejito en sarsa.",
        image: "./images/menu/ronda-familiar.jpg",
        available: true
    },
    {
        id: 74,
        name: "Ronda Cevive",
        category: "rondas",
        price: 60,
        description: "Ceviche de toya + picante de mariscos + causa + arroz con mariscos + chaufa de mariscos.",
        image: "./images/menu/ronda-cevive.jpg",
        available: true
    },
    {
        id: 75,
        name: "Ronda chiclayana",
        category: "rondas",
        price: 40,
        description: "Ceviche de toya + arroz con mariscos + picante de mariscos + chaufa de mariscos + leche de tigre.",
        image: "./images/menu/ronda-chiclayana.jpg",
        available: true
    },

    // --- Jaleas ---
    {
        id: 80,
        name: "Jalea mixta",
        category: "jaleas",
        price: 35,
        description: "Filete de toya, salsa criolla, chicharrón mixto.",
        image: "./images/menu/jalea-mixta.jpg",
        available: true
    },
    {
        id: 81,
        name: "Jalea de pota",
        category: "jaleas",
        price: 35,
        description: "Mixtura servido con yucas fritas.",
        image: "./images/menu/jalea-real.jpg",
        available: true    },

    // --- Arroces ---
    {
        id: 85,
        name: "Arroz chaufa de mariscos",
        category: "arroces",
        price: 30,
        description: "Arroz chaufa con mixtura de mariscos frescos al wok.",
        image: "./images/menu/arroz-chaufa-mariscos.jpg",
        available: true
    },
    {
        id: 86,
        name: "Arroz chaufa de pollo",
        category: "arroces",
        price: 20,
        description: "Arroz chaufa con pollo salteado al wok.",
        image: "./images/menu/arroz-chaufa-pollo.jpg",
        available: true
    },
    {
        id: 87,
        name: "Arroz con mariscos",
        category: "arroces",
        price: 30,
        description: "Arroz risotado con mariscos en salsa especial.",
        image: "./images/menu/arroz-con-mariscos.jpg",
        available: true
    },
    {
        id: 88,
        name: "Arroz salvaje",
        category: "arroces",
        price: 33,
        description: "Arroz con mariscos, cecina y chorizo al estilo selvático.",
        image: "./images/menu/arroz-salvaje.jpg",
        available: true
    },
    {
        id: 89,
        name: "Arroz chaufa Cevive",
        category: "arroces",
        price: 35,
        description: "Arroz chaufa especial de la casa con mariscos premium.",
        image: "./images/menu/arroz-chaufa-cevive.jpg",
        available: true
    },
    {
        id: 90,
        name: "Chaufa amazónico",
        category: "arroces",
        price: 25,
        description: "Arroz chaufa con cecina, chorizo y plátano frito.",
        image: "./images/menu/chaufa-amazonico.jpg",
        available: true
    },

    // --- Criollos ---
    {
        id: 95,
        name: "Cabrito a la norteña",
        category: "criollos",
        price: 15,
        description: "Se sirve acompañado con arroz blanco, frijoles y yuca sancochada.",
        image: "./images/menu/cabrito-norteno.jpg",
        available: true
    },
    {
        id: 96,
        name: "Arroz con pato",
        category: "criollos",
        price: 18,
        description: "Clásico plato norteño preparado con piezas de pato doradas. Se sirve con sarza criolla.",
        image: "./images/menu/arroz-con-pato.jpg",
        available: true
    },
    {
        id: 97,
        name: "Frito norteño",
        category: "criollos",
        price: 15,
        description: "Se sirve acompañado con yucas, camote y sarza criolla.",
        image: "./images/menu/frito-norteno.jpg",
        available: true
    },
    {
        id: 98,
        name: "Causa limeña",
        category: "criollos",
        price: 20,
        description: "Puré de papa amarilla con ají amarilla, limón, rellena de pollo, palta y mayonesa.",
        image: "./images/menu/causa-limena.jpg",
        available: true
    },

    // --- Enteros ---
    {
        id: 105,
        name: "Cabrilla frita",
        category: "enteros",
        price: 30,
        description: "Acompañada de arroz blanco, yucas fritas y salsa chalaca.",
        image: "./images/menu/cabrilla-frita.jpg",
        available: true
    },
    {
        id: 106,
        name: "Cabrilla a lo macho",
        category: "enteros",
        price: 40,
        description: "Cubierta con salsa de mariscos con un toque de picar.",
        image: "./images/menu/cabrilla-macho.jpg",
        available: true
    },
    {
        id: 107,
        name: "Sudado de cabrilla (Personal)",
        category: "enteros",
        price: 30,
        description: "Cabrilla al vapor con verduras en salsa especial.",
        image: "./images/menu/sudado-cabrilla.jpg",
        available: true
    },
    {
        id: 108,
        name: "Sudado de cabrilla (Familiar)",
        category: "enteros",
        price: 40,
        description: "Cabrilla al vapor con verduras en salsa especial.",
        image: "./images/menu/sudado-cabrilla.jpg",
        available: true
    },
    {
        id: 109,
        name: "Parihuela de cabrilla (Personal)",
        category: "enteros",
        price: 35,
        description: "Sopa de mariscos con cabrilla y especies norteñas.",
        image: "./images/menu/parihuela.jpg",
        available: true
    },
    {
        id: 110,
        name: "Parihuela de cabrilla (Familiar)",
        category: "enteros",
        price: 45,
        description: "Sopa de mariscos con cabrilla y especies norteñas.",
        image: "./images/menu/parihuela.jpg",
        available: true
    },

    // --- De la casa ---
    /*
    {
        id: 115,
        name: "Pulpo a la parrilla",
        category: "delacasa",
        price: 25,
        description: "Pulpo fresco a la parrilla con salsa especial.",
        image: "./images/menu/pulpo-anticuchero.jpg",
        available: true
    },
    */
    {
        id: 116,
        name: "Picante de mariscos",
        category: "delacasa",
        price: 25,
        description: "Mixtura de mariscos en salsa picante.",
        image: "./images/menu/picante-mariscos.jpg",
        available: true
    },
    {
        id: 117,
        name: "Pescado a lo macho",
        category: "delacasa",
        price: 30,
        description: "Filete de pescado cubierto con salsa de mariscos.",
        image: "./images/menu/pescado-macho.jpg",
        available: true
    },
    {
        id: 118,
        name: "Tortilla de langostinos",
        category: "delacasa",
        price: 25,
        description: "Tortilla de huevos con langostinos frescos.",
        image: "./images/menu/tortilla-langostinos.jpg",
        available: true
    },
    {
        id: 119,
        name: "Bistec a lo pobre",
        category: "delacasa",
        price: 20,
        description: "Bistec con huevo frito, arroz, papas fritas y plátano.",
        image: "./images/menu/bistec-a-lo-pobre.jpg",
        available: true
    },
    {
        id: 120,
        name: "Chuleta a la parrilla",
        category: "delacasa",
        price: 17,
        description: "Chuleta de cerdo jugosa a la parrilla.",
        image: "./images/menu/chuleta-parrilla.jpg",
        available: true
    },
    {
        id: 121,
        name: "Churrasco a la parrilla",
        category: "delacasa",
        price: 18,
        description: "Churrasco de res a la parrilla con guarniciones.",
        image: "./images/menu/churrasco-parrilla.jpg",
        available: true
    },
    {
        id: 122,
        name: "Pellejito en sarsa",
        category: "delacasa",
        price: 23,
        description: "Pellejito de cerdo en salsa criolla norteña.",
        image: "./images/menu/pellejito-sarsa.jpg",
        available: true
    },
    {
        id: 123,
        name: "Lomito saltado",
        category: "delacasa",
        price: 20,
        description: "Lomito saltado al wok con papas fritas y arroz.",
        image: "./images/menu/lomito-saltado.jpg",
        available: true
    },
    {
        id: 124,
        name: "Pollito a la plancha",
        category: "delacasa",
        price: 15,
        description: "Pechuga de pollo jugosa a la plancha.",
        image: "./images/menu/pollito-plancha.jpg",
        available: true
    },

    // --- Fuentes ---
    {
        id: 130,
        name: "Ceviche de pota (Mediano)",
        category: "fuentes",
        price: 50,
        description: "Fuente de ceviche de pota fresca para compartir.",
        image: "./images/menu/fuente-ceviche-pota.jpg",
        available: true
    },
    {
        id: 131,
        name: "Ceviche de pota (Familiar)",
        category: "fuentes",
        price: 80,
        description: "Fuente de ceviche de pota fresca para compartir.",
        image: "./images/menu/fuente-ceviche-pota.jpg",
        available: true
    },
    {
        id: 132,
        name: "Ceviche mixto (Mediano)",
        category: "fuentes",
        price: 60,
        description: "Fuente de ceviche mixto con variedad de mariscos.",
        image: "./images/menu/fuente-ceviche-mixto.jpg",
        available: true
    },
    {
        id: 133,
        name: "Ceviche mixto (Familiar)",
        category: "fuentes",
        price: 90,
        description: "Fuente de ceviche mixto con variedad de mariscos.",
        image: "./images/menu/fuente-ceviche-mixto.jpg",
        available: true
    },
    {
        id: 134,
        name: "Arroz con mariscos (Mediano)",
        category: "fuentes",
        price: 60,
        description: "Fuente de arroz con mariscos para compartir.",
        image: "./images/menu/fuente-arroz-mariscos.jpg",
        available: true
    },
    {
        id: 135,
        name: "Arroz con mariscos (Familiar)",
        category: "fuentes",
        price: 90,
        description: "Fuente de arroz con mariscos para compartir.",
        image: "./images/menu/fuente-arroz-mariscos.jpg",
        available: true
    },
    {
        id: 136,
        name: "Chaufa de mariscos (Mediano)",
        category: "fuentes",
        price: 60,
        description: "Fuente de chaufa de mariscos al wok.",
        image: "./images/menu/fuente-chaufa-mariscos.jpg",
        available: true
    },
    {
        id: 137,
        name: "Chaufa de mariscos (Familiar)",
        category: "fuentes",
        price: 90,
        description: "Fuente de chaufa de mariscos al wok.",
        image: "./images/menu/fuente-chaufa-mariscos.jpg",
        available: true
    },
    {
        id: 138,
        name: "Carne seca (Mediano)",
        category: "fuentes",
        price: 50,
        description: "Fuente de carne seca norteña para compartir.",
        image: "./images/menu/fuente-carne-seca.jpg",
        available: true
    },
    {
        id: 139,
        name: "Carne seca (Familiar)",
        category: "fuentes",
        price: 80,
        description: "Fuente de carne seca norteña para compartir.",
        image: "./images/menu/fuente-carne-seca.jpg",
        available: true
    },
    {
        id: 140,
        name: "Pellejito en sarsa (Mediano)",
        category: "fuentes",
        price: 40,
        description: "Fuente de pellejito en salsa criolla.",
        image: "./images/menu/fuente-pellejito-sarsa.jpg",
        available: true
    },
    {
        id: 141,
        name: "Pellejito en sarsa (Familiar)",
        category: "fuentes",
        price: 70,
        description: "Fuente de pellejito en salsa criolla.",
        image: "./images/menu/fuente-pellejito-sarsa.jpg",
        available: true
    },

    // --- Guarniciones ---
    {
        id: 150,
        name: "Arroz blanco",
        category: "guarniciones",
        price: 4,
        description: "Porción de arroz blanco.",
        image: "./images/menu/arroz-blanco.jpg",
        available: true
    },
    {
        id: 151,
        name: "Papas fritas",
        category: "guarniciones",
        price: 7,
        description: "Porción de crocantes papas fritas.",
        image: "./images/menu/papas-fritas.jpg",
        available: true
    },
    {
        id: 152,
        name: "Plátanos fritos",
        category: "guarniciones",
        price: 4,
        description: "Porción de riquísimos plátanos fritos.",
        image: "./images/menu/platanos-fritos.jpg",
        available: true
    },
    {
        id: 153,
        name: "Ensalada fresca",
        category: "guarniciones",
        price: 5,
        description: "Porción de una saludable ensalada fresca.",
        image: "./images/menu/ensalada-fresca.jpg",
        available: true
    },
    {
        id: 154,
        name: "Yucas",
        category: "guarniciones",
        price: 4,
        description: "Porción de riquísimas yucas.",
        image: "./images/menu/yucas.jpg",
        available: true
    },

    // --- Jugos ---
    {
        id: 160,
        name: "Jugo de piña (Media Jarra)",
        category: "jugos",
        price: 7,
        description: "Refrescante jugo natural de piña.",
        image: "./images/menu/jugo-pina-media.jpg",
        available: true
    },
    {
        id: 161,
        name: "Jugo de piña (Jarra)",
        category: "jugos",
        price: 13,
        description: "Refrescante jugo natural de piña.",
        image: "./images/menu/jugo-pina.jpg",
        available: true
    },
    {
        id: 162,
        name: "Jugo de fresa (Media Jarra)",
        category: "jugos",
        price: 7,
        description: "Delicioso jugo natural de fresa.",
        image: "./images/menu/jugo-fresa-media.jpg",
        available: true
    },
    {
        id: 163,
        name: "Jugo de fresa (Jarra)",
        category: "jugos",
        price: 13,
        description: "Delicioso jugo natural de fresa.",
        image: "./images/menu/jugo-fresa.jpg",
        available: true
    },
    {
        id: 164,
        name: "Jugo surtido (Media Jarra)",
        category: "jugos",
        price: 9,
        description: "Combinación de frutas frescas.",
        image: "./images/menu/jugo-surtido-media.jpg",
        available: true
    },
    {
        id: 165,
        name: "Jugo surtido (Jarra)",
        category: "jugos",
        price: 16,
        description: "Combinación de frutas frescas.",
        image: "./images/menu/jugo-surtido.jpg",
        available: true
    },
    {
        id: 166,
        name: "Jugo especial (Media Jarra)",
        category: "jugos",
        price: 12,
        description: "Jugo especial de la casa.",
        image: "./images/menu/jugo-especial-media.jpg",
        available: true
    },
    {
        id: 167,
        name: "Jugo especial (Jarra)",
        category: "jugos",
        price: 18,
        description: "Jugo especial de la casa.",
        image: "./images/menu/jugo-especial.jpg",
        available: true
    },

    // --- Bebidas ---
    {
        id: 175,
        name: "Limonada (Media Jarra)",
        category: "bebidas",
        price: 6,
        description: "Refrescante limonada natural.",
        image: "./images/menu/limonada-media.jpg",
        available: true
    },
    {
        id: 176,
        name: "Limonada (Jarra)",
        category: "bebidas",
        price: 10,
        description: "Refrescante limonada natural.",
        image: "./images/menu/limonada.jpg",
        available: true
    },
    {
        id: 177,
        name: "Maracuyá (Media Jarra)",
        category: "bebidas",
        price: 7,
        description: "Exquisito refresco de maracuyá.",
        image: "./images/menu/maracuya-media.jpg",
        available: true
    },
    {
        id: 178,
        name: "Maracuyá (Jarra)",
        category: "bebidas",
        price: 12,
        description: "Exquisito refresco de maracuyá.",
        image: "./images/menu/maracuya.jpg",
        available: true
    },
    {
        id: 179,
        name: "Chicha morada (Media Jarra)",
        category: "bebidas",
        price: 6,
        description: "Tradicional chicha morada peruana.",
        image: "./images/menu/chicha-morada-media.jpg",
        available: true
    },
    {
        id: 180,
        name: "Chicha morada (Jarra)",
        category: "bebidas",
        price: 10,
        description: "Tradicional chicha morada peruana.",
        image: "./images/menu/chicha-morada.jpg",
        available: true
    },
    {
        id: 181,
        name: "Chicha de jora (Media Jarra)",
        category: "bebidas",
        price: 6,
        description: "Auténtica chicha de jora norteña.",
        image: "./images/menu/chicha-jora-media.jpg",
        available: true
    },
    {
        id: 182,
        name: "Chicha de jora (Jarra)",
        category: "bebidas",
        price: 10,
        description: "Auténtica chicha de jora norteña.",
        image: "./images/menu/chicha-jora.jpg",
        available: true
    },
    {
        id: 183,
        name: "Maracumango (Media Jarra)",
        category: "bebidas",
        price: 9,
        description: "Deliciosa combinación de maracuyá y mango.",
        image: "./images/menu/maracumango-media.jpg",
        available: true
    },
    {
        id: 184,
        name: "Maracumango (Jarra)",
        category: "bebidas",
        price: 16,
        description: "Deliciosa combinación de maracuyá y mango.",
        image: "./images/menu/maracumango.jpg",
        available: true
    },
    {
        id: 190,
        name: "Inka Cola (600 ml)",
        category: "bebidas",
        price: 4,
        description: "Gaseosa Inka Cola de 600 ml.",
        image: "./images/menu/gaseosa-inca-500ml.jpg",
        available: true
    },
    {
        id: 191,
        name: "Inka Cola (1.2 LT)",
        category: "bebidas",
        price: 8,
        description: "Gaseosa Inka Cola de 1.2 litros.",
        image: "./images/menu/gaseosa-inca-1lt.jpg",
        available: true
    },
    {
        id: 192,
        name: "Inka Cola (1.5 LT)",
        category: "bebidas",
        price: 10,
        description: "Gaseosa Inka Cola de 1.5 litros.",
        image: "./images/menu/gaseosa-inca-1-5lt.jpg",
        available: true
    },
    {
        id: 193,
        name: "Coca Cola (600 ml)",
        category: "bebidas",
        price: 4,
        description: "Gaseosa Coca Cola de 600 ml.",
        image: "./images/menu/gaseosa-coca-500ml.jpg",
        available: true
    },
    {
        id: 194,
        name: "Coca Cola (1.2 LT)",
        category: "bebidas",
        price: 8,
        description: "Gaseosa Coca Cola de 1.2 litros.",
        image: "./images/menu/gaseosa-coca-1lt.jpg",
        available: true
    },
    {
        id: 195,
        name: "Coca Cola (1.5 LT)",
        category: "bebidas",
        price: 10,
        description: "Gaseosa Coca Cola de 1.5 litros.",
        image: "./images/menu/gaseosa-coca-1-5lt.jpg",
        available: true
    },
    {
        id: 196,
        name: "Gordita (600 ml)",
        category: "bebidas",
        price: 6,
        description: "Refresco Gordita de 600 ml.",
        image: "./images/menu/gaseosa-gordita.jpg",
        available: true
    },

    // --- Frozen ---
    {
        id: 200,
        name: "Maracuyá frozen (Media Jarra)",
        category: "frozen",
        price: 8,
        description: "Refrescante frozen de maracuyá.",
        image: "./images/menu/maracuya-frozen-media.jpg",
        available: true
    },
    {
        id: 201,
        name: "Maracuyá frozen (Jarra)",
        category: "frozen",
        price: 14,
        description: "Refrescante frozen de maracuyá.",
        image: "./images/menu/maracuya-frozen.jpg",
        available: true
    },
    {
        id: 202,
        name: "Maracumango frozen (Media Jarra)",
        category: "frozen",
        price: 10,
        description: "Delicioso frozen de maracuyá y mango.",
        image: "./images/menu/maracumango-frozen-media.jpg",
        available: true
    },
    {
        id: 203,
        name: "Maracumango frozen (Jarra)",
        category: "frozen",
        price: 16,
        description: "Delicioso frozen de maracuyá y mango.",
        image: "./images/menu/maracumango-frozen.jpg",
        available: true
    },
    {
        id: 204,
        name: "Limonada frozen (Media Jarra)",
        category: "frozen",
        price: 8,
        description: "Refrescante frozen de limonada.",
        image: "./images/menu/limonada-frozen-media.jpg",
        available: true
    },
    {
        id: 205,
        name: "Limonada frozen (Jarra)",
        category: "frozen",
        price: 13,
        description: "Refrescante frozen de limonada.",
        image: "./images/menu/limonada-frozen.jpg",
        available: true
    },
    {
        id: 206,
        name: "Fresa frozen (Media Jarra)",
        category: "frozen",
        price: 8,
        description: "Delicioso frozen de fresa.",
        image: "./images/menu/fresa-frozen-media.jpg",
        available: true
    },
    {
        id: 207,
        name: "Fresa frozen (Jarra)",
        category: "frozen",
        price: 14,
        description: "Delicioso frozen de fresa.",
        image: "./images/menu/fresa-frozen.jpg",
        available: true
    },
    {
        id: 208,
        name: "Piña frozen (Media Jarra)",
        category: "frozen",
        price: 8,
        description: "Refrescante frozen de piña.",
        image: "./images/menu/pina-frozen-media.jpg",
        available: true
    },
    {
        id: 209,
        name: "Piña frozen (Jarra)",
        category: "frozen",
        price: 14,
        description: "Refrescante frozen de piña.",
        image: "./images/menu/pina-frozen.jpg",
        available: true
    },

    // --- Cervezas ---
    {
        id: 215,
        name: "Cusqueña Trigo",
        category: "cervezas",
        price: 10,
        description: "Cerveza Cusqueña de trigo.",
        image: "./images/menu/cerveza-trigo.jpg",
        available: true
    },
    {
        id: 216,
        name: "Cusqueña Negra",
        category: "cervezas",
        price: 10,
        description: "Cerveza Cusqueña negra.",
        image: "./images/menu/cerveza-negra.jpg",
        available: true
    },
    {
        id: 217,
        name: "Pilsen",
        category: "cervezas",
        price: 9,
        description: "Cerveza Pilsen.",
        image: "./images/menu/cerveza-pilsen.jpg",
        available: true
    },
    {
        id: 218,
        name: "Cristal",
        category: "cervezas",
        price: 8,
        description: "Cerveza Cristal.",
        image: "./images/menu/cerveza-cristal.jpg",
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