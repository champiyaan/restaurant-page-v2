import _ from "lodash";
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function init() {
  document.getElementById("home-tab").addEventListener("click", loadHome);
  document.getElementById("menu-tab").addEventListener("click", loadMenu);
  document.getElementById("contact-tab").addEventListener("click", loadContact);
  loadHome();
}

document.addEventListener("DOMContentLoaded", init);
