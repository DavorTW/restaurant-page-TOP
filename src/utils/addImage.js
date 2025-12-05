
function addBackgroundImage(path){
    const body = document.querySelector("body");
    body.style.backgroundImage = `url(${path})`;
    body.style.backgroundSize = "auto"
}

export {addBackgroundImage}