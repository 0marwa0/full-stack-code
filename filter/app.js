import { products } from "./products.js";
const productsContainer = document.querySelector(".products-container");
const companies = document.querySelector(".companies");
let filterBy = "All";

companies.addEventListener("click", (e) => {
  if (e.target.classList.contains("company-btn")) {
    e.preventDefault();
    let clickedValue = e.target.getAttribute("data-name");
    //
    filterBy = clickedValue;
    // console.log(filterBy, data);
    showProducts(products, clickedValue);
  }
});
function showProducts(data, filterBy) {
  let filterdProduct = data.filter((item) => {
    return item.company == filterBy;
  });

  let result = filterBy == "All" ? data : filterdProduct;
  console.log(result);
  productsContainer.innerHTML = result
    .map((item) => {
      let { id, image, title, price } = item;
      return `<article class="product" data-id="${id}">
          <img
            src="${image}"
            class="product-img img"
            alt=""
          />
          <footer>
            <h5 class="product-name">${title}</h5>
            <span class="product-price">${price}</span>
          </footer>
        </article>
  `;
    })
    .join(" ");
}

// console.log(products);
showProducts(products, filterBy);
