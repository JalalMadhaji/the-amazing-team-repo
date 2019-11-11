let cardTather = document.getElementById('card');
fetch("http://localhost:3000/products").then(resp => resp.json()).then(json => {



    for (const element in json) {

        console.log(json[element])
        let card = document.createElement("li")
        // card.id = "card"


        let img = document.createElement("img")
        img.id = "image"
        img.setAttribute("src", json[element]["image"]);
        card.appendChild(img);

        let title = document.createElement("h5")
        title.id = "title"
        title.innerHTML = json[element]["name"];
        card.appendChild(title);


        let desc = document.createElement("p")
        desc.id = "desc"
        desc.innerHTML = json[element]["desc"].substring(1, 80)
        card.appendChild(desc);

        let price = document.createElement("span")
        price.id = "price"
        price.innerHTML = json[element]["price"];
        card.appendChild(price);


        let newbuyBtn = document.createElement("button")
        newbuyBtn.id = "buyBtn"
        newbuyBtn.innerHTML = "Buy Now"

        card.appendChild(newbuyBtn);
        cardTather.appendChild(card)
    }



}
)


let price = document.getElementById("price");
let title = document.getElementById("title");
let buyBtn = document.getElementById("buyBtn");

