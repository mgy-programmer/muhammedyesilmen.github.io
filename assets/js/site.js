(function () {
  "use strict";

  var body = document.body;
  var menuButton = document.querySelector("[data-menu-button]");
  var menu = document.querySelector("[data-mobile-menu]");
  var closeButton = document.querySelector("[data-menu-close]");
  var lastFocused = null;

  function preserveHash(href) {
    if (!window.location.hash || href.indexOf("#") !== -1) return href;
    return href + window.location.hash;
  }

  document.querySelectorAll("[data-locale-link]").forEach(function (link) {
    link.addEventListener("click", function () {
      var locale = link.getAttribute("data-locale-link");
      var href = link.getAttribute("href");

      try {
        window.localStorage.setItem("mgy-locale", locale);
      } catch (error) {
        /* Language switching still works when storage is unavailable. */
      }

      if (href) link.setAttribute("href", preserveHash(href));
    });
  });

  if (!menuButton || !menu || !closeButton) return;

  function focusableElements() {
    return Array.prototype.slice.call(
      menu.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')
    );
  }

  function openMenu() {
    lastFocused = document.activeElement || menuButton;
    menu.hidden = false;
    body.classList.add("menu-open");
    menuButton.setAttribute("aria-expanded", "true");
    closeButton.focus();
  }

  function closeMenu(restoreFocus) {
    menu.hidden = true;
    body.classList.remove("menu-open");
    menuButton.setAttribute("aria-expanded", "false");

    if (restoreFocus !== false && lastFocused && typeof lastFocused.focus === "function") {
      lastFocused.focus();
    }
  }

  menuButton.addEventListener("click", openMenu);
  closeButton.addEventListener("click", function () {
    closeMenu(true);
  });

  menu.addEventListener("click", function (event) {
    if (event.target === menu) closeMenu(true);
    if (event.target.closest(".mobile-nav a")) closeMenu(false);
  });

  document.addEventListener("keydown", function (event) {
    if (menu.hidden) return;

    if (event.key === "Escape") {
      closeMenu(true);
      return;
    }

    if (event.key !== "Tab") return;

    var focusable = focusableElements();
    if (!focusable.length) return;

    var first = focusable[0];
    var last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 860 && !menu.hidden) closeMenu(false);
  });
})();
