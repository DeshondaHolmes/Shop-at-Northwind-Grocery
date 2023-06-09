// // location.search is the way you access
//  // the query string portion of the URL

"use strict";


//tbody element defined by html element id 
const groceryCard = document.getElementById("groceryCard");



//arrow function , when window finish loading execute function 
window.onload = () => {
    console.log("First console Window load");

    //show all courses 

    let urlParams = new URLSearchParams(location.search);
    console.log(urlParams);

    let id = -1;
    if (urlParams.has("categoryid") === true) {
        document.getElementById("error").innerHTML = "";
        id = urlParams.get("categoryid")
        console.log(id);

        let courseIdUrl = "" + id;
        fetch(courseIdUrl)
            .then((response) => response.json())
            .then(course => {
                console.log(course);
                showDetailforCourseCard(course);

            });
        // Now that you know the course id, make an
        // AJAX call to get that one course
        // and in the callback, display it.
        // Hint: you can create the URL you need for
        // the ajax request by concatenating 
        // "http://localhost:8081pi/courses/" with the id!
    }
    else {
        document.getElementById("error").innerHTML = "Oh no! there's no querystring... you should get to this page through a hyperlink."
    }

      showCourseDetails();
}

function showDetailforCourseCard(course) {
    // fill in html elements to describe the course that was passed in.



    let divCol = document.createElement("div");
    divCol.className = "col-6";
    courseCard.appendChild(divCol);

    let divCard = document.createElement("div");
    divCard.className = "card";
    divCol.appendChild(divCard);


    let divHeader = document.createElement("div");
    divHeader.className = "card-header";
    divHeader.innerHTML = "Course ID: " + course.id;
    divCard.appendChild(divHeader);

    let unorderedList = document.createElement("ul");
    unorderedList.className = "list-group list-group-flush";
    divHeader.appendChild(unorderedList);

    let courseInstructor = document.createElement("li");
    courseInstructor.className = "list-group-item";
    courseInstructor.innerHTML= "Instuctor: " + course.instructor;
    unorderedList.appendChild(courseInstructor);

    let courseStart = document.createElement("li");
    courseStart.className = "list-group-item";
    courseStart.innerHTML= "Start Date: " + course.startDate;
    courseInstructor.appendChild(courseStart);

    let courseDuration = document.createElement("li");
    courseDuration.className = "list-group-item";
    courseDuration.innerHTML= "Number of days: " + course.numDays;
    courseStart.appendChild(courseDuration);

}

//function to show all courses
// function showCourseDetails() {

//     console.log("second console this is show all courses function");


//     //fetch method , url to get api with courses
//     fetch("http://localhost:8081/api/courses")

//         .then((response) => response.json())

//         .then((courses) => {
//             console.log(courses);

//             //for loop, used to loop through values starting at index

//                 //define row to be inside table body for each course
//                 let row = tbody.insertRow(-1);

//                 //method insert new td into table row
//                 let cell1 = row.insertCell(0);
//                 cell1.className = "text-center px-2";
//                 cell1.innerHTML = courses[i].instructor;

//                 let cell2 = row.insertCell(1);
//                 cell2.className = "text-center px-2";
//                 cell2.innerHTML = courses[i].startDate;


//                 // let cell3 = row.insertCell(2);
//                 // cell3.className = "text-center mx-5";
//                 // cell3.innerHTML = courses[i].courseNum + "/";


//                 let cell3 = row.insertCell(2);
//                 cell3.className = "text-center mx-5";
//                 cell3.innerHTML = courses[i].numDays;

//                 // let cell4= row.document.createElement("a");
//                 // cell4.className = "text-center mx-5";
//                 // cell3.innerHTML = courses[i].courseNum + "/";

//                 // let anchor = document.createElement("a");
//                 // anchor.href = `http://localhost:8081/details.html?courseid=${courses[i].id}`;
//                 // anchor.className = "col-6";
//                 // anchor.className = "container-fluid";

//                 // const coursesLink = document.getElementById("coursesLink");
//                 // cell3.appendChild(anchor);
//                 // anchor.text = courses[i].courseName;




//             }
//         });



// }
//   let row = table.insertRow(-1);
//   let cell0 = row.insertCell(0);
//   let cell1 = row.insertCell(1);
//   let cell2 = row.insertCell(2);
//   let cell3 = row.insertCell(3);
//   let cell4 = row.insertCell(4);
//   let cell5 = row.insertCell(5);
//   let cell6 = row.insertCell(6);

//   cell0.innerHTML = data.id;
//   cell1.innerHTML = data.name;
//   cell2.innerHTML = data.email;
//   cell3.innerHTML = data.phone;
//   cell4.innerHTML = data.website;
//   cell5.innerHTML = data.company.name;
//   cell6.innerHTML = data.company.catchPhrase;



