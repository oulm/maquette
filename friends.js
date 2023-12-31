// Sample data for demonstration
//const imageData = ["https://source.unsplash.com/800x800/?avatar"];
/*
const imageData = [
  "https://source.unsplash.com/800x800/?avatar",
  "https://source.unsplash.com/800x800/?avatar",
  "https://source.unsplash.com/800x800/?avatar",
  "https://source.unsplash.com/800x800/?avatar",
  "https://source.unsplash.com/800x800/?avatar",
  "https://source.unsplash.com/800x800/?avatar",
  "https://source.unsplash.com/800x800/?avatar",
  "https://source.unsplash.com/800x800/?avatar",
  "https://source.unsplash.com/800x800/?avatar",
  "https://source.unsplash.com/800x800/?avatar",
  "https://source.unsplash.com/800x800/?avatar",
  "https://source.unsplash.com/800x800/?avatar",
  "https://source.unsplash.com/800x800/?avatar",
  "https://source.unsplash.com/800x800/?avatar",
  "https://source.unsplash.com/800x800/?avatar",
  "https://source.unsplash.com/800x800/?avatar",
  "https://source.unsplash.com/800x800/?avatar",
  "https://source.unsplash.com/800x800/?avatar",
  "https://source.unsplash.com/800x800/?avatar",
  "https://source.unsplash.com/800x800/?avatar",
  "https://source.unsplash.com/800x800/?avatar",
  "https://source.unsplash.com/800x800/?avatar",
  "https://source.unsplash.com/800x800/?avatar",
  "https://source.unsplash.com/800x800/?avatar",
  "https://source.unsplash.com/800x800/?avatar",
];

const itemsPerPage = 6;

const friendContainer = document.getElementById("friendContainer");
const paginationContainer = document.getElementById("paginationContainer");

function showPage(page) {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const slicedData = imageData.slice(startIndex, endIndex);

  // if(page == 1)
  // friendContainer.innerHTML += '';
  // else
  friendContainer.innerHTML = "";

  slicedData.forEach((imageSrc, index) => {
    const card = createFriendCard(imageSrc);
    friendContainer.appendChild(card);
  });

  renderPagination(imageData.length, itemsPerPage, page);
}

function createFriendCard(imageSrc) {
  const card = document.createElement("div");
  card.className = "friend-card";

  const img = document.createElement("img");
  img.src = imageSrc;
  img.alt = "friend Image";

  const content = document.createElement("div");
  content.className = "invitation-content";

  const userInfo = document.createElement("div");
  userInfo.className = "userInfo";

  const username = document.createElement("p");
  username.className = "username";

  const level = document.createElement("p");
  level.className = "level";

  const usernameText = document.createTextNode("Username");
  const usernameLevel = document.createTextNode("Level 1");

  username.appendChild(usernameText);
  level.appendChild(usernameLevel);

  userInfo.appendChild(username);
  userInfo.appendChild(level);

  content.appendChild(userInfo);

  const buttons = document.createElement("div");
  buttons.className = "invitation-buttons";

  const chatButton = createButton("Chat", "chat-button");
  const playButton = createButton("Play", "play-button");
  const blockButton = createButton("Block", "block-button");
  const seeProfileButton = createButton("Profile", "see-profile-button");

  buttons.appendChild(seeProfileButton);
  buttons.appendChild(chatButton);
  buttons.appendChild(playButton);
  buttons.appendChild(blockButton);

  content.appendChild(buttons);

  card.appendChild(img);
  card.appendChild(content);

  return card;
}

function createButton(text, className) {
  const button = document.createElement("button");
  button.textContent = text;
  button.className = className;
  return button;
}

function renderPagination(totalItems, itemsPerPage, currentPage) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  paginationContainer.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const button = createButton(i, "pagination-button");
    button.addEventListener("click", () => showPage(i));
    if (i === currentPage) {
      button.classList.add("active");
    }
    paginationContainer.appendChild(button);
  }
}

// Initial page load
showPage(1);
*/
/*

const cardsContent = document.querySelector(".cards-content");
const cards = cardsContent.querySelectorAll(".card");

// console.log(cardsContent);

let number = 27;

// Function to load new cards
function loadNewCards() {
  // Make a fetch request to get new cards data
  // fetch("https://jsonplaceholder.typicode.com/posts?_start=101&_limit=10")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     // Append new cards to the container
  //     for (const card of data) {
  //       const newCard = createCardElement(card);
  //       cardsContainer.appendChild(newCard);
  //     }
  //   });

  const cardsLength = cards.length;

  if (number % 27 === 0 && number < cardsLength) {
    console.log("yes");
    for (let i = 0; i < number; i++) {
      showCard(cards[i]);
    }
  } else {
    console.log("no");
  }
}

function showCard(card) {
  card.style.display = "flex";
  return card;
}

loadNewCards();

// Function to create a card element
function createCardElement(card) {
  // const cardElement = document.createElement("div");
  // cardElement.classList.add("card");

  // const cardContent = `
  //   <h2>${card.title}</h2>
  //   <p>${card.body}</p>
  // `;

  // cardElement.innerHTML = cardContent;
  // return cardElement;

  card.classList.style.display = "flex";
}

window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY + window.innerHeight;
  const containerHeight = cardsContent.scrollHeight;

  if (scrollPosition >= containerHeight) {
    loadNewCards();
  }
});
*/
