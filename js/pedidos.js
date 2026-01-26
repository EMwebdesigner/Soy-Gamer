// ------------ Renderizar tabla y total ------------

function renderTablaPedido() {
  const pedido = obtenerPedido();
  const tbody = document.getElementById("tablaPedido");
  const totalSpan = document.getElementById("totalPedido");

  tbody.innerHTML = "";

  let total = 0;

  pedido.forEach(producto => {
    const subtotal = producto.precio * producto.cantidad;
    total += subtotal;

    const fila = document.createElement("tr");

    fila.innerHTML = `
      <td>${producto.nombre}</td>
      <td>$${producto.precio.toLocaleString()}</td>
      <td>${producto.cantidad}</td>
      <td>$${subtotal.toLocaleString()}</td>
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
