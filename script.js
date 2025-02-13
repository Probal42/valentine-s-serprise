document.addEventListener("DOMContentLoaded", function() {
    // Background Music Auto Play
    let music = document.getElementById("bg-music");
    music.play();

    // Stop music when the user leaves the page
    window.addEventListener("beforeunload", function() {
        music.pause();
    });

    // Image Carousel Functionality
    let images = document.querySelectorAll(".carousel img");
    let index = 0;

    function showNextImage() {
        images.forEach(img => img.style.display = "none");
        images[index].style.display = "block";
        index = (index + 1) % images.length;
    }

    showNextImage();
    setInterval(showNextImage, 3000); // Change image every 3 seconds
});
