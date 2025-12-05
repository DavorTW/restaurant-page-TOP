import "./styles/styles.css";
import { renderPage } from "./utils/renderPage";

const buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
    button.addEventListener("click", e => {
        if (e.target.id === "menu") {
            renderPage("menu");
        }else if(e.target.id === "home"){
            renderPage("home");
        }else if(e.target.id === "about"){
            renderPage("about");
        }
    })
})