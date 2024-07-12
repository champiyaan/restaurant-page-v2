import "./styles.scss";

function loadMenu() {
  const content = document.getElementById("content");
  content.className = "menu";
  content.innerHTML = "";

  const heading = document.createElement("h2");
  heading.textContent = "Our Menu";
  content.appendChild(heading);

  const menuItems = [
    {
      name: "Grilled Salmon",
      price: 15.99,
      image:
        "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JpbGxlZCUyMHNhbG1vbnxlbnwwfHwwfHx8MA%3D%3D",
      item: "Freshly grilled salmon with a lemon butter sauce.",
    },
    {
      name: "Lobster Tail",
      price: 29.99,
      image:
        "https://images.unsplash.com/photo-1572406781543-c63cfe136bcf?q=80&w=2001&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      item: "Succulent lobster tail served with garlic butter.",
    },
    {
      name: "Seafood Platter",
      price: 24.99,
      image:
        "https://images.unsplash.com/photo-1614124544688-723cb2414de2?q=80&w=2189&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      item: "A variety of seafood including shrimp, crab, and clams.",
    },
  ];

  menuItems.forEach((item) => {
    const menuItem = document.createElement("div");
    menuItem.className = "menu-item";

    const itemImage = document.createElement("img");
    itemImage.src = item.image;
    itemImage.alt = item.name;
    menuItem.appendChild(itemImage);

    const itemInfo = document.createElement("div");
    itemInfo.className = "item-info";

    const itemName = document.createElement("h2");
    itemName.textContent = item.name;
    itemInfo.appendChild(itemName);

    const itemDescription = document.createElement("p");
    itemDescription.textContent = item.description;
    itemInfo.appendChild(itemDescription);

    const itemPrice = document.createElement("span");
    itemPrice.className = "item-price";
    itemPrice.textContent = `$${item.price.toFixed(2)}`;
    itemInfo.appendChild(itemPrice);

    menuItem.appendChild(itemInfo);

    const addToCartButton = document.createElement("button");
    addToCartButton.className = "add-to-cart";
    addToCartButton.textContent = "Add to Cart";
    addToCartButton.dataset.name = item.name;
    addToCartButton.dataset.price = item.price;
    addToCartButton.addEventListener("click", (event) => {
      const name = event.target.dataset.name;
      const price = parseFloat(event.target.dataset.price);
      addToCart(name, price);
    });

    menuItem.appendChild(addToCartButton);

    content.appendChild(menuItem);
  }); /// for each

  const cart = document.createElement("div");
  cart.className = "cart";

  const cartHeading = document.createElement("h2");
  cartHeading.textContent = "Cart";
  cart.appendChild(cartHeading);

  const cartItems = document.createElement("div");
  cartItems.id = "cart-items";
  cart.appendChild(cartItems);

  const totalPriceHeading = document.createElement("h3");
  totalPriceHeading.innerHTML = 'Total: $<span id="total-price">0.00</span>';
  cart.appendChild(totalPriceHeading);

  content.appendChild(cart);
}

function addToCart(name, price) {
  const cartItems = document.getElementById("cart-items");
  const totalPriceElement = document.getElementById("total-price");

  const cartItem = document.createElement("div");
  cartItem.className = "cart-item";
  cartItem.innerHTML = `<span>${name}</span><span>$${price.toFixed(2)}</span>`;
  cartItems.appendChild(cartItem);

  let totalPrice = parseFloat(totalPriceElement.innerText);
  totalPrice += price;
  totalPriceElement.innerText = totalPrice.toFixed(2);

  const cart = document.querySelector(".cart");
  cart.classList.add("highlight");
  setTimeout(() => {
    cart.classList.remove("highlight");
  }, 500);
}

export default loadMenu;
