const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("stikky", window.scrollY > 0)
});