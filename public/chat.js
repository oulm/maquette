// INPUT SEARCH
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

// BLOCK

// !TODO: CLOSE WHEN YOU CLICK OUTSIDE THE MODAL

const blockButton = document.querySelector("#block");
const modalConfirmation = document.querySelector(".modal-confirmation");

blockButton.addEventListener("click", () => {
  modalConfirmation.classList.add("open");
  const closeButton = modalConfirmation.querySelector(".close-modal");

  const denyButton = modalConfirmation.querySelector("#deny-button");

  [closeButton, denyButton].forEach((item) => {
    item.addEventListener("click", () => {
      modalConfirmation.classList.remove("open");
    });
  });
});

// function closePopUp(e) {
//   // if (!modalConfirmation.contains("open")) return;
//   // else console.log("pass..");

//   const clicked = modalConfirmation.contains(e.target);
//   // console.log(clicked);
//   console.log(opened);
//   if (!clicked && !opened) {
//     // document.removeEventListener("click", closePopUp);
//     modalConfirmation.classList.remove("open");
//   } else modalConfirmation.classList.add("open");
// }

// MODAL
// const modalsElements = document.querySelectorAll(".modal");

// const userImageElement = document.querySelector(".user-image");
// const dropdownMenuElement = document.querySelector(
//   ".primary-header .dropdown-menu"
// );

// userImageElement.addEventListener("click", () => {
//   dropdownMenuElement.classList.toggle("open");
// });

// const chatPersonMoreElement = document.querySelector(".chat-person-more");
// const dropdownMenuChatElement = document.querySelector(
//   ".chat-person-header > .dropdown-menu"
// );

// chatPersonMoreElement.addEventListener("click", () => {
//   dropdownMenuChatElement.classList.toggle("open");
//   console.log(dropdownMenuChatElement);
//   console.log("clicked");
// });

// TEXTAREA RESIZE
const textarea = document.querySelector(".chat-conversation-footer-input");

textarea.addEventListener("input", function () {
  adjustTextareaHeight(this);
});

function adjustTextareaHeight(textarea) {
  // Calculate the scroll height difference
  const scrollHeight = textarea.scrollHeight;
  const offsetHeight = textarea.offsetHeight;
  const scrollHeightDiff = scrollHeight - offsetHeight;

  // Adjust the textarea height if needed
  if (scrollHeightDiff > 0) {
    textarea.style.height = scrollHeight + "px";
  }

  //!TODO: textarea resize
}
