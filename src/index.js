import { baseUrl } from "./baseurl.js";

let loginData = JSON.parse(localStorage.getItem("loginData"));
window.onload = function() {
    getdata();
    getscp();
    getis();
    getpr();
    getcc();
    getfr();
    getvs();
    getcs();
    getip();
}

async function getdata() {
    try{
        let res = await fetch(`${baseUrl}/wce`);
        let data = await res.json();
        displayData(data);
    }catch{}
}

function displayData(data) {
    let content = document.getElementById("wce-content");
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
        let addCart = document.createElement("button");
        addCart.textContent = "Add to Cart";
        addCart.addEventListener ("click", function () {
            event.preventDefault();
            addToCart(element);
        })
        card.append(image, title, description, price, review, addCart);
        content.append(card);
    })
}

async function addToCart(element) {
    const cartData = {
        title: element.title,
        description: element.description,
        price: element.price,
        review: element.reviews,
        img: element.img
    };
    fetch(`${baseUrl}/users`)
    .then((res) => res.json())
    .then((data) => {
      let user = data.filter((el, i) => { el.id == loginData.id});
        if(loginData.length != 0){
            let id = loginData.id;
            fetch(`${baseUrl}/users/${id}`, {
                method: 'PATCH',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({product:cartData})
            }).then(function() {
                alert("Product successfully added");
                window.location.href = "cart.html";
            })
        }else{
            alert("Login before adding to cart");
            window.location.href = "login.html";
        }
    }).catch((err)=>{
        console.log(err);
    })
    
 }

async function getscp() {
    try{
        let res = await fetch(`${baseUrl}/scp`);
        let data = await res.json();
        displayscp(data);
    }catch{}
}

function displayscp(data) {
    let content = document.getElementById("scp-content");
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
        let addCart = document.createElement("button");
        addCart.textContent = "Add to Cart";
        addCart.addEventListener ("click", function () {
            event.preventDefault();
            addToCart(element);
        })
        card.append(image, title, description, price, review,addCart);
        content.append(card);
    })
}

async function getis() {
    try{
        let res = await fetch(`${baseUrl}/immsup`);
        let data = await res.json();
        displayis(data);
    }catch{}
}

function displayis(data) {
    let content = document.getElementById("is-content");
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
        let addCart = document.createElement("button");
        addCart.textContent = "Add to Cart";
        addCart.addEventListener ("click", function () {
            event.preventDefault();
            addToCart(element);
        })
        card.append(image, title, description, price, review,addCart);
        content.append(card);
    })
}

async function getpr() {
    try{
        let res = await fetch(`${baseUrl}/pr`);
        let data = await res.json();
        displaypr(data);
    }catch{}
}

function displaypr(data) {
    let content = document.getElementById("pr-content");
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
        let addCart = document.createElement("button");
        addCart.textContent = "Add to Cart";
        addCart.addEventListener ("click", function () {
            event.preventDefault();
            addToCart(element);
        })
        card.append(image, title, description, price, review,addCart);
        content.append(card);
    })
}

async function getcc() {
    try{
        let res = await fetch(`${baseUrl}/cc`);
        let data = await res.json();
        displaycc(data);
    }catch{}
}

function displaycc(data) {
    let content = document.getElementById("cc-content");
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
        let addCart = document.createElement("button");
        addCart.textContent = "Add to Cart";
        addCart.addEventListener ("click", function () {
            event.preventDefault();
            addToCart(element);
        })
        card.append(image, title, description, price, review,addCart);
        content.append(card);
    })
}

async function getfr() {
    try{
        let res = await fetch(`${baseUrl}/fr`);
        let data = await res.json();
        displayfr(data);
    }catch{}
}

function displayfr(data) {
    let content = document.getElementById("fr-content");
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
        let addCart = document.createElement("button");
        addCart.textContent = "Add to Cart";
        addCart.addEventListener ("click", function () {
            event.preventDefault();
            addToCart(element);
        })
        card.append(image, title, description, price,addCart);
        content.append(card);
    })
}

async function getvs() {
    try{
        let res = await fetch(`${baseUrl}/vs`);
        let data = await res.json();
        displayvs(data);
    }catch{}
}

function displayvs(data) {
    let content = document.getElementById("vs-content");
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
        let addCart = document.createElement("button");
        addCart.textContent = "Add to Cart";
        addCart.addEventListener ("click", function () {
            event.preventDefault();
            addToCart(element);
        })
        card.append(image, title, description, price,addCart);
        content.append(card);
    })
}

async function getcs() {
    try{
        let res = await fetch(`${baseUrl}/cs`);
        let data = await res.json();
        displaycs(data);
    }catch{}
}

function displaycs(data) {
    let content = document.getElementById("cs-content");
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
        let addCart = document.createElement("button");
        addCart.textContent = "Add to Cart";
        addCart.addEventListener ("click", function () {
            event.preventDefault();
            addToCart(element);
        })
        card.append(image, title, description, price,addCart);
        content.append(card);
    })
}

async function getip() {
    try{
        let res = await fetch(`${baseUrl}/ip`);
        let data = await res.json();
        displayip(data);
    }catch{}
}

function displayip(data) {
    let content = document.getElementById("ip-content");
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
        let addCart = document.createElement("button");
        addCart.textContent = "Add to Cart";
        addCart.addEventListener ("click", function () {
            event.preventDefault();
            addToCart(element);
        })
        card.append(image, title, description, price,addCart);
        content.append(card);
    })
}