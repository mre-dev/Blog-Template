let myWidth = window.innerWidth;
window.onresize = function() {
    myWidth = window.innerWidth;
    restAllCss();
}

document.querySelector(".mobileMenuIcon_open").addEventListener("click", function() {
    document.getElementsByClassName("mobileMenuIcon_open")[0].style.display = "none";
    document.getElementsByClassName("mobileMenuIcon_close")[0].style.display = "block";
    document.querySelector(".container header nav ul").classList.add("openedMenu");
    document.body.style.overflowY = "hidden";
});

document.querySelector(".mobileMenuIcon_close").addEventListener("click", function() {
    document.getElementsByClassName("mobileMenuIcon_open")[0].style.display = "block";
    document.getElementsByClassName("mobileMenuIcon_close")[0].style.display = "none";
    document.querySelector(".container header nav ul").classList.remove("openedMenu");
    document.body.style.overflowY = "auto";
});

function restAllCss() {
    if(myWidth <= 700) {
        document.getElementsByClassName("mobileMenuIcon_open")[0].style.display = "block";
        document.getElementsByClassName("mobileMenuIcon_close")[0].style.display = "none";
    } else {
        document.getElementsByClassName("mobileMenuIcon_open")[0].style.display = "none";
        document.getElementsByClassName("mobileMenuIcon_close")[0].style.display = "none";
    }
    document.querySelector(".container header nav ul").classList.remove("openedMenu");
}