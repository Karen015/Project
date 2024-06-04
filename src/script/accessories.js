import { categoryData } from "./category.js";
const mainContainer = document.getElementById("container");
const elecItemsHTML = categoryData.accessories.map((item) => {  
   return `
      <div class ="item">
      <img src = "${item.preview}"   
      <h3>${item.name}</h3>
      <h3>${item.brand}</h3>
      <h3>${item.price}</h3>
      <button>BUY NOW</button>
      </div>
   `
});
mainContainer.innerHTML = elecItemsHTML.join('');git