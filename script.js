
let t1 = gsap.timeline({paused: true, reserved: true});

const bookNow = document.querySelector('.book')
const cancel = document.querySelector('.cancel')

bookNow.addEventListener('click', e => {
    t1.play();
})

cancel.addEventListener('click', e => {
    t1.reverse();
})


t1.to(
    ".body", {
        ease: "power1.inOut",
        marginTop: 0,
    }, 0
);

t1.to(
    ".header button", {
        ease: "power1.inOut",
        opacity: 0,
        scale: 0,
    }, 0
);

t1.to(
    ".book", {
        ease: "power1.inOut",
        opacity: 0,
    }, 0
);

t1.to(
    ".cancel", {
        ease: "power1.inOut",
        right: 20,
        opacity: 1
    }, 0
);

t1.to(
    ".booking-container", {
        ease: "power1.inOut",
        marginTop: -210,
        zIndex: 10,
        height:500
    }, 0
);
