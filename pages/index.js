const btnMenu = document.querySelectorAll(".button-menu");
const popupMenu = document.querySelector(".popup-menu");
const btnClosePopup = document.querySelectorAll(".popup-close");

const handleMenuClick = () => {
  popupMenu.classList.add("popup_opened");
};

const handleCloseClick = (e) => {
  e.target.closest(".popup").classList.remove("popup_opened");
};

btnMenu.forEach((btn) => {
  btn.addEventListener("click", handleMenuClick);
});

btnClosePopup.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    handleCloseClick(e);
  });
});
