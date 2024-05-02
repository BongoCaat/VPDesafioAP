function sumarProductos(precioUnitario, cantidadDeseada){
    let totalGastado = precioUnitario * cantidadDeseada;

    return totalGastado;
}

function comprar() {
    let nombreProducto = "Arroz con leche";

    let precioUnitario = 1000;

    let cantidadDeseada = parseInt(prompt(`¿Cuántas unidades de ${nombreProducto} desea comprar? Precio: (${precioUnitario}) (si compra más de 5 productos tiene un descuento de 10%)`));

    if (cantidadDeseada === 0 || isNaN(cantidadDeseada)) {
        alert("Ingrese una cantidad válida.");

        return;
    }

    costoTotal = sumarProductos(precioUnitario, cantidadDeseada);

    if (cantidadDeseada >= 5) {
        let descuento = costoTotal / 10;
        let costoTotalConDescuento = costoTotal - descuento;

        alert(`El costo total de la compra de ${nombreProducto} es de ${costoTotalConDescuento} pesos con un descuento de 10%.`);
        console.log(`El costo total de la compra es de ${costoTotalConDescuento} pesos con un descuento de 10%(${descuento}).`);
    } else {
        alert(`El costo total de la compra de ${nombreProducto} es de ${costoTotal} pesos.`);
        console.log(`El costo total de la compra es de ${costoTotal} pesos.`);
    }
};
