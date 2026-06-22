let session = JSON.parse(localStorage.getItem("session"));

if (!session) {
  window.location.href = "index.html";
}

document.getElementById("welcome").innerText =
  "Bienvenido " + session.user;

// LOGOUT
function logout() {
  localStorage.removeItem("session");
  window.location.href = "index.html";
}

// RENDER PRODUCTOS
function renderProducts() {
  const container = document.getElementById("productGrid");

  products.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <img src="${p.imagen}" alt="${p.nombre}">
        <div class="card-body">
          <h4>${p.nombre}</h4>
          <p>${p.categoria} - ${p.pais}</p>
          <p class="price">$${p.precio}</p>
          <p>Stock: ${p.stock}</p>
        </div>
      </div>
    `;
  });
}

renderProducts();