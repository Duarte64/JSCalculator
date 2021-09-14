const button = document.querySelector(".auxiliar__arrow-img");
const areaHidden = document.querySelector(".auxiliar__hidden");

button.addEventListener("click", function() {
    
    areaHidden.classList.toggle('addHidden');
    
});