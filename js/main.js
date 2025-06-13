console.log("Inicio cargado correctamente.");

/* js/planes.js */
fetch("datos/productos.json")
  .then(res => res.json())
  .then(productos => {
    const contenedor = document.getElementById("planes-container");
    productos.forEach(prod => {
      const div = document.createElement("div");
      div.innerHTML = `
        <h3>${prod.nombre}</h3>
        <p>${prod.descripcion}</p>
        <p>Precio: $${prod.precio}</p>
        <button onclick="agregarAlCarrito(${prod.id})">Agregar al carrito</button>
      `;
      contenedor.appendChild(div);
    });
  });

function agregarAlCarrito(id) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.push(id);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert("Agregado al carrito");
}