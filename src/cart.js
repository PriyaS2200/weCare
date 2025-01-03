import { baseUrl } from "./baseurl.js";

let productArray = [];
let loginData = JSON.parse(localStorage.getItem('loginData'));
let id = loginData.id;

window.onload = async function() {
    let data = await getdata();
    if(data == undefined) {
        alert("Nothing to display");
    }else{
    let array = data[0].product;
    localStorage.setItem("product",JSON.stringify(array));
    let productData = JSON.parse(localStorage.getItem("product"));
    productArray.push(productData);
    displayData(productArray);
    }
}
async function getdata() {
   try{
    let res = await fetch(`${baseUrl}/users`);
    let data = await res.json();
    return data;
  }catch{}
}

function displayData(data) {
    let content = document.getElementById("cartContainer");
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
        addCart.textContent = "Remove from Cart";
        addCart.addEventListener ("click", function () {
            event.preventDefault();
            removefromCart(element);
        })
        card.append(image, title, description, price,addCart);
        content.append(card);
    })
}

function removefromCart(element) {
    fetch(`${baseUrl}/users/${id}`,{
        method: 'DELETE',
    }).then(()=>{
        alert("Removed from cart");
        localStorage.removeItem("product");
        localStorage.removeItem("loginData");
        displayData(productArray);
    })
}