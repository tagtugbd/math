(function () {
  "use strict";

  // --- LOADER SCRIPTS ---
  const loader = document.getElementById("loader-wrapper");
  const body = document.body;

  if (loader) {
    body.classList.add("loading-active");

    const hideLoader = () => {
      if (!loader) return;
      loader.style.opacity = "0";
      setTimeout(() => {
        loader.remove();
        body.classList.remove("loading-active");
      }, 400);
    };

    window.addEventListener("load", hideLoader);

    // Safety fallback timeout
    setTimeout(() => {
      if (document.getElementById("loader-wrapper")) hideLoader();
    }, 4000);
  }

  // --- BODY LOCKING UTIL FOR MOBILE NAVIGATION ---
  let scrollY = 0;
  const lockBody = (lock) => {
    if (lock) {
      scrollY = window.scrollY;
      document.body.classList.add("no-scroll");
      if (window._lenis) window._lenis.stop();
      else {
        document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = "hidden";
      }
    } else {
      document.body.classList.remove("no-scroll");
      if (window._lenis) window._lenis.start();
      else {
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
        window.scrollTo(0, scrollY);
      }
    }
  };

  // --- HAMBURGER MENU & FULLSCREEN MOBILE INTERACTION ---
  const hamburger = document.getElementById("hamburger-toggle");
  const fullMenu = document.getElementById("fullscreen-menu");

  if (hamburger && fullMenu) {
    // Clone navigation items into mobile full-screen container dynamically if empty
    const srcNav = document.getElementById("header-nav");
    const targetNav = fullMenu.querySelector(".header-nav");
    if (srcNav && targetNav && !targetNav.children.length) {
      targetNav.innerHTML = srcNav.innerHTML;
      targetNav
        .querySelectorAll("[id]")
        .forEach((el) => el.removeAttribute("id"));
    }

    // Clone social items into mobile full-screen container dynamically if empty
    const srcSocial = document.getElementById("header-social");
    const targetSocial = fullMenu.querySelector(".header-social");
    if (srcSocial && targetSocial && !targetSocial.children.length) {
      targetSocial.innerHTML = srcSocial.innerHTML;
      targetSocial
        .querySelectorAll("[id]")
        .forEach((el) => el.removeAttribute("id"));
    }

    const toggleMenu = (forceOpen) => {
      const isOpen = fullMenu.classList.contains("active");
      const open = forceOpen !== undefined ? forceOpen : !isOpen;

      if (open) {
        hamburger.classList.add("active");
        fullMenu.classList.add("active");
        hamburger.setAttribute("aria-expanded", "true");
        fullMenu.setAttribute("aria-hidden", "false");
        lockBody(true);
      } else {
        hamburger.classList.remove("active");
        fullMenu.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
        fullMenu.setAttribute("aria-hidden", "true");
        lockBody(false);
      }
    };

    hamburger.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    fullMenu.addEventListener("click", (e) => {
      if (e.target.closest("a")) toggleMenu(false);
    });

    document.addEventListener("click", (e) => {
      if (
        fullMenu.classList.contains("active") &&
        !fullMenu.contains(e.target) &&
        !hamburger.contains(e.target)
      ) {
        toggleMenu(false);
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && fullMenu.classList.contains("active")) {
        toggleMenu(false);
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1030 && fullMenu.classList.contains("active")) {
        toggleMenu(false);
      }
    });
  }

  // --- NAV DROP-DOWN ACCORDIONS (MOBILE & INTERACTIVE DESKTOP CLICK) ---
  function deactivateAccordion(header) {
    header.classList.remove("active");
    const content = header.nextElementSibling;
    if (content) {
      content.style.maxHeight = "0px";
      content.style.opacity = "0";
      setTimeout(() => {
        if (!header.classList.contains("active")) {
          content.style.visibility = "hidden";
        }
      }, 300);
    }
    const arrow = header.querySelector(".arrow img, .arrow, .toggle-icon");
    if (arrow) arrow.style.transform = "rotate(0deg)";
  }

  document.addEventListener("click", (e) => {
    const trigger = e.target.closest(".nav-accordion");

    if (!trigger) {
      const isInsideContent = e.target.closest(".nav-dropdown-content");
      if (!isInsideContent) {
        document
          .querySelectorAll(".nav-accordion.active")
          .forEach(deactivateAccordion);
      }
      return;
    }

    const content = trigger.nextElementSibling;
    if (!content) return;

    const isOpening = !trigger.classList.contains("active");
    e.preventDefault();

    if (isOpening) {
      const container = trigger.closest(".fullscreen-menu") || document;
      container
        .querySelectorAll(".nav-accordion.active")
        .forEach((otherHeader) => {
          if (otherHeader !== trigger) deactivateAccordion(otherHeader);
        });

      trigger.classList.add("active");
      content.style.visibility = "visible";
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.opacity = "1";

      const arrow = trigger.querySelector(".arrow img, .arrow, .toggle-icon");
      if (arrow) arrow.style.transform = "rotate(180deg)";
    } else {
      deactivateAccordion(trigger);
    }
  });

  // --- HEADER SCROLL DETECTOR ---
  const header = document.querySelector(".mobile-header");
  if (header) {
    window.addEventListener(
      "scroll",
      () => {
        header.classList.toggle("scrolled", window.scrollY > 50);
      },
      { passive: true },
    );
  }
})();
