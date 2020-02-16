// TO DO
// design top part
// Design cards
// button to go to next image
// make the container overflow

const cards = [
    {
        photo: "https://images.unsplash.com/photo-1565099824688-e93eb20fe622?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
        title: "History",
        description: "Louvre, blablablabla",
        price: "£102 per person",
        rating: 5
    },
    {
        photo: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        title: "History",
        description: "Louvre, blablablabla",
        price: "£ per person",
        rating: 2
    },
    {
        photo: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
        title: "Explore",
        description: "Louvre, blablablabla",
        price: "£102 per person",
        rating: 4
    },
    {
        photo: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        title: "Bike and Tase",
        description: "Louvre, blablablabla",
        price: "£102 per person",
        rating: 5
    }
    // {
    //     photo: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    //     title: "Discovery",
    //     description: "Louvre, blablablabla",
    //     price: "£102 per person",
    //     rating: 5
    // },
    // {
    //     photo: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    //     title: "Sports",
    //     description: "Louvre, blablablabla",
    //     price: "£102 per person",
    //     rating: 1
    // }
]

let cards_container = document.querySelector(".cards-container");

if (cards_container){
    // let button = document.querySelector("#add");
    console.log("cards.length");

    
    // button.addEventListener('click', () => {

        cards.forEach((card) => {
        cards_container.insertAdjacentHTML("beforeend",
                `<div class="card">
                <p> <img src=${card.photo} alt=""></p>
                <p class="title">${card.title}</p>
                <p class="descr">${card.description}</p>
                <p class="price">${card.price}</p>
                <p class="rating">${card.rating}</p>
                </div>`)}

        );
    // })

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


