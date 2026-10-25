(function () {
  "use strict";

  var localeLinks = document.querySelectorAll("[data-locale-path]");

  function syncLanguageLinks() {
    var hash = window.location.hash;
    var target = null;
    try {
      target = hash && document.getElementById(decodeURIComponent(hash.slice(1)));
    } catch (error) {
      /* Invalid fragments must not prevent ordinary language navigation. */
    }
    localeLinks.forEach(function (link) {
      link.setAttribute("href", link.getAttribute("data-locale-path") + (target ? hash : ""));
    });
  }

  syncLanguageLinks();
  window.addEventListener("hashchange", syncLanguageLinks);

  var header = document.querySelector("[data-site-header]");
  var trigger = document.querySelector("[data-menu-open]");
  var menu = document.querySelector("[data-menu]");
  var closeButton = document.querySelector("[data-menu-close]");

  // Preserve inline navigation if native modal support or JavaScript is unavailable.
  if (!header || !trigger || !menu || !closeButton || typeof menu.showModal !== "function") return;

  var desktop = window.matchMedia("(min-width: 861px)");
  var restoreFocus = true;

  function closeMenu(shouldRestoreFocus) {
    restoreFocus = shouldRestoreFocus;
    menu.close();
  }

  trigger.addEventListener("click", function () {
    if (menu.open) return;
    restoreFocus = true;
    menu.showModal();
    document.documentElement.classList.add("menu-open");
    trigger.setAttribute("aria-expanded", "true");
    closeButton.focus();
  });

  closeButton.addEventListener("click", function () { closeMenu(true); });

  menu.addEventListener("click", function (event) {
    if (event.target === menu) closeMenu(true);
    if (event.target.closest("[data-locale-path]")) {
      closeMenu(false);
      return;
    }
    var sectionLink = event.target.closest("a[href^='#']");
    if (!sectionLink) return;
    var section = document.getElementById(sectionLink.getAttribute("href").slice(1));
    closeMenu(false);
    if (section) section.focus({ preventScroll: true });
  });

  // Keep boundary Tab presses inside the menu, including in embedded browsers.
  menu.addEventListener("keydown", function (event) {
    if (event.key !== "Tab") return;
    var controls = menu.querySelectorAll("button, a[href]");
    var first = controls[0];
    var last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  // Native dialog supplies Escape and an inert background.
  menu.addEventListener("close", function () {
    document.documentElement.classList.remove("menu-open");
    trigger.setAttribute("aria-expanded", "false");
    if (restoreFocus && !desktop.matches) trigger.focus({ preventScroll: true });
  });

  window.addEventListener("resize", function () {
    if (!desktop.matches || !menu.open) return;
    closeMenu(false);
    header.querySelector(".brand").focus({ preventScroll: true });
  });

  // Enhance only after the controls and their handlers are ready.
  header.classList.add("is-enhanced");
  trigger.hidden = false;
})();
