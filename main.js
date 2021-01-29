const toggleBtn = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navBar= document.querySelector(".nav-bar");


toggleBtn.addEventListener("click",()=>{
    if(toggleBtn.classList.contains("active")){
        toggleBtn.classList.remove("active");
        toggleBtn.innerHTML = '<i class="fas fa-times"></i>';
        navLinks.classList.add("mobile-nav");
        navBar.classList.add("move-down")
    }
    else{
        toggleBtn.classList.add("active");
        toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
        navLinks.classList.remove("mobile-nav");
        navBar.classList.remove("move-down")
    }
})



const mobileNavLinks =navBar.querySelectorAll("li");

for(i = 0 ; i < mobileNavLinks.length; i++){
    mobileNavLinks[i].addEventListener("click", ()=>{
        if(!toggleBtn.classList.contains("active")){
            toggleBtn.classList.add("active");
            toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
            navLinks.classList.remove("mobile-nav");
            navBar.classList.remove("move-down")
        }
    })
}

