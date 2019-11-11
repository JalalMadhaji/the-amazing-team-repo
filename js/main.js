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


        let newbuyBtn = document.createElement("a")
        newbuyBtn.id = "buyBtn"
        newbuyBtn.innerHTML = "buy Now"
        newbuyBtn.href = './ditailse.html'

        card.appendChild(newbuyBtn);
        cardTather.appendChild(card)
    }



}
)


let price = document.getElementById("price");
let title = document.getElementById("title");
let buyBtn = document.getElementById("buyBtn");


const addNewProduct = (id, form) => {
    fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
            Accept: "application/json, text/plain, /",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: id,
            name: form.name.value,
            desc: form.desc.value,
            image: form.image.value,
            price: form.price.value
        })
    })
        .then(respose => {
            return respose.json();
        })
        .then(data => {
            window.location.href = "./index.html";
        });
};
