const televisionsSold = inventory.reduce((n, {sold}) => n + sold, 0);
console.log(televisionsSold);

const televisionsSoldHtml = document.getElementById("televisions_sold");
televisionsSoldHtml.insertAdjacentText('afterbegin', String(televisionsSold));

const televisionsBought = inventory.reduce((n, {originalStock}) => n + originalStock, 0);
console.log(televisionsBought);

const televisionsBoughtHtml = document.getElementById("televisions_bought");
televisionsBoughtHtml.insertAdjacentText('afterbegin', String(televisionsBought));

const televisionsLeft = televisionsBought - televisionsSold;

const televisionsLeftHtml = document.getElementById("televisions_left");
televisionsLeftHtml.insertAdjacentText('afterbegin', String(televisionsLeft));