const btnMenu = document.querySelectorAll(".button-menu");
const popupMenu = document.querySelector(".popup-menu");
const popupSale = document.querySelector(".popup-sale");
const btnClosePopup = document.querySelectorAll(".popup-close");

const handleMenuClick = () => {
  popupMenu.classList.add("popup_opened");
  document.body.style.overflow = "hidden"; // OFF SCROLL
};

const handleCloseClick = (e) => {
  e.target.closest(".popup").classList.remove("popup_opened");
  document.body.style.overflow = "visible"; // ON SCROLL
};

btnMenu.forEach((btn) => {
  btn.addEventListener("click", handleMenuClick);
});

btnClosePopup.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    handleCloseClick(e);
  });
});

const openPopupSale = () => {
  popupSale.classList.add("popup_opened");
  document.body.style.overflow = "hidden"; // OFF SCROLL
};

openPopupSale();
