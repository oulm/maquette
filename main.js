// // Function to handle the scroll event
// function handleScroll() {
//   // Loop through each section
//   document.querySelectorAll("section").forEach((section) => {
//     if(section.classList.con)
//     const rect = section.getBoundingClientRect();

//     // Check if the top of the section is within the viewport
//     if (rect.top < window.innerHeight && rect.bottom >= 0) {
//       // Set height to 100vh
//       section.style.height = "100vh";
//     } else {
//       // Set height to 0
//       section.style.height = "0";
//     }
//   });
// }

// // Add event listener for scroll
// window.addEventListener("scroll", handleScroll);

// // Trigger initial check on page load
// handleScroll();

// import Swiper from "swiper";

// var swiper = new Swiper(".mySwiper", {
//   effect: "coverflow",
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: 3,
//   coverflowEffect: {
//     rotate: 50,
//     stretch: 0,
//     depth: 100,
//     modifier: 1,
//     slideShadows: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//   },
// });

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  loop: true, // Enable loop mode
  spaceBetween: 80, // Adjust as needed for spacing between slides
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 1000, // Set the delay between slides in milliseconds (e.g., 5000ms = 5 seconds)
    disableOnInteraction: false, // Allow interaction to stop autoplay
  },
  initialSlide: 1, // Start from the second slide
});


const yearElement = document.querySelector(".copyright-year");
yearElement.textContent = new Date().getFullYear();
