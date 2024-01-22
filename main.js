document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.carousel-images img');
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');
    let currentImageIndex = 0;

    const showImage = (index) => {
        images.forEach(img => img.style.display = 'none');
        images[index].style.display = 'block';
    };

    nextButton.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
    });

    prevButton.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        showImage(currentImageIndex);
    });

    showImage(0);
});
