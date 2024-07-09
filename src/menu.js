import "./styles.scss";

function loadMenu() {
  const content = document.getElementById("content");
  content.className = "menu"; // Apply menu styling
  content.innerHTML = ""; // Clear previous content

  const heading = document.createElement("h2");
  heading.textContent = "This Is Our Menu";
  content.appendChild(heading);

  const menuItems = [
    {
      name: "Grilled Salmon",
      price: 15.99,
      image:
        "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JpbGxlZCUyMHNhbG1vbnxlbnwwfHwwfHx8MA%3D%3D",
      description: "Freshly grilled salmon with a lemon butter sauce.",
    },
    {
      name: "Lobster Tail",
      price: 29.99,
      image:
        "https://images.unsplash.com/photo-1572406781543-c63cfe136bcf?q=80&w=2001&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Succulent lobster tail served with garlic butter.",
    },
    {
      name: "Seafood Platter",
      price: 24.99,
      image:
        "https://images.unsplash.com/photo-1614124544688-723cb2414de2?q=80&w=2189&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "A variety of seafood including shrimp, crab, and clams.",
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
    itemInfo.className = "item-info"; // For styling

    const itemName = document.createElement("h2");
    itemName.textContent = item.name;
    itemInfo.appendChild(itemName);

    const itemDescription = document.createElement("p");
    itemDescription.textContent = item.description;
    itemInfo.appendChild(itemDescription);

    const itemPrice = document.createElement("span");
    itemPrice.className = "item-price"; // For styling
    itemPrice.textContent = `$${item.price.toFixed(2)}`;
    itemInfo.appendChild(itemPrice);

    const addToCartButton = document.createElement("button");
    addToCartButton.className = "add-to-cart";
    addToCartButton.textContent = "Add to Cart";
    addToCartButton.dataset.name = item.name;
    addToCartButton.dataset.price = item.price;
    addToCartButton.addEventListener("click", (event) => {
      const name = event.target.dataset.name;
      const price = parent(event.target.dataset.price);
      addToCartButton(name, price);
    });

    menuItem.appendChild(itemInfo);

    content.appendChild(menuItem); // Append each menu item to the content div
  });

  const cart = document.createElement("div");
  cart.className = "cart";

  const cartHeading = documment.createElement("h2");
  cartHeading.textContent = "Cart";
  cart.appendChild(cartHeading);

  const cartItems = document.createElement("div");
  cartItems.id = "cart-items";
  cart.appendChild(cartItems);

  
}

export default loadMenu;
