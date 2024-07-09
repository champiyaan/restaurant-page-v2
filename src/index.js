import _ from "lodash";
import loadHome from "./home";

document.addEventListener("DOMContentLoaded", () => {
  // Call the function to load the home content
  loadHome();

  // Add event listener for the "Home" tab
  document.getElementById("home-tab").addEventListener("click", loadHome);
});
