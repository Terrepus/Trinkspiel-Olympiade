function openModal(imgElement) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("imgModal");
    modal.style.display = "block";
    modalImg.src = imgElement.src;

    // Calculate the current scroll position
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    // Calculate the center position of the screen relative to the scroll position
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;

    var modalHeight = modalImg.offsetHeight;
    var modalWidth = modalImg.offsetWidth;

    // Set the modal position
    modal.style.top = (scrollTop + (windowHeight - modalHeight) / 2) + "px";
    modal.style.left = (scrollLeft + (windowWidth - modalWidth) / 2) + "px";
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
} 