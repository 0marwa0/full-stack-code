// let mypromise = new Promise((solve, reject) => {
//   let users = [
//     { name: "Ahmed", age: 33 },
//     { name: "Ali", age: 44 },
//   ];
//   if (2 > 5) {
//     solve(users);
//   } else {
//     reject("Users are not found!!");
//   }
// });

// function onReject(msg) {
//   alert(msg);
// }
// mypromise.then(onSuccess);
// mypromise.catch(onReject);
function onSuccess(data) {
  let container = document.getElementById("items");
  container.innerHTML = data
    .map((item) => {
      return `<div>
      <p>
      ${item.title}
      </p>

      <img src="${item.image}" width="30px"/>
      </div>`;
    })
    .join(" ");
}
async function getUsers() {
  // api call
  try {
    let products = await fetch("https://fakestoreapi.com/products").then((r) =>
      r.json()
    );
    console.log(products, "data");
    onSuccess(products);
  } catch (error) {
    onReject("Unable to get users");
  }
}
getUsers();
