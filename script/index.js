"use strict";

const cardbody = document.getElementById("cardbody");
const tablet = document.getElementById("tablet")


window.onload = () => {
    extractCoursesFromAPI();
}


function extractCoursesFromAPI() {
          
    fetch('http://localhost:8081/api/courses')
      .then(response => response.json())
      .then(data => {
        let coursesArray = data;
        console.log(data); 
        populateCourseTable(coursesArray);
        })
    }


    function populateCourseTable(coursesArray) {
        
        for (let course of coursesArray) {
        
    let newRow = tablet.insertRow(-1);

    let idCell = newRow.insertCell(0);
    idCell.innerHTML = course.id;

    let deptCell = newRow.insertCell(1);
    deptCell.innerHTML = course.dept;

    let courseNumCell = newRow.insertCell(2);
    courseNumCell.innerHTML = course.courseNum;

    let courseNameCell = newRow.insertCell(3);
    

    // hyperlink----------------------------------------------------

    let anchor = document.createElement("a");
    anchor.href =`http://localhost:8081/details.html?courseid=${course.id}`;
    anchor.text = course.courseName; 
    courseNameCell.appendChild(anchor);  

        }
        console.log('All courses are in the table');
      }