import "./styles.scss"; // Ensure this is the correct path for your SCSS file

function loadHome() {
  const content = document.getElementById("content");
  content.className = "home";

  content.innerHTML = `
    <div class="home-container">
    <h1>Welcome to Our Restaurant</h1>
    <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Restaurant Image" class="restaurant-image">
    <p>Enjoy the best food in town with a great atmosphere.</p>
    <button id="book-table">Book a Table</button>
    <div class="specials">
      <h2>Special Offers</h2>
      <div class="offer">
        <img src="https://plus.unsplash.com/premium_photo-1668143365324-37cae1de4e56?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/300x200" alt="Special Offer 1" />
        <p>Get 20% off on all orders this week!</p>
      </div>
      <div class="offer">
        <img src="https://plus.unsplash.com/premium_photo-1668146927669-f2edf6e86f6f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/300x200" alt="Special Offer 2" />
        <p>Join us for live music every Friday evening.</p>
      </div>
    </div>
  </div>
  `;

  document.getElementById("book-table").addEventListener("click", () => {
    alert("Booking functionality coming Soon");
  });
}

export default loadHome;
