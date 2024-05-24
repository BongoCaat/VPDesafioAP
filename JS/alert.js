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
}

function comprar() {
    if (listaProductos.length === 0) {
        alert("No hay mas productos en la lista. Vuelva mas tarde!");

        return;
    };

    let productoElegido = parseInt(prompt(`Elija un producto de la lista: ${listaProductos.map((p, i) => `${p.nombre} (${i})`).join(", ")}`));
    if (productoElegido > listaProductos.length - 1 || productoElegido < 0) {
        alert(`Ingrese un producto válido. (Debe ser un número entre 0 y ${listaProductos.length - 1})`);

        return comprar();
    } else if(isNaN(productoElegido)) {
        alert("Gracias por visitarnos. Vuelva pronto!! :)");

        return;
    };

    let nombreProducto = listaProductos[productoElegido].nombre;
    let precioProducto = listaProductos[productoElegido].precio;
    let unidadesDisponible = listaProductos[productoElegido].unidadesDisponibles;
    let categoriaProducto = listaProductos[productoElegido].categoria;

    console.log(`Producto: ${nombreProducto}, Precio: $${precioProducto}, Cantidad: ${unidadesDisponible}, Categoría: ${categoriaProducto}`);

    if (nombreProducto) {
        if (confirm(`Has seleccionado el producto ${nombreProducto} de la categoría ${categoriaProducto} - Precio: $${precioProducto} - Disponible: ${unidadesDisponible} unidades. ¿Deseas comprarlo?`)) {
            console.log(`Has seleccionado el producto ${nombreProducto} (${productoElegido})`);
        } else {
            alert("Ha cancelado la compra. Vuelva pronto!");

            return;
        };
    } else {
        alert("No ha seleccionado ningún producto.");

        return;
    };

    let cantidad = parseInt(prompt(`¿Cuántas unidades de ${nombreProducto} desea comprar? Unidades: ${unidadesDisponible} - Precio: $${precioProducto} (Si compra más de 5 unidades tiene un descuento de 10%)`));

    if (cantidad === 0 || isNaN(cantidad) || cantidad < 0) {
        alert("Ingrese una cantidad válida.");

        return;
    } else if (cantidad > unidadesDisponible) {
        alert(`Solo se puede comprar hasta ${unidadesDisponible} unidades de este producto.`);

        return comprar();
    } else if (cantidad <= unidadesDisponible) {
        listaProductos[productoElegido].unidadesDisponibles = (unidadesDisponible - cantidad);

        if (cantidad === unidadesDisponible || unidadesDisponible === 0) {
            listaProductos.splice(productoElegido, 1);
            alert(`Has comprado todas las unidades de ${nombreProducto}, se ha eliminado este producto de la lista.`);

            console.table(listaProductos);
        }
    };

    let costoTotal = sumarProductos(precioProducto, cantidad);

    if (cantidad > 5) {
        let descuento = costoTotal / 10;
        let costoTotalConDescuento = costoTotal - descuento;

        alert(`El costo total de la compra del producto ${nombreProducto} es de $${costoTotalConDescuento} pesos con un descuento de 10%`);
        console.log(`El costo total de la compra del producto ${nombreProducto} es de $${costoTotalConDescuento} pesos con un descuento de 10% (-$${descuento}).`);
    } else {
        alert(`El costo total de la compra del producto ${nombreProducto} es de $${costoTotal} pesos.`);
        console.log(`El costo total de la compra del producto ${nombreProducto} es de $${costoTotal} pesos.`);
    };

    return;
};


