

// =========================
// MOBILE NAVIGATION
// =========================

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  menuToggle.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle.classList.remove("active");
  });
});

// =========================
// NAVBAR SCROLL EFFECT
// =========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// =========================
// ACTIVE NAVIGATION
// =========================

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector(".nav-link.active")
      ?.classList.remove("active");

    link.classList.add("active");
  });
});

// =========================
// HERO PARALLAX
// =========================

const hero = document.querySelector(".hero");
const watermark = document.querySelector(".hero-watermark");

hero.addEventListener("mousemove", (event) => {
  if (window.innerWidth <= 650) return;

  const x = (event.clientX / window.innerWidth - 0.5) * 15;
  const y = (event.clientY / window.innerHeight - 0.5) * 15;

  watermark.style.transform = `translate(${x}px, ${y}px)`;
});

hero.addEventListener("mouseleave", () => {
  watermark.style.transform = "translate(0, 0)";
});

// =========================
// SMOOTH ANCHOR NAVIGATION
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", (event) => {
    const target = document.querySelector(anchor.getAttribute("href"));

    if (target) {
      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});


/* ABOUT SECTION ANIMATION */

const aboutElements = document.querySelectorAll(
  ".about-section .reveal"
);

const aboutObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("active");
        }, index * 180);

        aboutObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15
  }
);

aboutElements.forEach((element) => {
  aboutObserver.observe(element);
});


/* PROJECTS SCROLL ANIMATION */

const projectCards = document.querySelectorAll(
  ".project-reveal"
);

const projectObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        projectObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

projectCards.forEach((card) => {
  projectObserver.observe(card);
});




/* =========================
   LOADING SCREEN
========================= */

const loader = document.getElementById("loader");
const loaderBar = document.getElementById("loaderBar");
const loaderPercent = document.getElementById("loaderPercent");

if (loader && loaderBar && loaderPercent) {

  let progress = 0;

  // Kunci scroll selama loading
  document.body.style.overflow = "hidden";

  const loadingInterval = setInterval(() => {

    if (progress < 95) {
      progress += 1;

      loaderBar.style.width = progress + "%";
      loaderPercent.textContent = progress + "%";
    }

  }, 25);

  window.addEventListener("load", () => {

    clearInterval(loadingInterval);

    loaderBar.style.width = "100%";
    loaderPercent.textContent = "100%";

    setTimeout(() => {

      // Kembalikan posisi ke Hero Section
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
      });

      // Sembunyikan loading screen
      loader.classList.add("hide");

      // Aktifkan kembali scroll
      document.body.style.overflow = "";

    }, 3000);

  });

}



// =========================
// SKILLS INTERACTIONS
// =========================

const skillCards = document.querySelectorAll(".skill-card");
const otherSkills = document.querySelectorAll(".other-skill");

// Scroll reveal animation
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      skillObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});

[...skillCards, ...otherSkills].forEach((item, index) => {
  item.style.transitionDelay = `${index * 120}ms`;
  skillObserver.observe(item);
});

// 3D card effect mengikuti mouse
skillCards.forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    if (window.innerWidth <= 768) return;

    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 5;
    const rotateX = ((centerY - y) / centerY) * 5;

    card.style.setProperty("--rotate-x", `${rotateX}deg`);
    card.style.setProperty("--rotate-y", `${rotateY}deg`);

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  });

  card.addEventListener("mouseleave", () => {
    card.style.setProperty("--rotate-x", "0deg");
    card.style.setProperty("--rotate-y", "0deg");
  });
});



/* =========================
   SKILL IMAGE INTERACTION
========================= */

const hoverSkillCards = document.querySelectorAll(".skill-card");

hoverSkillCards.forEach((card) => {

  const image = card.querySelector(".skill-hover-image");

  if (!image) return;

  card.addEventListener("mousemove", (event) => {

    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    image.style.left = `${x}px`;
    image.style.top = `${y}px`;

  });

});


/* =========================
   SKILL HOVER IMAGE
========================= */

const skillHoverElements = document.querySelectorAll(".skill-card");

skillHoverElements.forEach((card) => {
  const image = card.querySelector(".skill-hover-image");

  if (!image) return;

  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    image.style.left = `${x}px`;
    image.style.top = `${y}px`;
  });
});










