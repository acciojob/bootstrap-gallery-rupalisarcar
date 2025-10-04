//your JS code here. If required.

	const lighbox = document.getElementById('lightbox')
	const lightboxImg = document.getElementById('lightboxImg');
	const closeBtn  = document.querySelector(".lightbox .close")
	
document.querySelectorAll(".card").forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex"; // show lightbox
    lightboxImg.src = img.src;       // set clicked image
  });
});
closeBtn.addEventListener('click',()=>{	
	lightbox.style.display = "none";
})
lightbox.addEventListener('click',(e)=>{
  if (e.target === lighbox) {
    lighbox.style.display = "none";
  }
});