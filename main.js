let products = document.getElementById("products")

let basket = JSON.parse(localStorage.getItem("data")) || [];
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


let renderShop = () => {
  return (products.innerHTML = data.map((item) => {
    let isAdded = basket.find(x=> x.id === item.id) || []
    return `
    <div id=product-id-${item.id} class="items">
      <img class="image" src=./${item.img} alt="">
      <div class="name">${item.name}</div>
      <div class="description">${item.description}</div>
      <div class="price-quantity">
        <div class="price">${item.price}</div>
        <div class="buttons">
          <button onclick="decrement(${item.id})">-</button>
          <div id=${item.id} class="quantity">
          ${isAdded.quantity === undefined ? 0 : isAdded.quantity}
          </div>
          <button onclick="increment(${item.id})">+</button>
        </div>
      </div>
    </div>
      `
  }).join(""))
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
  renderShop()
  localStorage.setItem("data", JSON.stringify(basket));
};

renderShop()
update()
