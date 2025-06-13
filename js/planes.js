document.addEventListener('DOMContentLoaded', () => {
  fetch('datos/productos.json')
    .then(res => res.json())
    .then(data => mostrarPlanes(data));
});

function mostrarPlanes(planes) {
  const container = document.getElementById('planes-container');
  container.innerHTML = '';
  planes.forEach(plan => {
    const div = document.createElement('div');
    div.classList.add('plan-card');
    div.innerHTML = `
      <img src="${plan.imagen}" alt="${plan.nombre}">
      <h3>${plan.nombre}</h3>
      <p>${plan.descripcion}</p>
      <p class="precio">$${plan.precio.toLocaleString()}</p>
      <button class="btn" onclick="agregarAlCarrito(${plan.id})">Agregar</button>
    `;
    container.appendChild(div);
  });
}

function agregarAlCarrito(id) {
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  carrito.push(id);
  localStorage.setItem('carrito', JSON.stringify(carrito));
  alert('Plan agregado al carrito');
}
