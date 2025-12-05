import { homePage } from "../pages/home";
import { aboutPage } from "../pages/about";
import { menuPage } from "../pages/menu";

function renderPage(page) {
    const content = document.querySelector("#content");
    switch (page) {
        case "home":
            clearContent();
            content.appendChild(homePage());
            break;
        case "about":
            clearContent();
            content.appendChild(aboutPage());
            break;
        case "menu":
            clearContent();
            content.appendChild(menuPage());
        default:
            break;
    }
    
}

function clearContent() {
    const content = document.querySelector("#content");
    content.textContent = "";
}

export {renderPage}