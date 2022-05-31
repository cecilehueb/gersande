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

let workWrap = document.querySelector(".work_wrapper");
workWrap.addEventListener("click", function(event) {
    if (event.target.matches(".project") || event.target.matches(".project_title") || event.target.matches(".project_title div")) {
        let projectArr = document.querySelectorAll(".project");
        for (i=0; i<projectArr.length; i++) {
            projectArr[i].classList.add("hidden");
        };
        
        let targetProject = event.target.closest(".project");
        targetProject.classList.replace("hidden", "focus_project");

        let textDescription = targetProject.firstElementChild.lastElementChild;
        let img = targetProject.lastElementChild;

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


