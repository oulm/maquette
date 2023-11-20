const inputSearchBar = document.querySelector(".search-bar input");

inputSearchBar.addEventListener("focus", (e) => {
  // e.target.closest(".search-bar").style.borderColor = "#2a3db6";

  e.target.closest(".search-bar").style.boxShadow =
    "rgba(0, 0, 0, 0.35) 0px 5px 15px";
});

inputSearchBar.addEventListener("blur", (e) => {
  // e.target.closest(".search-bar").style.borderColor = "lightgray";
  e.target.closest(".search-bar").style.boxShadow = "";
});

const userImageElement = document.querySelector(".user-image");
const dropdownMenuElement = document.querySelector(".dropdown-menu");

userImageElement.addEventListener("click", () => {
  dropdownMenuElement.classList.toggle("open");
});
