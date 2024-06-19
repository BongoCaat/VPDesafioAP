const carritoList = document.querySelector("#carrito");
const productosList = document.querySelector("#productos");
const clearCart = document.querySelector("#clearCart");
const closeCart = document.querySelector("#closeCart");
const cartButton = document.querySelector("#cartButton");
const cartItems = document.querySelector("#cartItems");
const carrito = document.querySelector("#carrito");
const totalPrice = document.querySelector("#totalPrice");
const productoCart = document.getElementsByClassName("producto");
const productoShop = document.getElementsByClassName("productoNombre");

const listaProductos = [
    { nombre: "Arroz con Leche", precio: 1050, unidadesDisponibles: 20, categoria: "Dulces", isOnCart: false, unidadesOnCart: 0 },
    { nombre: "Cafe", precio: 3500, unidadesDisponibles: 18, categoria: "Alimentos", isOnCart: false, unidadesOnCart: 0 },
    { nombre: "Leche", precio: 1000, unidadesDisponibles: 50, categoria: "Alimentos", isOnCart: false, unidadesOnCart: 0 },
    { nombre: "Azucar", precio: 950, unidadesDisponibles: 20, categoria: "Alimentos", isOnCart: false, unidadesOnCart: 0 },
    { nombre: "Chocolate", precio: 1200, unidadesDisponibles: 8, categoria: "Dulces", isOnCart: false, unidadesOnCart: 0 },
    { nombre: "Dulce de Leche", precio: 1150, unidadesDisponibles: 12, categoria: "Dulces", isOnCart: false, unidadesOnCart: 0 }
];
console.table(listaProductos);

console.log("Lista de productos:");
for (let i = 0; i < listaProductos.length; i++) {
    console.log(`Producto: ${listaProductos[i].nombre} (${i}) | Precio: $${listaProductos[i].precio} | Categoría: ${listaProductos[i].categoria}`);
    console.log("\n");
};

for (const producto of listaProductos) {
    const li = document.createElement("li");

    li.innerHTML = `${producto.nombre} | $${producto.precio}`;
    li.style.textDecoration = "none";
    li.className = "productoNombre";

    li.onclick = function() {
        addCart(listaProductos.indexOf(producto));
    };

    productosList.appendChild(li);
};

listaProductos.forEach(producto => {
    const li = document.createElement("li");

    li.innerHTML = `${producto.nombre} x${producto.unidadesOnCart}`;
    li.className = "producto";
    li.hidden = true;

    cartItems.appendChild(li);
});

cartButton.addEventListener("click", function() {
    if (carritoList.hidden === true) {
        carritoList.hidden = false;
    } else {
        carritoList.hidden = true;
    }
    return;
});

clearCart.addEventListener("click", function() {
    vaciarCarrito();
    return;
});

closeCart.addEventListener("click", function() {
    carritoList.hidden = true;
    return;
});

function sumarTotal() {
    let total = 0;

    for (const producto of listaProductos) {
        if (producto && producto.isOnCart) {
            total += (producto.unidadesOnCart * producto.precio);
        };
    };

    totalPrice.innerHTML = `Precio Total: $${total}`;

    return;
};

function addCart(elegido) {
    const productoElegido = listaProductos[elegido];

    productoCart[elegido].hidden = false;
    carritoList.hidden = false;

    if (productoElegido.isOnCart) {
        if (productoElegido.unidadesDisponibles <= productoElegido.unidadesOnCart) {
            productoShop[elegido].style.textDecoration = "3px red line-through";

            return;
        }

        productoElegido.unidadesOnCart += 1;
        productoCart[elegido].innerHTML = `${productoElegido.nombre} x${productoElegido.unidadesOnCart}`;

    } else {
        productoElegido.isOnCart = true;
        productoElegido.unidadesOnCart = 1;
        productoCart[elegido].innerHTML = `${productoElegido.nombre} x${productoElegido.unidadesOnCart}`;
    }

    sumarTotal();

    return;
};

function vaciarCarrito() {
    carritoList.hidden = true;
    totalPrice.innerHTML = "";

    listaProductos.forEach(producto => {
        producto.isOnCart = false;
        producto.unidadesOnCart = 0;
    });

    for (let i = 0; i < productoCart.length; i++) {
        productoCart[i].hidden = true;
        productoShop[i].style.textDecoration = "none";

        productoCart[i].innerHTML = `${listaProductos[i].nombre} x${listaProductos[i].unidadesOnCart}`;
    }

    return;
};