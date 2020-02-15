const cards = [
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
    let button = document.querySelector("#add");
    console.log("cards.length");

    
    button.addEventListener('click', () => {

        cards.forEach((card) => {
        cards_container.insertAdjacentHTML("beforeend",
                `<div class="card">
                <p>${card.photo}</p>
                <p>${card.title}</p>
                <p>${card.description}</p>
                <p>${card.price}</p>
                </div>`)}

        );
    })

    // button.addEventListener('click', () => {
       
    //     cards_container.insertAdjacentHTML("beforeend", 
    //         `<div class="card">
    //             <p>${cards[0].photo}</p>
    //             <p>${cards[0].title}</p>
    //             <p>${cards[0].description}</p>
    //             <p>${cards[0].price}</p>
    //         </div>`);
    // })
    
}


