const televisionTypes = [];
const televisionSoldOut = [];
const televisionAmbiLight = [];

for( let i = 0; i < inventory.length; i++ ){
    televisionTypes.push(inventory[i].name);

    if(inventory[i].originalStock === inventory[i].sold){
        televisionSoldOut.push(inventory[i]);
    }

    if(inventory[i].options.ambiLight){
        televisionAmbiLight.push(inventory[i]);
    }
}

console.log(televisionTypes);
console.log(televisionSoldOut);
console.log(televisionAmbiLight);

console.log(inventory.sort(function (a, b) {
    return b.price - a.price;
}));

