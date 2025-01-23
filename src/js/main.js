var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    direction: "vertical",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});