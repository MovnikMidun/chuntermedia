menubutton = document.getElementById("menubutton"); 
aboutusbutton = document.getElementById("aboutusbutton");
contactusbutton = document.getElementById("contactusbutton");
menu = document.getElementById("menu")
contactus = document.getElementById("contactus")
aboutus = document.getElementById("aboutus")

menubutton.onclick = function(){
    menuButtonClicked(); 
}

aboutusbutton.onclick = function(){
    aboutusButtonClicked(); 
}

contactusbutton.onclick = function(){
    contactusButtonClicked(); 
}

function menuButtonClicked(){
    aboutusHide(); 
    contactusHide(); 
    menuShow(); 
}
function aboutusButtonClicked(){
    menuHide(); 
    contactusHide(); 
    aboutusShow(); 
}
function contactusButtonClicked(){
    aboutusHide(); 
    menuHide(); 
    contactusShow(); 
}

function menuShow(){
    menu.style.display = "block";
}
function aboutusShow(){
    aboutus.style.display = "block";
}
function contactusShow(){
    contactus.style.display = "block";
}

function menuHide(){
    menu.style.display = "none";
}
function aboutusHide(){
    aboutus.style.display = "none";
}
function contactusHide(){
    contactus.style.display = "none";
}