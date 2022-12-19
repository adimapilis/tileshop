
let basket = JSON.parse(localStorage.getItem("data")) || [];
let products = document.getElementById("order")
let grandTotal = document.getElementById("grand-total")

let data = [
  {
    id: "asdshfghad",
    name: "Tile 1",
    img:"tile-1.jpg",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing.",
    price:1,
  },
  {
    name: "Tile 2",
    id: "ashfshsgf",
    img:"tile-2.jpg",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing.",
    price:2,
  },
  {
    name: "Tile 3",
    id: "sdfgghafgrth",
    img:"tile-3.jpg",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing.",
    price:3,
  },
  {
    name: "Tile 4",
    id: "gfgthrfg",
    img:"tile-4.jpg",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing.",
    price:4,
  },
  {
    name: "Tile 5",
    id: "gweyhtdfgr",
    img:"tile-5.jpg",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing.",
    price:5,
  },
  {
    name: "Tile 6",
    id: "rtyusadhtc",
    img:"tile-6.jpg",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing.",
    price:6,
  },
  {
    name: "Tile 7",
    id: "ujygtj",
    img:"tile-7.jpg",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing.",
    price:7,
  },
  {
    name: "Tile 8",
    id: "rtjrasdh",
    img:"tile-8.jpg",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing.",
    price:8,
  }
];


let generateShop = () => {
  return (products.innerHTML = basket.map((item) => {
    let each = data.find(x=> x.id === item.id) || []
    return`
    <div class="shopping-cart">
      <img class="cart-image" src=./${each.img} alt="">
      <div class="cart-details">
        <div class="upper-details">
          <div class="cart-name">${each.name}</div>
          <div class="cart-price">$${each.price}</div>
        </div>
        <div class="cart-total" value="${each.price*item.quantity}">$${each.price*item.quantity}</div>
        <div class="lower-details">
          <div class="cart-buttons">
            <button onclick="decrement(${each.id})">-</button>
            <div id=${each.id} class="quantity">
            ${item.quantity}
            </div>
            <button onclick="increment(${each.id})">+</button>
          </div>
        </div>
      </div>
    </div>
    `
  }).join(""))
}

let generateTotal = () => {
  let sumArray = []
  let total = basket.forEach((item) => {
    let each = data.find(x=> x.id === item.id) || []
    sumArray.push(item.quantity*each.price)
  })
  let sum= sumArray.reduce((x,y)=> x+y, 0)
  grandTotal.innerHTML =`<div class="grand-total" id="grand-total">Your Total is $ ${sum}</div>`
  console.log(sum)
  console.log(grandTotal)
}

let increment = (item) => {
  let search = basket.find(x => x.id===item.id)
  if (search === undefined) {
    basket.push({
      id: item.id,
      quantity: 1
    })
  }
  else {
    search.quantity +=1
  }
  update()
}


let decrement = (item) => {
  let search = basket.find(x => x.id===item.id)
  if (search === undefined) {
    return
  }
  else if (search.quantity===0) {
    return
  }
  else {
    search.quantity -=1
  }
  basket = basket.filter((x) => x.quantity !== 0)
  update()
}

let update = () => {
  let cart_total = document.getElementById("cart-num")
  let sum = basket.map(x=> x.quantity).reduce((x, y) => x + y, 0)
  cart_total.innerHTML = `<div class="cart-num" id="cart-num">${sum}</div>`
  localStorage.setItem("data", JSON.stringify(basket));
  generateShop()
  generateTotal()
};

generateShop()
update()
