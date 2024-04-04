// background image
const heroImage = document.getElementById("image");
heroImage.addEventListener("click", changeHeroImage);

function changeHeroImage() {
    let currentSrc = heroImage.getAttribute("src");
    if (currentSrc === "images/hero1.jpg") {   
     heroImage.setAttribute("src", "images/hero2.jpg");    
    } else {
     heroImage.setAttribute("src", "images/hero1.jpg");
    }
}

// color scheme buttons
document.querySelector("#button1").addEventListener("click", button1);
document.querySelector("#button2").addEventListener("click", button2);
document.querySelector("#button3").addEventListener("click", button3);

let root = document.querySelector(":root").style;

function button1() {
    root.setProperty("--textColour", "#2F0147");
    root.setProperty("--backgroundColour", "#E2C2C6");
    root.setProperty("--headerColour", "#9C528B");
}

function button2() {
    root.setProperty("--textColour", "#4C3B4D");
    root.setProperty("--backgroundColour", "#BCE7FD");
    root.setProperty("--headerColour", "#BCA0BC");
}

function button3() {
    root.setProperty("--textColour", "#000000");
    root.setProperty("--backgroundColour", "#ECE2D0");
    root.setProperty("--headerColour", "#D5B9B2");
}



