(function () {
  var body = document.body;
  var currentLocale = body.getAttribute("data-locale") || "en";
  var storedLocale = null;

  try {
    storedLocale = window.localStorage.getItem("mgy-locale");
  } catch (error) {
    storedLocale = null;
  }

  function withCurrentHash(href) {
    if (!window.location.hash || href.indexOf("#") !== -1) return href;
    return href + window.location.hash;
  }

  function localeHref(locale) {
    var link = document.querySelector('[data-locale-link="' + locale + '"]');
    return link ? link.getAttribute("href") : null;
  }

  if (storedLocale && storedLocale !== currentLocale) {
    var storedLocaleHref = localeHref(storedLocale);
    if (storedLocaleHref) {
      window.location.replace(withCurrentHash(storedLocaleHref));
      return;
    }
  }

  document.querySelectorAll("[data-locale-link]").forEach(function (link) {
    link.addEventListener("click", function () {
      var locale = link.getAttribute("data-locale-link");
      try {
        window.localStorage.setItem("mgy-locale", locale);
      } catch (error) {
        /* Storage can be unavailable in strict privacy modes. */
      }
      var href = link.getAttribute("href");
      if (href) {
        link.setAttribute("href", withCurrentHash(href));
      }
    });
  });

  var menuButton = document.querySelector("[data-menu-button]");
  var menu = document.querySelector("[data-mobile-menu]");
  var closeButton = document.querySelector("[data-menu-close]");
  var lastFocused = null;

  if (!menuButton || !menu || !closeButton) return;

  function focusableElements() {
    return Array.prototype.slice.call(
      menu.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
    );
  }

  function openMenu() {
    lastFocused = document.activeElement;
    if (!lastFocused || lastFocused === document.body) {
      lastFocused = menuButton;
    }
    menu.hidden = false;
    body.classList.add("menu-open");
    menuButton.setAttribute("aria-expanded", "true");
    var focusables = focusableElements();
    if (focusables.length) focusables[0].focus();
  }

  function closeMenu() {
    menu.hidden = true;
    body.classList.remove("menu-open");
    menuButton.setAttribute("aria-expanded", "false");
    if (lastFocused && typeof lastFocused.focus === "function") {
      lastFocused.focus();
    }
  }

  menuButton.addEventListener("click", openMenu);
  closeButton.addEventListener("click", closeMenu);

  menu.addEventListener("click", function (event) {
    if (event.target === menu) closeMenu();
    if (event.target.matches(".mobile-menu__nav a")) closeMenu();
  });

  document.addEventListener("keydown", function (event) {
    if (menu.hidden) return;

    if (event.key === "Escape") {
      closeMenu();
      return;
    }

    if (event.key !== "Tab") return;

    var focusables = focusableElements();
    if (!focusables.length) return;

    var first = focusables[0];
    var last = focusables[focusables.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
})();
