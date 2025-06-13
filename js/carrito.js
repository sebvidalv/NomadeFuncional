let carrito = [];

function agregarProducto(nombre, precio) {
  if (carrito.length > 0) {
    alert("Solo puedes agregar un plan al carrito.");
    return;
  }

  carrito.push({ nombre, precio });
  actualizarCarrito();
  mostrarCarrito(); // Asegúrate de que esta función esté definida si la usas
}

function eliminarProducto(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}

function actualizarCarrito() {
  const lista = document.getElementById('lista-carrito');
  const totalSpan = document.getElementById('total-carrito');
  const contador = document.getElementById('contador-carrito');

  if (!lista || !totalSpan || !contador) return;

  lista.innerHTML = '';
  let total = 0;

  carrito.forEach((producto, index) => {
    const item = document.createElement('li');
    item.classList.add('item-carrito');
    item.innerHTML = `
      <span><strong>${producto.nombre}</strong> - $${producto.precio.toLocaleString('es-CL')}</span>
      <button class="btn-eliminar" aria-label="Eliminar" data-index="${index}">🗑️</button>
    `;
    lista.appendChild(item);
    total += producto.precio;
  });

  totalSpan.textContent = total.toLocaleString('es-CL');
  contador.textContent = carrito.length;

  agregarEventosEliminar();
}

function agregarEventosEliminar() {
  document.querySelectorAll('.btn-eliminar').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const index = parseInt(e.currentTarget.getAttribute('data-index'));
      eliminarProducto(index);
    });
  });
}

function toggleCarrito() {
  const panel = document.getElementById('carrito-panel');
  if (panel) panel.classList.toggle('visible');
}

function finalizarCompra() {
  alert("Compra finalizada");
  carrito = [];
  actualizarCarrito();
  toggleCarrito();
}

document.addEventListener('DOMContentLoaded', () => {
  const botonFlotante = document.getElementById('carrito-btn-flotante');
  if (botonFlotante) {
    botonFlotante.addEventListener('click', toggleCarrito);
  }
});
