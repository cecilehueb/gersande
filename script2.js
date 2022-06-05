let page = document.querySelectorAll(".page");
let header = document.querySelector(".header");
let maincontentArr = document.querySelectorAll(".maincontent");

// header.addEventListener("click", function(event) {
//     if (event.target.classList.contains("page")) {
//         let targetClass = event.target.classList[1];
//         addHidden(".img");
//         addHidden(".project_text");
//         removeHidden(".project");
        
//         for(i=0; i<maincontentArr.length; i++) {
//             if (maincontentArr[i].classList.contains(targetClass)){
//                 maincontentArr[i].classList.remove("hidden");
//                 page[i].classList.add("active");
//             } else {
//                 maincontentArr[i].classList.add("hidden");
//                 page[i].classList.remove("active");

//             };
//         };


//     };

// }, false)

// script for 'go back home', doesnt work 

// let kaft = document.querySelector(".kaft");

// kaft.addEventListener("click", function() {
//     for(i=0; i<maincontentArr.length; i++) {
//                     if (maincontentArr[i].classList.contains(targetClass)){
//                         maincontentArr[i].classList.remove("hidden");
//                         page[i].classList.add("active");
//                     } else {
//                         maincontentArr[i].classList.add("hidden");
//                         page[i].classList.remove("active");
        
//                     };
//                 };

// })

// bubbles at clicks on .workWrap
// adds 'hidden' class to all .project
// then replaces 'hidden' for 'focus_project' for the clicked element
// then removes 'hidden' from description text and img


// let workWrap = document.querySelector(".work_wrapper");
// workWrap.addEventListener("click", function(event) {
//     if (event.target.matches(".project") || event.target.matches(".project_title") || event.target.matches(".project_title div")) {
//         let projectArr = document.querySelectorAll(".project");
//         for (i=0; i<projectArr.length; i++) {
//             projectArr[i].classList.add("hidden");
//         };
        
//         let targetProject = event.target.closest(".project");
//         targetProject.classList.replace("hidden", "focus_project");

//         let textDescription = targetProject.firstElementChild.lastElementChild;
//         let img = targetProject.lastElementChild;
//         let homeButton = targetProject.firstElementChild.firstElementChild;

//         textDescription.classList.remove("hidden");
//         img.classList.remove("hidden");
//         homeButton.classList.remove("hidden");
//     };
// }, false)

// bubbles at clicks on .workWrap
// if 'about' shows, it toggles hidden
// removes 'focus_project' from all .project
// adds 'hidden' to all .project_text and .img
// then adds 'focus_project' to the clicked element
// then removes 'hidden' from description text and img of clicked element

let workWrap = document.querySelector(".work_wrapper");
workWrap.addEventListener("click", function(event) {
    if (!(aboutContent.classList.contains('hidden'))) { 
        aboutContent.classList.toggle("hidden");
    };

    if (event.target.matches(".clickable")) {


        let projectArr = document.querySelectorAll(".project");
        for (i=0; i<projectArr.length; i++) {
            projectArr[i].classList.remove("focus_project");
        };

        // let textArr = document.querySelectorAll(".project_text");
        // for (i=0; i<textArr.length; i++) {
        //     textArr[i].classList.add("hidden");
        // }

        // let imgArr = document.querySelectorAll(".img");
        // for (i=0; i<imgArr.length; i++) {
        //     imgArr[i].classList.add("hidden");
        // }

        let initial_hideArr = document.querySelectorAll(".initial_hide");
        for (i=0; i<initial_hideArr.length; i++) {
            initial_hideArr[i].classList.add("hidden");
        }
        
        let targetProject = event.target.closest(".project");
        targetProject.classList.add("focus_project")
        // targetProject.classList.replace("hidden", "focus_project");

        let title = targetProject.firstElementChild.firstElementChild;
        let textDescription = targetProject.firstElementChild.lastElementChild;
        let img = targetProject.lastElementChild;

        title.classList.remove("hidden");
        textDescription.classList.remove("hidden");
        img.classList.remove("hidden");

    };
}, false)




function addHidden(className) {
    let elementArr = document.querySelectorAll(className);
    for (i=0; i<elementArr.length; i++) {
        elementArr[i].classList.add("hidden");
    }
}

function removeHidden(className) {
    let elementArr = document.querySelectorAll(className);
    for (i=0; i<elementArr.length; i++) {
        elementArr[i].classList.remove("hidden");
        elementArr[i].classList.remove("focus_project");
    }
}

const aboutButton = document.querySelector(".about");
const aboutContent = document.querySelector(".about_content");

aboutButton.addEventListener("click", popUp, false);

function popUp() {
    aboutContent.classList.toggle("hidden");
    console.log("something happened");
}




