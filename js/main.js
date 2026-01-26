function renderProductos(productos, contenedorId) {
  const contenedor = document.getElementById(contenedorId);

  productos.forEach(producto => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="img/${producto.imagen}" alt="${producto.nombre}">
      <div class="card-body">
        <h3>${producto.nombre}</h3>
        <p class="precio">$${producto.precio.toLocaleString()}</p>
        <button onclick="agregarAlPedido(${producto.id})">
          Agregar
        </button>
      </div>
    `;

    contenedor.appendChild(card);
  });
}


renderProductos(regalosEl, "regalos-el");
renderProductos(regalosElla, "regalos-ella");
renderProductos(fragancias, "fragancias");
renderProductos(promociones, "promociones");
