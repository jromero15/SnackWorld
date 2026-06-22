const detalle =
document.getElementById("detalle");

const id =
Number(
localStorage.getItem(
"productoSeleccionado"
)
);

const producto =
productos.find(
p => p.id === id
);

detalle.innerHTML = `

<img src="${producto.imagen}">

<h1>${producto.nombre}</h1>

<p>
${producto.descripcion}
</p>

<p>
País:
${producto.pais}
</p>

<p>
Categoría:
${producto.categoria}
</p>

<p>
Precio:
$${producto.precio}
</p>

<p>
Stock:
${producto.stock}
</p>

`;