function renderProductos(productos, contenedorId) {
  const contenedor = document.getElementById(contenedorId);
  const pedido = obtenerPedido(); // leer estado actual

  contenedor.innerHTML = "";

  productos.forEach(producto => {
    const itemPedido = pedido.find(p => p.id === producto.id);
    const cantidad = itemPedido ? itemPedido.cantidad : 0;
    const subtotal = cantidad > 0 ? producto.precio * cantidad : 0;

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <div class="card-body">
        <h3>${producto.nombre}</h3>
        <p class="precio">$${producto.precio.toLocaleString()}</p>

        ${
          cantidad > 0
            ? `<p class="subtotal">
                 En pedido: ${cantidad} → $${subtotal.toLocaleString()}
               </p>`
            : ""
        }

        <button onclick="agregarAlPedido(${producto.id})">
          Agregar
        </button>
      </div>
    `;

    contenedor.appendChild(card);
  });
}


function renderTodosLosCatalogos() {
  renderProductos(regalosEl, "regalos-el");
  renderProductos(regalosElla, "regalos-ella");
  renderProductos(fragancias, "fragancias");
  renderProductos(promociones, "promociones");
}


// FILTRADOS DE PRODUCTOS --------------------------------------------

function filtrarCatalogos(texto) {
  renderProductos(
    regalosEl.filter(p => p.nombre.toLowerCase().includes(texto)),
    "regalos-el"
  );

  renderProductos(
    regalosElla.filter(p => p.nombre.toLowerCase().includes(texto)),
    "regalos-ella"
  );

  renderProductos(
    fragancias.filter(p => p.nombre.toLowerCase().includes(texto)),
    "fragancias"
  );

  renderProductos(
    promociones.filter(p => p.nombre.toLowerCase().includes(texto)),
    "promociones"
  );
}




// RENDERIZADO  --------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  renderTodosLosCatalogos();

    const buscador = document.getElementById("buscador");

  buscador.addEventListener("input", (e) => {
    const texto = e.target.value.toLowerCase();
    filtrarCatalogos(texto);
  });

});