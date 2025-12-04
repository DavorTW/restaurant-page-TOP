function homePage(){
    const div = document.createElement("div");
    
    div.appendChild(restaurantIntro());
    div.appendChild(chefIntro());
    div.appendChild(theMenu());

    return div;
    
}

function restaurantIntro(){
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    h1.textContent = "Restaurant Name";
    p.textContent = "Praesent efficitur elementum urna, a elementum turpis efficitur quis. Cras volutpat orci nec ante interdum tempor non et massa. Vestibulum pharetra quam dui, at sodales massa feugiat sit amet. Suspendisse eget lacus ut velit luctus sodales in et sem. Etiam eu odio tempus est pretium ultrices at a turpis. ";

    div.appendChild(h1);
    div.appendChild(p);
    return(div);

}

function chefIntro(){
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    h2.textContent = "The cheff"
    p.textContent = "Praesent efficitur elementum urna, a elementum turpis efficitur quis. Cras volutpat orci nec ante interdum tempor non et massa. Vestibulum pharetra quam dui, at sodales massa feugiat sit amet. Suspendisse eget lacus ut velit luctus sodales in et sem. Etiam eu odio tempus est pretium ultrices at a turpis. ";

    div.appendChild(h2);
    div.appendChild(p);
    return(div);

}

function theMenu(){
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");

    h2.textContent = "The menu";
    p.textContent = "Praesent efficitur elementum urna, a elementum turpis efficitur quis. Cras volutpat orci nec ante interdum tempor non et massa. Vestibulum pharetra quam dui, at sodales massa feugiat sit amet. Suspendisse eget lacus ut velit luctus sodales in et sem. Etiam eu odio tempus est pretium ultrices at a turpis.";

    div.appendChild(h2);
    div.appendChild(p);

    return div;
}



export {homePage}