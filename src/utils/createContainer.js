function createContainer() {
    const body = document.querySelector("body");
    const header = document.querySelector("header");
    const content = document.querySelector("#content");
    const container = document.createElement("div");

    container.classList.add("container");

    container.appendChild(header);
    container.appendChild(content);
    body.appendChild(container);
}

export {createContainer}