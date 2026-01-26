// ------------ Modificar pedido ------------

function cambiarCantidad(idProducto, cambio) {
  let pedido = obtenerPedido();

  const producto = pedido.find(p => p.id === idProducto);
  if (!producto) return;

  // ⛔ No permitir bajar de 1
  if (producto.cantidad === 1 && cambio === -1) {
    return;
  }

  producto.cantidad += cambio;

  guardarPedido(pedido);
  renderTablaPedido();
}


function eliminarProducto(idProducto) {
  let pedido = obtenerPedido();
  pedido = pedido.filter(p => p.id !== idProducto);

  guardarPedido(pedido);
  renderTablaPedido();
}


// ------------ Renderizar tabla y total ------------

function renderTablaPedido() {
  const pedido = obtenerPedido();
  const tbody = document.getElementById("tablaPedido");
  const totalSpan = document.getElementById("totalPedido");
  const mensajeVacio = document.getElementById("pedidoVacio");
  const btnSeguir = document.getElementById("btnSeguirComprando");

  tbody.innerHTML = "";
  let total = 0;

  // 🧼 PEDIDO VACÍO
  if (pedido.length === 0) {
    mensajeVacio.style.display = "block";
    btnSeguir.style.display = "inline-block";
    totalSpan.textContent = "$0";
    return;
  }

  // 🛒 HAY PRODUCTOS
  mensajeVacio.style.display = "none";
  btnSeguir.style.display = "inline-block";


  pedido.forEach(producto => {
    const subtotal = producto.precio * producto.cantidad;
    total += subtotal;

    const fila = document.createElement("tr");
    const deshabilitarMenos = producto.cantidad === 1 ? "disabled" : "";

    fila.innerHTML = `
    <td>${producto.nombre}</td>
    <td>$${producto.precio.toLocaleString()}</td>
    <td>
        <button 
        onclick="cambiarCantidad(${producto.id}, -1)"
        ${deshabilitarMenos}
        >−</button>

        ${producto.cantidad}

        <button onclick="cambiarCantidad(${producto.id}, 1)">+</button>
    </td>
    <td>$${subtotal.toLocaleString()}</td>
    <td>
        <button onclick="eliminarProducto(${producto.id})">🗑️</button>
    </td>
    `;

    tbody.appendChild(fila);
  });

  totalSpan.textContent = `$${total.toLocaleString()}`;
}



// ------------ Ejecutar al cargar la página ------------

document.addEventListener("DOMContentLoaded", renderTablaPedido);



// ------------ Enviar pedido por WhatsApp ------------

function enviarPedidoWhatsApp() {
  const pedido = obtenerPedido();

  if (pedido.length === 0) {
    alert("No hay productos en el pedido.");
    return;
  }

  let mensaje = "🛍️ *Nuevo pedido*\n\n";
  let total = 0;

  pedido.forEach(producto => {
    const subtotal = producto.precio * producto.cantidad;
    total += subtotal;

    mensaje += `• ${producto.nombre}\n`;
    mensaje += `  Cantidad: ${producto.cantidad}\n`;
    mensaje += `  Subtotal: $${subtotal.toLocaleString()}\n\n`;
  });

  mensaje += `💰 *Total: $${total.toLocaleString()}*`;

  const telefono = "5491138012748"; // ← cambiá por el número real
  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

  // 👉 LIMPIAR LOCALSTORAGE
  localStorage.removeItem("pedido");

  // Abrir WhatsApp
  window.open(url, "_blank");

  // Opcional: redirigir al catálogo
  // window.location.href = "index.html";
}


// ------------ Conectar el botón con la función ------------


document.getElementById("btnEnviarPedido").addEventListener("click", enviarPedidoWhatsApp);
