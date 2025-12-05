import "./styles/smallReset.css";
import "./styles/styles.css";
import { renderPage } from "./utils/renderPage";
import { createContainer } from "./utils/createContainer";
import Background1 from "./images/gemini1.png";
import Background2 from "./images/gemini2.png";
import Background3 from "./images/gemini3.png";
import { addBackgroundImage } from "./utils/addImage";

const buttons = document.querySelectorAll(".button");

createContainer();
addBackgroundImage(Background1);

buttons.forEach(button => {
    button.addEventListener("click", e => {
        if (e.target.id === "menu") {
            renderPage("menu");
            addBackgroundImage(Background1);
        }else if(e.target.id === "home"){
            renderPage("home");
            addBackgroundImage(Background2);
        }else if(e.target.id === "about"){
            renderPage("about");
            addBackgroundImage(Background3);
        }
    })
})

