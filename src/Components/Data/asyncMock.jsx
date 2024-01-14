const products = [
    {
        "id": "1",
        "name": "1 Kilo de Helado",
        "img": "https://images.rappi.com.ar/products/627960-1568484422.jpg?d=300x300&e=webp&q=10",
        "price": 6500,
        "stock": 15,
        "category": "sabores",
        "description": "Exquisita Indulgencia en Cada Kilo de Placer Helado."
    },
    {
        "id": "2",
        "name": "1/2 Kilo de Helado",
        "img": "https://images.rappi.com.ar/products/627961-1568484475.jpg?e=webp&d=511x511&q=85",
        "price": 4500,
        "stock": 15,
        "category": "sabores",
        "description": "Medio Kilo de Felicidad con Nuestros Deliciosos Sabores."
    },
    {
        "id": "3",
        "name": "1/4 Kilo de Helado",
        "img": "https://images.rappi.com.ar/products/627962-1568484495.jpg?e=webp&d=511x511&q=85",
        "price": 3500,
        "stock": 15,
        "category": "sabores",
        "description": "Un Cuarto de Kilo de Frescura y Sabor Irresistibles."
    },
    {
        "id": "4",
        "name": "Tabletas",
        "img": "https://ar.freddo.com/wp-content/uploads/2022/10/Tableta_Cookies_Cream-400x263.jpg",
        "price": 5000,
        "stock": 15,
        "category": "tentaciones",
        "description": "Cubierta de Chocolate con Leche"
    },
    {
        "id": "5",
        "name": "Cannoli",
        "img": "https://ar.freddo.com/wp-content/uploads/2022/10/Cannoli_DDL-400x263.jpg",
        "price": 4000,
        "stock": 15,
        "category": "tentaciones",
        "description": "Rellenos con Helado de Dulce de Leche y Cubiertos de Chocolate"
    },
    {
        "id": "6",
        "name": "Postres helados",
        "img": "https://ar.freddo.com/wp-content/uploads/2022/10/Postre_Mascarpone-400x263.jpg",
        "price": 6000,
        "stock": 15,
        "category": "tentaciones",
        "description": "Helado de mascarpone, frutilla a la crema y frutos rojos, con cobertura de salsa de frutos rojos y merengue."
    },
    {
        "id": "7",
        "name": "Pinta 375g",
        "img": "https://ar.freddo.com/wp-content/uploads/2023/05/PINTA-COOKIESCREAM-3.jpg",
        "price": 3500,
        "stock": 15,
        "category": "pre-envasados",
        "description": "Con Caramelo y Galletitas de Chocolate"
    },
    {
        "id": "8",
        "name": "Americana",
        "img": "https://ar.freddo.com/wp-content/uploads/2022/10/TABLETAS-crema-americana-1.jpg",
        "price": 3000,
        "stock": 15,
        "category": "pre-envasados",
        "description": "Recubiertas de Chocolate Semi Amargo"
    },
    {
        "id": "9",
        "name": "Bombones",
        "img": "https://ar.freddo.com/wp-content/uploads/2023/01/bombones-americana-2560x2560-1-600x600.png",
        "price": 4000,
        "stock": 15,
        "category": "pre-envasados",
        "description": "Bombones de Crema Americana Recubiertos de Chocolate"
    }
]

// llamada a una API con una promesa que se resuelve en 500ms y devuelve el array de productos definido arriba
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

//array de productos filtrado por id
export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(product => product.id === id))
        }, 500)
    })
}

//array de productos filtrado por categoría
export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(product => product.category === category))
        }, 500)
    })
}

//array de productos filtrado por marca
export const getProductsByBrand = (brand) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(product => product.marca === brand))
        }, 500)
    })
}

//array de productos filtrado por nombre
export const getProductsByName = (name) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(product => product.name.toLowerCase().includes(name.toLowerCase())))
        }, 500)
    })
}