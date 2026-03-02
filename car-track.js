// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
  duration: 2.5,
  // easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) // easeOutExpo
});

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// Select elements
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");
const car = document.querySelector(".car");

// Initial state (fade up setup)
gsap.set(".box1, .box2, .box3, .box4", {
  opacity: 0,
});

// Create timeline
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#page1",
    start: "top top",
    end: "+=1600",
    scrub: true,
    pin: true,
    invalidateOnRefresh: true,
    // markers: true // just to undestand the scroll trigger start and end points, remove in production
  }
});

// Main animation
tl.to(car, {
  x: () => window.innerWidth * 0.95,
  duration: 10,
  ease: "none"
})

// Boxes appear DURING car animation
.to(box1, {
  opacity: 1,
  duration: 5,
  ease: "power2.inOut"
}, 2)
.to(box2, {
  opacity: 1,
  duration: 5,
  ease: "power2.inOut"
}, 3.4)
.to(box3, {
  opacity: 1,
  duration: 5,
  ease: "power2.inOut"
}, 4.5)
.to(box4, {
  opacity: 1,
  duration: 5,
  ease: "power2.inOut"
}, 6);