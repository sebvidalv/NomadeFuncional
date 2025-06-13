document.addEventListener('DOMContentLoaded', () => {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  fetch('datos/productos.json')
    .then(res => res.json())
    .then(productos => mostrarCarrito(productos, carrito));
});

function mostrarCarrito(productos, carrito) {
  const container = document.getElementById('carrito-container');
  container.innerHTML = '';
  let total = 0;

  const items = carrito.map(id => productos.find(p => p.id === id));
  items.forEach(plan => {
    const div = document.createElement('div');
    div.classList.add('carrito-item');
    div.innerHTML = `
      <h4>${plan.nombre}</h4>
      <p>$${plan.precio.toLocaleString()}</p>
    `;
    total += plan.precio;
    container.appendChild(div);
  });

  document.getElementById('total').innerText = total.toLocaleString();
}
