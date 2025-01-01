let url = "https://charming-mixolydian-cyclamen.glitch.me/wce";

window.onload = function() {
    getdata();
}

async function getdata() {
    try{
        let res = await fetch(url);
        let data = await res.json();
        displayData(data);
    }catch{}
}

function displayData(data) {
    let content = document.getElementById("inner-content");
    content.innerHTML = "";
    data.map((element, i) => {
        let card = document.createElement("div");
        let image = document.createElement("img");
        image.src = element.img;
        let title = document.createElement("h3");
        title.textContent = element.title;
        let description = document.createElement("p");
        description.textContent = element.description;
        let price = document.createElement("h4");
        price.textContent = `Price: ${element.price}`;
        let review = document.createElement("h4");
        review.textContent = `Review: ${element.reviews}`;
        card.append(image, title, description, price, review);
        content.append(card);
    })
}

