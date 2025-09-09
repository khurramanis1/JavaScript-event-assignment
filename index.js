// assignment 1 - show less clickable button with sliced text
const para = document.getElementById("para");
const btn = document.getElementById("btn");
const fullPara = "Technology has transformed communication by making it faster, more accessible, and more diverse than ever before. With the rise of smartphones, social media, and instant messaging platforms, people can connect across the globe in real time, breaking down barriers of distance and time. Video calls and collaborative tools have also enhanced professional interactions, enabling remote work and international teamwork. However, this digital shift has also introduced challenges, such as reduced face-to-face interaction, shorter attention spans, and concerns over privacy. Overall, technology has revolutionized how we share information and build relationships, creating both opportunities and responsibilities in the way we connect.";
const previewText = fullPara.slice(0, 112) + "...";
let expanded = false;
para.innerHTML = previewText
function toggleText() {
    if (!expanded) {
            para.innerText = fullPara;
            btn.innerText = "Show less";
            expanded = true;
    }
    else {
        para.innerHTML = previewText;
        btn.innerText = "See more";
        expanded = false;
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

// assigmrnt -- create a modern style div with border colors shadow and insert a defined image
const styledDiv = document.getElementById("styledDiv");
styledDiv.innerHTML = "<img src='https://www.yankodesign.com/images/design_news/2022/01/auto-draft/tesla_precept_model_1.jpg' id='carImg'>";
const carImg = document.getElementById("carImg");
carImg.style.width = "500px";
carImg.style.border = "solid 5px #000";
carImg.style.boxShadow = "10px 10px 15px grey";