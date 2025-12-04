import { homePage } from "../pages/home";
import { aboutPage } from "../pages/about";
import { menuPage } from "../pages/menu";

function renderPage(page) {
    const content = document.querySelector("#content");
    switch (page) {
        case "home":
            content.appendChild(homePage());
            break;
        case "about":
            content.appendChild(aboutPage());
        case "menu":
            content.appendChild(menuPage());
        default:
            break;
    }
    
}

export {renderPage}