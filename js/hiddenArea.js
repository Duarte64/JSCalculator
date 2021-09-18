const button = document.querySelector(".auxiliar__arrow-img");
const areaHidden = document.querySelector(".auxiliar__hidden");

button.addEventListener("click", function() {
    
    if (button.classList.contains("rotated180")) {
        button.classList.remove("rotated180");
        button.classList.add("rotated360");
    } else if (button.classList.contains("rotated360")){
        button.classList.remove("rotated360");
        button.classList.add("rotated180");
    } else {
        button.classList.add("rotated180");
    }

    $(".auxiliar__hidden").toggle(500);
});