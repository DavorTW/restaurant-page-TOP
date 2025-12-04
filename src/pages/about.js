function aboutPage() {
    const div = document.createElement("div");
    div.appendChild(createSection("Who we are", "some text about who we are"));

    return div;
}

function createSection(title, text){
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    h2.textContent = title;
    p.textContent = text;

    div.appendChild(h2);
    div.appendChild(p);

    return div;

}

export {aboutPage}