const nombreProduct = document.getElementsByClassName("nombreProducto");
const nombreProductoU = document.getElementById("nombreProductoUnidad");
const precioProduct = document.getElementById("precioProducto");
const unidadesProduct = document.getElementById("unidadesProducto");
const categoriaProduct = document.getElementById("categoriaProducto");
const carritoList = document.getElementById("carrito");
const buyButton = document.getElementsByClassName("btn btn-dark");

function sumarProductos(precioUnitario, cantidadDeseada) {
    let totalGastado = precioUnitario * cantidadDeseada;

    return totalGastado;
};

const listaProductos = [
    { nombre: "Arroz con Leche", precio: 1050, unidadesDisponibles: 50, categoria: "Dulces" },
    { nombre: "Cafe", precio: 3500, unidadesDisponibles: 28, categoria: "Alimentos" },
    { nombre: "Leche", precio: 900, unidadesDisponibles: 100, categoria: "Alimentos" },
    { nombre: "Azucar", precio: 770, unidadesDisponibles: 48, categoria: "Alimentos" },
    { nombre: "Chocolate", precio: 1200, unidadesDisponibles: 30, categoria: "Dulces" },
    { nombre: "Dulce de Leche", precio: 1150, unidadesDisponibles: 42, categoria: "Dulces" },
];
console.table(listaProductos);

console.log("Lista de productos:");
for (let i = 0; i < listaProductos.length; i++) {
    console.log(`Nombre del producto: ${listaProductos[i].nombre} (${i}) | Categoría: ${listaProductos[i].categoria}`);
    nombreProduct[i].innerHTML = listaProductos[i].nombre;
};

function comprar(elegido) {
    const productoElegido = elegido;

    if (productoElegido === undefined || isNaN(productoElegido)) {
        alert("No ha seleccionado ningún producto. Vuelva a intentarlo.");

        return;
    };

    const nombreProducto = listaProductos[productoElegido].nombre;
    nombreProductoU.innerHTML = `Nombre del producto: ${nombreProducto}`;

    const precioProducto = listaProductos[productoElegido].precio;
    precioProduct.innerHTML = `Precio del producto: $${precioProducto}`;

    const unidadesDisponible = listaProductos[productoElegido].unidadesDisponibles;
    unidadesProduct.innerHTML = `Unidades del producto: ${unidadesDisponible}`;

    const categoriaProducto = listaProductos[productoElegido].categoria;
    categoriaProduct.innerHTML = `Categoría del producto: ${categoriaProducto}`;

    if (!isNaN(productoElegido)) {
        carritoList.hidden = false;
        buyButton[0].hidden = false;

        if (unidadesDisponible === 0 || isNaN(unidadesDisponible)) {
            buyButton[0].hidden = true;
        } else if (unidadesDisponible > 0) {
            buyButton[0].hidden = false;
        };

        buyButton[0].onclick = () => {
            comprarCantidad(nombreProducto, unidadesDisponible, precioProducto, productoElegido);
        };

        console.log(`Producto: ${nombreProducto}, Precio: $${precioProducto}, Cantidad: ${unidadesDisponible}, Categoría: ${categoriaProducto}`);
    }

    return { nombreProducto, precioProducto, unidadesDisponible, productoElegido };
};

function comprarCantidad(nombreProducto, unidadesDisponible, precioProducto, productoElegido) {
    let cantidad = parseInt(prompt(`¿Cuántas unidades de ${nombreProducto} desea comprar? Unidades: ${unidadesDisponible} - Precio: $${precioProducto} (Si compra más de 5 unidades tiene un descuento de 10%)`));

    if (cantidad === 0 || cantidad < 0) {
        alert("Ingrese una cantidad válida.");

        return;
    } else if (isNaN(cantidad)) {
        alert("Gracias por su visita! Vuelva pronto!!");

        return;
    } else if (cantidad > unidadesDisponible) {
        alert(`Solo se puede comprar hasta ${unidadesDisponible} unidades de este producto.`);

        return comprar(productoElegido);
    } else if (cantidad <= unidadesDisponible) {
        listaProductos[productoElegido].unidadesDisponibles = (unidadesDisponible - cantidad);
        unidadesProduct.innerHTML = `Unidades del producto: ${listaProductos[productoElegido].unidadesDisponibles}`;

        if (cantidad === unidadesDisponible || unidadesDisponible === 0) {
            listaProductos[productoElegido].unidadesDisponibles = "No disponible";
            unidadesProduct.innerHTML = `Unidades del producto: ${listaProductos[productoElegido].unidadesDisponibles}`;

            buyButton[0].hidden = true;

            alert(`Has comprado todas las unidades de ${nombreProducto}.`);
        }
        buyButton[0].hidden = true;
    };

    let costoTotal = sumarProductos(precioProducto, cantidad);

    if (cantidad > 5) {
        let descuento = (costoTotal / 10);
        let costoTotalConDescuento = (costoTotal - descuento);

        alert(`El costo total de la compra del producto ${nombreProducto} es de $${costoTotalConDescuento} pesos con un descuento de 10%`);
        console.log(`El costo total de la compra del producto ${nombreProducto} es de $${costoTotalConDescuento} pesos con un descuento de 10% (-$${descuento}).`);
    } else {
        alert(`El costo total de la compra del producto ${nombreProducto} es de $${costoTotal} pesos.`);
        console.log(`El costo total de la compra del producto ${nombreProducto} es de $${costoTotal} pesos.`);
    };
    alert("Gracias por su compra! Vuelva pronto!!");
    console.table(listaProductos);

    // return { nombreProducto, precioProducto, unidadesDisponible, productoElegido };
    return;
};

