function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

function Descuento() {
  const ingresaprecio = document.getElementById("ingresaprecio");
  const priceValue = ingresaprecio.value;
  
  const ingresadescuento = document.getElementById("ingresadescuento");
  const discountValue = ingresadescuento.value;

  const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

  const resultP = document.getElementById("Resultado");
  resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}
