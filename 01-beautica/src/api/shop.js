const _justArrived = [
  {
    id: 1,
    name: "Product 1",
    imgSrc: require("@/assets/images/products/product-1.webp"),
    details: "Magnis de darturien eros laciniados de cosmopolis dinterdum",
    price: getRandomPrice(100, 600)
  },
  {
    id: 2,
    name: "Product 2",
    imgSrc: require("@/assets/images/products/product-2.webp"),
    details: "Magnis de darturien eros laciniados de cosmopolis dinterdum",
    price: getRandomPrice(100, 700)
  },
  {
    id: 3,
    name: "Product 3",
    imgSrc: require("@/assets/images/products/product-3.webp"),
    details: "Magnis de darturien eros laciniados de cosmopolis dinterdum",
    price: getRandomPrice(200, 300)
  },
  {
    id: 4,
    name: "Product 4",
    imgSrc: require("@/assets/images/products/product-5.jpg"),
    details: "Magnis de darturien eros laciniados de cosmopolis dinterdum",
    price: getRandomPrice(100, 600)
  },
  {
    id: 5,
    name: "Product 5",
    imgSrc: require("@/assets/images/products/product-6.webp"),
    details: "Magnis de darturien eros laciniados de cosmopolis dinterdum",
    price: getRandomPrice(100, 600)
  },
  {
    id: 6,
    name: "Product 6",
    imgSrc: require("@/assets/images/products/product-7.jpg"),
    details: "Magnis de darturien eros laciniados de cosmopolis dinterdum",
    price: getRandomPrice(100, 600)
  },
  {
    id: 7,
    name: "Product 7",
    imgSrc: require("@/assets/images/products/product-8.webp"),
    details: "Magnis de darturien eros laciniados de cosmopolis dinterdum",
    price: getRandomPrice(100, 600)
  },
  {
    id: 8,
    name: "Product 8",
    imgSrc: require("@/assets/images/products/product-9.webp"),
    details: "Magnis de darturien eros laciniados de cosmopolis dinterdum",
    price: getRandomPrice(100, 600)
  },
  {
    id: 9,
    name: "Product 9",
    imgSrc: require("@/assets/images/products/product-10.jpg"),
    details: "Magnis de darturien eros laciniados de cosmopolis dinterdum",
    price: getRandomPrice(100, 600)
  },
  {
    id: 10,
    name: "Product 10",
    imgSrc: require("@/assets/images/products/product-11.webp"),
    details: "Magnis de darturien eros laciniados de cosmopolis dinterdum",
    price: getRandomPrice(100, 600)
  }
];

export default {
  getProducts(cb) {
    cb(_justArrived);
  },

  buyProducts(products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      Math.random() > 0.5 || navigator.userAgent.indexOf("PhantomJS") > -1 ? cb() : errorCb();
    }, 100);
  }
};

function getRandomPrice(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
