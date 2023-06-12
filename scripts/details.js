

"use strict";


//tbody element defined by html element id 
const groceryCard = document.getElementById("groceryCard");



const productCard = document.getElementById("productCard");






//arrow function , when window finish loading execute function 
window.onload = () => {
    console.log("First console Window load");

    //show all courses 

    let urlParams = new URLSearchParams(location.search);
    console.log(urlParams);

    let id = 0;

    if (urlParams.has("productid") === true) {
        document.getElementById("error").innerHTML = "";
        id = urlParams.get("productid")
        console.log(id);

        let productIdUrl = "http://localhost:8081/api/products/" + id;
        fetch(productIdUrl)
            .then((response) => response.json())
            .then(product => {
                console.log(product);
                showDetailforProductCard(product);

            });
     
    }
    else {
        document.getElementById("error").innerHTML = "Please click upper left shopping bag to go home.";
    }

}

function showDetailforProductCard(product) {
    
    //build card displaying info
    let divCard = document.createElement("div");
    divCard.className = "card";
    productCard.appendChild(divCard);

    let divCardBody = document.createElement("div");
    divCardBody.className = "card-body";
    divCard.appendChild(divCardBody);


    let cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.innerHTML = "Product ID: " + product.productId;
    divCardBody.appendChild(cardTitle);

    let cardText= document.createElement("p");
    cardText.className = "card-text";
    cardText.innerHTML = "Product Name: " + product.productName;
    cardTitle.appendChild(cardText);

    let unorderedList = document.createElement("ul");
    unorderedList.className = "list-group list-group-flush";
    cardText.appendChild(unorderedList);

    let supplierInfo = document.createElement("li");
   supplierInfo.className = "list-group-item";
   supplierInfo.innerHTML= "Supplier: " + product.supplier;
   unorderedList.appendChild(supplierInfo);

    let unitsInfo = document.createElement("li");
    unitsInfo.className = "list-group-item";
    unitsInfo.innerHTML= "Available units: " + product.unitsInStock;
    supplierInfo.appendChild(unitsInfo);

    let productStatus = document.createElement("li");
    productStatus.className = "list-group-item";
    productStatus.innerHTML= "Discontinued: " + product.discontinued;
    unitsInfo.appendChild( productStatus);

    let unitPrice = document.createElement("li");
    unitPrice.className = "list-group-item";
    unitPrice.innerHTML= "Price: " + product.unitPrice;
    productStatus.appendChild(unitPrice);

    let cardBody = document.createElement("div");
    cardBody.className = "card-body";
    unitPrice.appendChild(cardBody);


    let anchor = document.createElement("a");
    anchor.className = "card-link";
    anchor.href = "products.html";
    anchor.text= "Back to products";
    cardBody.appendChild(anchor);
    
}

