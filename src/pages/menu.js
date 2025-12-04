function menuPage() {
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    h2.textContent = "The menu";

    div.appendChild(h2);
    div.appendChild(createDish("Dish name", "Dish description"));

    return div
}

function createDish(title, text) {
    const dish = document.createElement("div");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");

    h3.textContent = title;
    p.textContent = text;

    dish.appendChild(h3);
    dish.appendChild(p);

    return dish;
}

export { menuPage };