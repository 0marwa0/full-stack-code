const products = [
  {
    id: "rec43w3ipXvP28vog",
    title: "high-back bench",
    company: "ikea",
    qu: 1,
    image: "https://www.course-api.com/images/store/product-1.jpeg",
    price: 9.99,
    color: "red",
    available_colors: ["yellow", "white"],
  },
  {
    id: "rec4f2RIftFCb7aHh",
    title: "albany table",
    company: "marcos",
    qu: 1,
    image: "https://www.course-api.com/images/store/product-2.jpeg",
    price: 79.99,
    color: "blue",
    available_colors: ["#6c63ff"],
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
// show items include the color and avilable color
// - use map
// - show the color value as background color
let container = document.querySelector(".list-group");

function showItems() {
  container.innerHTML = products.map((item) => {
    let { title, color, available_colors } = item;
    return `
    <li>
        <p>${title} </p>
        <div style="background-color:${color}"> </div>
        ${available_colors.map((color_item) => {
          return `
               <div style="background-color:${color_item}"> </div>
                `;
        })} 

    </li>
    
    
    `;
  });
}

// check the available colors for every item then add new properity called available_colors_num

let q1 = products.map((item) => {
  return { ...item, available_colors_num: item.available_colors.length };
});

// create a new array that has only the title of the products.
let q2 = products.map((item) => {
  return item.title;
});

// check the price of the each item and if it above 200$ then add new properity called isExpensive:true
let q3 = products.map((item) => {
  if (item.price > 200) {
    return { ...item, isExpensive: true };
  } else {
    return { ...item, isExpensive: false };
  }
});

// update the title of each product in a way that it will containe the compainy name.
let q4 = products.map((item) => {
  return { ...item, title: item.title + "-" + item.company };
});

//
