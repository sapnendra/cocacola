gsap.registerPlugin(ScrollTrigger);

function cursorAnimation() {
  const main = document.querySelector("main");
  const cursor = document.querySelector("#cursor");
  const img = document.querySelectorAll("img");
  const a = document.querySelectorAll("a");

  main.addEventListener("mousemove", (dets) => {
    cursor.style.opacity = 1;
    xmove = dets.x;
    ymove = dets.y;
    gsap.to(cursor, {
      x: xmove - 10,
      y: ymove - 10,
      duration: 1,
      ease: "back.out",
    });
  });

  a.forEach((a) => {
    a.addEventListener("mouseenter", () => {
      cursor.style.display = "none";
    });
    a.addEventListener("mouseleave", () => {
      cursor.style.display = "block";
    });
  })

  img.forEach((img) => {
    img.addEventListener("mouseenter", () => {
      gsap.to(cursor, {
        scale: 2,
        backgroundColor: "#2d93f9",
      });
    });
    img.addEventListener("mouseleave", () => {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: "#D6002B",
      });
    });
  });
}
cursorAnimation();

function navAnimation() {
  gsap.from("nav>a", {
    y: "-300",
    opacity: 0,
    duration: 1,
  });
  gsap.from(".nav-item a", {
    y: "-300",
    opacity: 0,
    duration: 1,
    stagger: 0.1,
  });
}
navAnimation();

function timeline1() {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".flavour",
      start: "0% 95%",
      end: "70% 90%",
      scrub: 1,
    },
  });

  tl.to(
    "#fanta",
    {
      top: "146%",
      left: "25%",
      rotate: "360",
    },
    "fanta"
  );
  tl.to(
    "#orange-cut",
    {
      top: "110%",
      left: "10%",
    },
    "fanta"
  );
  tl.to(
    "#orange2",
    {
      top: "165%",
      left: "70%",
    },
    "fanta"
  );
  tl.to(
    "#leaf",
    {
      top: "100%",
      left: "30%",
    },
    "fanta"
  );
  tl.to(
    "#leaf2",
    {
      top: "165%",
      left: "30%",
    },
    "fanta"
  );
  tl.to(
    "#coconut-leaf",
    {
      top: "100%",
      right: "0%",
    },
    "fanta"
  );
}
timeline1();

function timeline2() {
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".cards",
      start: "0% 95%",
      end: "70% 90%",
      scrub: 1,
    },
  });

  tl2.to(
    "#fanta",
    {
      top: "250%",
      left: "50%",
      rotate: "720",
    },
    "toCard"
  );
  tl2.to(
    "#orange-cut",
    {
      top: "224%",
      left: "50%",
      height: "37%",
      transform: "translateX(-50%) translateY(-50%)",
      rotate: "360",
      zIndex: 1,
    },
    "toCard"
  );

  tl2.to(
    "#leaf",
    {
      top: "220%",
      left: "25%",
      zIndex: "1",
      rotate: "360",
    },
    "toCard"
  );
  tl2.to(
    "#leaf2",
    {
      top: "265%",
      left: "56%",
      zIndex: "1",
      rotate: "360",
    },
    "toCard"
  );

  tl2.from(
    "#cocacola, .lemon-cut",
    {
      opacity: 0,
      x: "-1000",
    },
    "toCard"
  );
  tl2.from(
    ".lemon-cut",
    {
      rotate: "-360",
    },
    "toCard"
  );
  tl2.from(
    "#pepsi, .lemon-cut-pepsi",
    {
      opacity: 0,
      x: "1000",
    },
    "toCard"
  );
  tl2.from(
    ".lemon-cut-pepsi",
    {
      rotate: "360",
    },
    "toCard"
  );
}
timeline2();
