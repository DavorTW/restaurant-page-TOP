import { homePage } from "../pages/home";

function renderPage() {
    const content = document.querySelector("#content");
    content.appendChild(homePage());
}

export {renderPage}