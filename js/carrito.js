let carrito = [];

function agregarProducto(nombre, precio) {
  // Validar si ya hay un producto en el carrito
  if (carrito.length > 0) {
    alert("Solo puedes agregar un plan al carrito.");
    return; // No agrega más
  }

  const producto = { nombre, precio };
  carrito.push(producto);
  actualizarCarrito();
  mostrarCarrito(); // Opcional: muestra el carrito al agregar
}


function eliminarProducto(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}

function actualizarCarrito() {
  const lista = document.getElementById('lista-carrito');
  const totalSpan = document.getElementById('total-carrito');
  const contador = document.getElementById('contador-carrito');

  lista.innerHTML = '';
  let total = 0;
  carrito.forEach((producto, index) => {
    const item = document.createElement('li');
    item.innerHTML = `
      <span><strong>${producto.nombre}</strong> - $${producto.precio.toLocaleString()}</span>
      <button onclick="eliminarProducto(${index})" class="btn-eliminar">✖</button>
    `;
    lista.appendChild(item);
    total += producto.precio;
  });

  totalSpan.textContent = total.toLocaleString();
  contador.textContent = carrito.length;
}

function toggleCarrito() {
  document.getElementById('carrito-panel').classList.toggle('visible');
}

function finalizarCompra() {
  alert("Compra finalizada");
  carrito = [];
  actualizarCarrito();
  toggleCarrito();
}

// Escucha clic en el botón flotante para abrir/cerrar el carrito
document.addEventListener('DOMContentLoaded', () => {
  const botonFlotante = document.getElementById('carrito-btn-flotante');
  if (botonFlotante) {
    botonFlotante.addEventListener('click', toggleCarrito);
  }
});
