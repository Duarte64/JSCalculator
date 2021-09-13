const button = document.querySelector(".auxiliar__arrow-img");
const areaHidden = document.querySelector(".calculadora__auxiliar-hidden");

button.addEventListener("click", function() {
    
    if (areaHidden.classList.contains("addHidden")) {
        areaHidden.classList.remove("addHidden");
    } else {
        areaHidden.classList.add("addHidden");
    }
    
});