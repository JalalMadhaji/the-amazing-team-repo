fetch("http://localhost:3000/products").then(resp => resp.json()).then(

    json => {

        console.log(json)

    }

)

let img = document.getElementById("image")
let 