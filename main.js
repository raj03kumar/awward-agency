//Get elements for the navbar from the DOM
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");
const checkpoints = document.querySelectorAll(".scroll-checkpoint");
const links = document.querySelectorAll(".menu ul a");

// Add click event to the menu button
menuBtn.addEventListener("click", ()=>{
    //Toggle the menu open class
    menu.classList.toggle("menu-open");
});

// Add a scroll event to the window
window.addEventListener("scroll", ()=>{
    // If the page is scrolled over 50px
    if(pageYOffset > 50){
        //Add the navbar active class
        navbar.classList.add("navbar-active");
    }
    else{
        //Remove the navabr active class
        navbar.classList.remove("navbar-active");
    }
    //Loop through all checkpoint elements
    for(let i=0; i<checkpoints.length; i++){
        // If the page offset is greater than the checkpoint offset
        if(pageYOffset > checkpoints[i].offsetTop - 50){
            //Remove the active class from all links
            links.forEach(link => link.classList.remove("active"));
            //Add the active class to the corresponding link
            links[i].classList.add("active");
        }
    }
});

//Get all the elements for the modal from the DOM
const images = document.querySelectorAll("#portfolio > img");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal img");

// Loop through all images
images.forEach(img => {
    //Add click event to each image
    img.addEventListener("click", e=>{
        //Set Modal image source to clicked image source
        modalImg.src = e.target.src;
        //Show the image
        modal.style.display = "flex";
        //Show the image with a smooth transition
        setTimeout(() => {
            modal.style.opacity="1";
        }, 10);
    });
});

//Add click event to the modal
modal.addEventListener("click", ()=>{
    //Hide the modal
    modal.style.opacity = "0";
    //Hide the modal with a smooth transition
    setTimeout(()=>{
        modal.style.display="none";
    }, 500);
});

// disabling inspect element
document.addEventListener("contextmenu", function(e){
    e.preventDefault(); //this prevents right click
});
document.onkeydown=function(e){
    if(event.keycode==123){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="I".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="C".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="J".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode=="U".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode=="S".charCodeAt(0)){
        return false;
    }
};