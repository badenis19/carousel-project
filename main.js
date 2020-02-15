let cards = [
    {
        photo: "nn",
        title: "History",
        description: "Louvre, blablablabla",
        price: "£102 per person"
    },
    {
        photo: "",
        title: "History",
        description: "Louvre, blablablabla",
        price: "£102 per person"
    }
]

let cards_container = document.querySelector(".cards-container");

if (cards_container){
    let list = document.querySelector("#list");
    let button = document.querySelector("#add");
    console.log("cards.length");

    
    button.addEventListener('click', () => {
        // list.insertAdjacentHTML("beforeend", `<li>fjwnfjeg</li>`);
        cards_container.insertAdjacentHTML("beforeend", `<div class="card"></div>`);
    })
    
}


