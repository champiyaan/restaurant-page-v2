import "./styles.scss"; // Ensure this is the correct path for your SCSS file

function loadHome() {
  const content = document.getElementById("content");
  content.className = "home";

  content.innerHTML = `
    <h1>Welcome to Our Restaurant</h1>
    <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Restaurant Image">
    <p>Enjoy the best food in town with a great atmosphere.</p>
  `;
}

export default loadHome;
