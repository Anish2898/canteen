let cart = JSON.parse(localStorage.getItem("cart")) || [];

const container = document.getElementById("cart-items");

cart.forEach(item => {

const div = document.createElement("div");

div.innerHTML = `${item.name} - ₹${item.price}`;

container.appendChild(div);

});

function placeOrder(){

let orders = JSON.parse(localStorage.getItem("orders")) || [];

orders.push(cart);

localStorage.setItem("orders",JSON.stringify(orders));

localStorage.removeItem("cart");

alert("Order placed successfully");

}