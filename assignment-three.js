// const televisionBrandsHtml = document.getElementById("television_brands");
//
// const brandsList = inventory.map((tv) => {
//   return `<li>${tv.brand}</li>`;
// });
// televisionBrandsHtml.insertAdjacentHTML('afterbegin', brandsList.join(''));

function televisionsBrandsList(televisionObjects, addToHtml, position){
  const televisionBrandsHtml = document.getElementById(addToHtml);
  const brandsList = televisionObjects.map((tv) => {
    return `<li>${tv.brand}</li>`;
  });
  televisionBrandsHtml.insertAdjacentHTML(position, brandsList.join(''));
}

televisionsBrandsList(inventory, "television_brands", "afterbegin");