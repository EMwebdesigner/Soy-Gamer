function obtenerPedido() {
  return JSON.parse(localStorage.getItem("pedido")) || [];
}

function guardarPedido(pedido) {
  localStorage.setItem("pedido", JSON.stringify(pedido));
}


function agregarAlPedido(idProducto) {
  let pedido = obtenerPedido();

  // unir todos los productos
  const todosLosProductos = [
    ...regalosEl,
    ...regalosElla,
    ...fragancias,
    ...promociones
  ];

  // buscar producto
  const producto = todosLosProductos.find(p => p.id === idProducto);
  if (!producto) return;

  // verificar si ya existe en el pedido
  const productoEnPedido = pedido.find(p => p.id === idProducto);

  if (productoEnPedido) {
    productoEnPedido.cantidad += 1;
  } else {
    pedido.push({
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      cantidad: 1
    });
  }

  guardarPedido(pedido);
  actualizarContadorPedido();
}



// función de redirección al carrito --------------------------------------------

function irAPedidos() {
  window.location.href = "pedidos.html";
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".btn-flotante");

  if (btn) {
    btn.addEventListener("click", irAPedidos);
  }
});



// Contador en botón flotante (opcional pero recomendado) ----------------------------

function actualizarContadorPedido() {
  const pedido = obtenerPedido();
  const totalItems = pedido.reduce((acc, item) => acc + item.cantidad, 0);

  const btn = document.querySelector(".btn-flotante");
  if (btn) {
    btn.textContent = `Ver mi pedido (${totalItems})`;
  }
}

document.addEventListener("DOMContentLoaded", actualizarContadorPedido);
