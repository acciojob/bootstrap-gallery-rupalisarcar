// const lightbox = document.getElementById("lightbox");
// const lightboxImg = document.getElementById("lightboxImg");
// const closeBtn = document.querySelector(".lightbox .close");
// const prevBtn = document.querySelector(".lightbox .prev");
// const nextBtn = document.querySelector(".lightbox .next");

// const images = Array.from(document.querySelectorAll(".card img"));
// let currentIndex = 0;

// // Open lightbox with clicked image
// images.forEach((img, index) => {
//   img.addEventListener("click", () => {
//     currentIndex = index;
//     showImage(currentIndex);
//     lightbox.style.display = "flex";
//   });
// });

// function showImage(index) {
//   lightboxImg.src = images[index].src;
// }

// // Close
// closeBtn.addEventListener("click", () => {
//   lightbox.style.display = "none";
// });

// // Prev
// prevBtn.addEventListener("click", (e) => {
//   e.stopPropagation();
//   currentIndex = (currentIndex - 1 + images.length) % images.length;
//   showImage(currentIndex);
// });

// // Next
// nextBtn.addEventListener("click", (e) => {
//   e.stopPropagation();
//   currentIndex = (currentIndex + 1) % images.length;
//   showImage(currentIndex);
// });

// // Close when clicking outside image
// lightbox.addEventListener("click", (e) => {
//   if (e.target === lightbox) {
//     lightbox.style.display = "none";
//   }
// });

// // Optional: keyboard navigation
// document.addEventListener("keydown", (e) => {
//   if (lightbox.style.display === "flex") {
//     if (e.key === "ArrowRight") nextBtn.click();
//     if (e.key === "ArrowLeft") prevBtn.click();
//     if (e.key === "Escape") closeBtn.click();
//   }
// });

const modal = document.getElementById('imageModal');
        const modalImage = document.getElementById('modalImage');
        const images = document.querySelectorAll('.card img');

        images.forEach(img => {
            img.addEventListener('click', function() {
                const imgSrc = this.getAttribute('data-img-src');
                modalImage.src = imgSrc;
            });
        });
    
