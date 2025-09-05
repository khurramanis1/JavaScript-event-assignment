// assignment 1 - show less clickable button with sliced text
const expandPara = document.getElementById("expandPara");
const smallPara = document.getElementById("smallPara");
const btn = document.getElementById("btn");
expandPara.style.display = "none";
function control() {
    if (expandPara.style.display === "none") {
        expandPara.style.display = "block";
        btn.innerText = "See less";
        smallPara.style.display = "none"
    }
    else {
        expandPara.style.display = "none";
        smallPara.style.display = "block";
        btn.innerText = "See more";
    }
}

// assignment 2 - individual check name and email
const name = document.getElementById("name");
const email = document.getElementById("email");
const checkBtn = document.getElementById("checkBtn");
function check(event) {
    event.preventDefault();
    if(name.value.trim() === ""){
        alert("Please, write your name");
        return;
    }
    if(email.value.trim() === ""){
        alert("Please, provide a valid Email address");
        return;
    }
    alert("Name and email successfully submitted");
}
