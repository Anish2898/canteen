const ORDER_API = "http://localhost:5000/api/orders";



// PLACE ORDER
async function placeOrder(){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let user = JSON.parse(localStorage.getItem("user"));

if(!user){

alert("Please login first");

window.location.href="login.html";

return;

}

let total = 0;

cart.forEach(item=>{
total += item.price;
});

try{

const res = await fetch(ORDER_API + "/place",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

userId:user._id,
items:cart,
total:total

})

});

const data = await res.json();

alert(data.message || "Order placed");

localStorage.removeItem("cart");

window.location.href="orders.html";

}

catch(err){

console.log(err);
alert("Order failed");

}

}



// LOAD ORDERS
async function loadOrders(){

try{

const res = await fetch(ORDER_API);

const orders = await res.json();

const container = document.getElementById("orders");

orders.forEach(order=>{

const div = document.createElement("div");

div.className = "order-card";

div.innerHTML = `

<h3>Order ID: ${order._id}</h3>
<p>Total: ₹${order.total}</p>
<p>Status: ${order.status}</p>

`;

container.appendChild(div);

});

}

catch(err){

console.log(err);

}

}



window.onload = loadOrders;