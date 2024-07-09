import _ from "lodash";
import loadHome from "./home";
import loadMenu from "./menu";

function init() {
  document.getElementById("home-tab").addEventListener("click", loadHome);
  document.getElementById("menu-tab").addEventListener("click", loadMenu);
  loadHome(); // This ensures that the home content is loaded by default.
}

document.addEventListener("DOMContentLoaded", init);
