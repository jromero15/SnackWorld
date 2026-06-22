const contenedor = document.getElementById("productos");
const buscar = document.getElementById("buscar");
const categoria = document.getElementById("categoria");
const pais = document.getElementById("pais");

function pintarProductos(lista){

contenedor.innerHTML = "";

lista.forEach(producto => {

contenedor.innerHTML += `
<div class="card">

<img src="${producto.imagen}">

<h3>${producto.nombre}</h3>

<p>${producto.pais}</p>

<p>$${producto.precio}</p>

<p>Stock: ${producto.stock}</p>

<button onclick="verDetalle(${producto.id})">
Ver detalle
</button>

</div>
`;

});

}

function verDetalle(id){

localStorage.setItem(
"productoSeleccionado",
id
);

window.location.href =
"detalle.html";

}

function filtrar(){

const texto =
buscar.value.toLowerCase();

const cat =
categoria.value;

const country =
pais.value;

const filtrados =
productos.filter(producto => {

const coincideNombre =
producto.nombre
.toLowerCase()
.includes(texto);

const coincideCategoria =
cat === "" ||
producto.categoria === cat;

const coincidePais =
country === "" ||
producto.pais === country;

return coincideNombre &&
coincideCategoria &&
coincidePais;

});

pintarProductos(filtrados);

}

buscar.addEventListener("input", filtrar);
categoria.addEventListener("change", filtrar);
pais.addEventListener("change", filtrar);

pintarProductos(productos);