const menuBtn = document.querySelector("#hero .header .hamburger");
const navBar = document.querySelector("#hero .header nav")
let menuOpen = false;
menuBtn.addEventListener("click",()=>{
    if(!menuOpen){
        menuBtn.classList.add("open");
        navBar.classList.add("open")
        menuOpen = true
    }else{
        menuBtn.classList.remove("open");
        navBar.classList.remove("open")
        menuOpen = false;
    }
});
window.addEventListener("scroll",()=>{
    if(menuOpen){
        menuBtn.classList.remove("open");
        navBar.classList.remove("open")
    }
})