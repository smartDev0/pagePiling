const cards = document.querySelectorAll("#card-parent .rejoan-card");
const openBtn = document.querySelectorAll("#card-parent .open");
const closeBtn = document.querySelectorAll("#card-parent .closed");
const crossBtn = document.querySelectorAll("#card-parent .cross-btn");

openBtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        cards[index].classList.add("active-card");
        btn.style.display = "none";
        closeBtn[index].style.display = "block";
    });
});

closeBtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        cards[index].classList.remove("active-card");
        btn.style.display = "none";
        openBtn[index].style.display = "block";
    });
});
crossBtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        cards[index].classList.remove("active-card");
        closeBtn[index].style.display = "none";
        openBtn[index].style.display = "block";
    });
});

// slick slider
const swiper = new Swiper("#card-slider", {
    speed: 400,
    direction: "horizontal",
    loop: true,
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    // autoplay: {
    //     delay: 4000
    // },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
    autoHeight: true,
});

// gsap animation
const timeline = gsap.timeline();

timeline
    .from(
        ".swiper-slide h3",
        {
            y: 20,
            opacity: 0,
            duration: 1,
        },
        "end"
    )
    .from(
        ".swiper-slide p",
        {
            y: -20,
            opacity: 0,
            duration: 1,
        },
        "end"
    )
    .fromTo(
        ".swiper-slide img",
        { opacity: 0, x: 20, y: 20 },
        {
            opacity: 1,
            duration: 1,
            x: 0,
            y: 0,
        },
        "end"
    )
    .from("#card-slider .swiper-wrapper .swiper-slide .slide-bg", {
        left: '-100%',
        duration: 0.7
    }, 'end');

swiper.on("slideChange", () => {
    return timeline.restart();
});
