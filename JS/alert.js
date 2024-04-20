let nombreProducto = "Arroz con leche";

let precioUnitario = 1200;

let cantidadDeseada = parseInt(prompt(`¿Cuántas unidades de ${nombreProducto} desea comprar?`));

let costoTotal = precioUnitario * cantidadDeseada;

alert(`El costo total de la compra de ${nombreProducto} es de ${costoTotal} pesos.`);

console.log( `El costo total de la compra es de ${costoTotal}`);