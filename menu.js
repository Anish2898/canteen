const foods = [
 {name:"Dosa",price:40},
 {name:"Burger",price:60},
 {name:"Samosa",price:20},
 {name:"Coffee",price:15}
];

const container = document.getElementById("menu-container");

foods.forEach(food => {

const card = document.createElement("div");

card.innerHTML = `
<h3>${food.name}</h3>
<p>₹${food.price}</p>
<button onclick="addToCart('${food.name}',${food.price})">
Add to Cart
</button>
`;

container.appendChild(card);

});

function addToCart(name,price){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.push({name,price});

localStorage.setItem("cart",JSON.stringify(cart));

alert("Added to cart");

}