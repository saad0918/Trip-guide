let popup = document.getElementById("popup");

function openPopup() {
popup.classList.add("open-popup");
}

function closePopup() {
popup.classList.remove("open-popup");
}
document.addEventListener("DOMContentLoaded", function() {
let popup = document.getElementById("popup");

window.openPopup = function() {
popup.classList.add("open-popup");
}

window.closePopup = function() {
popup.classList.remove("open-popup");
}
});
