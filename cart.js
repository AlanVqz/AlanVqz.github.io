// Array para almacenar los elementos del carrito
let cartItems = [];

// Función para agregar un producto al carrito
function addToCart(product) {
  cartItems.push(product);
  updateCartDisplay();
}

// Función para actualizar la visualización del carrito
function updateCartDisplay() {
  const cartContainer = document.getElementById('cart-items');
  cartContainer.innerHTML = '';

  let total = 0;

  cartItems.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.classList.add('cart-item');
    itemElement.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <p>${item.name} - $${item.price}</p>
    `;
    cartContainer.appendChild(itemElement);
    
    total += item.price;
  });

  document.getElementById('total-amount').textContent = total.toFixed(2);
}

// Manejador de eventos para el botón de Pagar
document.getElementById('checkout-button').addEventListener('click', () => {
  // Aquí puedes implementar la lógica de pago, por ejemplo, redireccionar a una página de pago
  alert('Funcionalidad de pago aún no implementada');
});
