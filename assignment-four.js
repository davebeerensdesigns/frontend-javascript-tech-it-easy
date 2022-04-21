
function televisionNameGenerator(television){
    return television.brand + " " + television.type + " - " + television.name;
}

console.log(televisionNameGenerator(inventory[0]));

function televisionPriceFormat(televisionPrice){
    return "€" + televisionPrice + ",-";
}

console.log(televisionPriceFormat(inventory[0].price));


function televisionScreenSizes(television){
    const televisionSizes = [];
    for(let i = 0; i < television.availableSizes.length; i++){
        const inches = television.availableSizes[i];
        const centimeters = inches * 2.54;
        televisionSizes.push(inches + " inches (" + Math.round(centimeters) + " cm)");
    }
    return televisionSizes.join(' | ');
}

console.log(televisionScreenSizes(inventory[0]));



function televisionsInformation(televisionObject, addToHtml, position){
    const televisionInformationHtml = document.getElementById(addToHtml);
    let televisionFormatted = [];

    televisionFormatted.push("<h3>" + televisionNameGenerator(televisionObject) + "</h3>");
    televisionFormatted.push("<h4>" + televisionPriceFormat(televisionObject.price) + "</h4>");
    televisionFormatted.push("<p>" + televisionScreenSizes(televisionObject) + "</p>");
    televisionInformationHtml.insertAdjacentHTML(position, televisionFormatted.join(''));
}

televisionsInformation(inventory[0], "television_information", "afterbegin");


function AllTelevisionsInformation(televisionsList, addToHtml, position){
    televisionsList.map((item) => {
        return televisionsInformation(item, addToHtml, position);
    });
}

AllTelevisionsInformation(inventory, "television_all_information", "afterbegin");
