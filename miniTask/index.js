const products = [
  {
    id: "rec43w3ipXvP28vog",
    title: "high-back bench",
    company: "ikea",
    qu: 1,
    image: "https://www.course-api.com/images/store/product-1.jpeg",
    price: 9.99,
    color: "red",
    available_colors: ["yellow", "black", "white"],
  },
  {
    id: "rec4f2RIftFCb7aHh",
    title: "albany table",
    company: "marcos",
    qu: 1,
    image: "https://www.course-api.com/images/store/product-2.jpeg",
    price: 79.99,
    color: "blue",
    available_colors: ["#6c63ff", "pink", "green"],
  },
  {
    id: "rec8kkCmSiMkbkiko",
    title: "accent chair",
    company: "caressa",
    qu: 1,
    image: "https://www.course-api.com/images/store/product-3.jpeg",
    price: 25.99,
    color: "teal",
    available_colors: ["yellow", "pink", "black"],
  },
];

let container = document.querySelector(".list-group");
function showList(data) {
  container.innerHTML = data

    .map((item) => {
      let { title, qu, id } = item;

      return `
    <li class="list-group-item d-flex gap-4 align-items-center">
    <p>${title}</p>
    <p>${qu}</p>
    <button class="btn btn-success" onclick="increase('${id}')">+</button>
    <button class="btn btn-danger">-</button>
    <div class="color-item" style="background-color:${item.color}">
    ${item.color}</div>
    <p>Available Colors:</p>
     ${item.available_colors
       .map((colorItem) => {
         return `<div class="color-item" style="background-color:${colorItem}">${colorItem}</div>`;
       })
       .join("")}

       <img src="${item.image}" class="img-product"/>

       <p>${item.price * qu}</p>
  </li>
    `;
    })
    .join(" ");
}

function increase(id) {
  const updatedProduct = products.find((item) => item.id === id);
  const updatedProductv2 = products.find((item) => {
    return item.id === id;
  });
  // find give an object
  if (updatedProduct) {
    updatedProduct.qu++;
    // console.log(updatedProduct, "after update");
    showList(products);
  }
  // call showList again
  showTotalPrice();
  // showList(updatedList);
}
// show the total price for all item
let totalP = document.getElementById("total");

function showTotalPrice() {
  let total = 0;
  for (const item of products) {
    total += +item.price * item.qu;
  }
  console.log(total, "now");
  totalP.textContent = total;
  return total;
}
console.log(showTotalPrice(), "total");

// do the decrease function

// select the color of the item from the avaiable colors

// filter items based on the color

// filter item based on the price

showList(products);

// create an array of items

// create add function and show all the items

// add delete button with each item

// when u click on the delete it should delete this item
