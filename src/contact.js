import "./styles.scss";

function loadContact() {
  const content = document.getElementById("content");
  content.className = "contact"; // this is for styling

  content.innerHtml = ` <h1>Contact Us</h1>
    <div id="map"></div>
    <form id="contact-form">
      <input type="text" id="name" name="name" placeholder="Your Name" required>
      <input type="email" id="email" name="email" placeholder="Your Email" required>
      <textarea id="message" name="message" rows="4" placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>`;
  initMap();
}

function initMap() {
  const map = L.map("map").setView([-33.9249, 18.4241], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.marker([-33.9249, 18.4241])
    .addTo(map)
    .bindPopup("This Is Our Restaurant")
    .openPopup();
}

export default loadContact;
