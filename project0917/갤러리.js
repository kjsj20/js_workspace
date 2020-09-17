function setPic(url){
    let content = document.querySelector(".content");
    content.style.backgroundImage = "url(" + url + ")";
    content.style.backgroundSize = "550px";
    content.style.backgroundRepeat = "no-repeat";
}