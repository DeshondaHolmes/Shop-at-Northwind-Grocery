"use strict";

const tbody = document.getElementById("viewAllProducts");

const productsSearchSelect = document.getElementById("productsSearchSelect");

const viewAllTable = document.getElementById("viewAllTable");

const categorySelectionRow = document.getElementById("categorySelectionRow");

const categorySelect = document.getElementById("categorySelect");

const table = document.getElementById("foodCategoryTable");

const categoryTable = document.getElementById("categoryTable");

const productCategory = document.getElementById("productCategory");

window.onload = () => {
    console.log("First on load");

    productsSearchSelect.onchange = onSearchChange;

    categorySelect.onchange = onCategorySelectChange;

    console.log(productsSearchSelect);
}

function onSearchChange() {

    let selectedOption = productsSearchSelect.value;


    console.log(selectedOption);

    if (selectedOption.includes("View all")) {
        viewAllTable.style.display = "block";
        productCategory.style.display = "none"
        categorySelectionRow.style.display = "none";
        tbody.innerHTML = "";

    } else if (selectedOption.includes("Search by category")){
        categorySelectionRow.style.display = "block";
        viewAllTable.style.display = "none";
        productCategory.style.display = "block";
        table.innerHTML = "";
        categorySelect.selectedIndex = 0;


    } else {
        viewAllTable.style.display = "none";
        categorySelectionRow.style.display = "none";
       
        categoryTable.style.display = "none";
        categorySelect.selectedIndex = 0;
        table.innerHTML = "";

    }

    console.log("second console this is view all change function");
    //fetch method , url to get api with courses
    fetch("http://localhost:8081/api/products")

        .then((response) => response.json())

        .then((products) => {
            console.log(products);

            //for loop, used to loop through values starting at index
            for (let i = 0; i < products.length; i++) {

                buildViewAllProductsTable(products[i]);

            }
        });
}
function onCategorySelectChange() {
    let selectedCategory = categorySelect.value;
    console.log(selectedCategory);

    if (selectedCategory) {

        categoryTable.style.display = "block";
      
        
        table.innerHTML = "";
    }
    else {
        categoryTable.style.display= "none";
        table.style.display = "none"
        
    }



    // let id= -1;
    let theUrl = `http://localhost:8081/api/categories/${selectedCategory}`;
    console.log(theUrl);
    fetch(theUrl)
        .then((response) => response.json())
        .then(products => {
            console.log("products");
            console.log(products);
            buildCategoryTable(products);

        });

}

function buildViewAllProductsTable(products) {

    //define row to be inside table body for each course
    let row = tbody.insertRow(-1);

    //method insert new td into table row
    let cell1 = row.insertCell(0);
    cell1.className = "text-center ";
    cell1.innerHTML = products.productId;

    let cell2 = row.insertCell(1);
    cell2.className = "text-center ";
    cell2.innerHTML = products.productName;


    // let cell3 = row.insertCell(2);
    // cell3.className = "text-center mx-5";
    // cell3.innerHTML = courses[i].courseNum + "/";


    let cell3 = row.insertCell(2);
    cell3.className = "text-center ";
    cell3.innerHTML = Number(products.unitPrice).toFixed(2);

    let cell4 = row.insertCell(3);
    cell4.className = "text-center ";


    let anchor = document.createElement("a");
    anchor.href = `product-details.html?categoryid=${products.categoryId}`;
    anchor.text = "See details";

    // anchor.className = "";
    // anchor.className = "container-fluid";

    // const coursesLink = document.getElementById("coursesLink");
    cell4.appendChild(anchor);
}


function buildCategoryTable(products) {

    for (let product of products) {

        //define row to be inside table body for each course
        let row = table.insertRow(-1);

        //method insert new td into table row
        let cell1 = row.insertCell(0);
        cell1.className = "text-center ";
        cell1.innerHTML = product.productName;

        let cell2 = row.insertCell(1);
        cell2.className = "text-center ";
        cell2.innerHTML = product.supplier;


        // let cell3 = row.insertCell(2);
        // cell3.className = "text-center mx-5";
        // cell3.innerHTML = courses[i].courseNum + "/";


        let cell3 = row.insertCell(2);
        cell3.className = "text-center ";
        cell3.innerHTML = product.categoryId;

    }

}




