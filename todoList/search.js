let data = [{ name: "Ahmed" }, { name: "Ali" }];
let searchTerm = "Ahmed";

let filteredData = data.filter((item) => {
  return item.name.toLowerCase().includes(searchTerm.toLowerCase());
});

console.log(filteredData);
