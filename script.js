const tabs = document.querySelectorAll(".tab");
const slides = document.querySelectorAll(".slide");

tabs.forEach(tab => {

tab.addEventListener("click", () => {

const target = tab.dataset.slide;

slides.forEach(slide => {
slide.classList.remove("active");
});

tabs.forEach(t => {
t.classList.remove("active");
});

document.getElementById(target).classList.add("active");
tab.classList.add("active");

});

});