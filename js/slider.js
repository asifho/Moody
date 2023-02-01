// Get the menu icon and the dropdown menu by id
const menu = document.getElementById("menu")
const dropMenu = document.getElementById("dropMenu")

// function to toggle the close css class
function dropdown() {
    dropMenu.classList.toggle('close')
}
// function to dismiss the dropdown menu
// It just add the close css class instead of toggle
function dropdownDismiss() {
    dropMenu.classList.add('close')
}




var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });