const photos = document.querySelectorAll(".photo");
const gallery = document.querySelector(".gallery");

let isOpen = false;
let activePhoto;

photos.forEach(photo => {
    photo.addEventListener("click", handleClick);
});

function handlePosition(photo){
    const{width , height , top , left} = photo.getBoundingClientRect();
    photo.style.transform = `transformY(${innerHeight / 2 - 
height / 2 -
top}px) translateX(${innerWidth / 2 - width / 2 -left}px) scale(1.7)`;
}

function handleClick(e) {
    activePhoto = e.target;
    photos.forEach(photo => photo.setAttribute("style", ""));
    handlePosition(activePhoto);
    activePhoto.classList.add("is-active");
    gallery.classList.add("is-expanded");
    setTimeout(() => {
         isOpen = true;
    },0);
}

function hide (){
    if(isOpen){
        activePhoto.setAttribute("style", "position: relative; z-index: 1");
        activePhoto.classList.remove("is-active");
        gallery.classList.remove("is-expanded");
        isOpen = false;
    }
}

window.addEventListener("resize", hide);
document.addEventListener("click", hide);

window.onload = () => document.querySelector(".loading").remove();

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("img").forEach(img => {
        img.onerror = function () {
            this.style.display = "none";
        };
    });
});


