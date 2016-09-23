(function () {
  document.addEventListener('DOMContentLoaded', function () {
    // Strip `.html` from ugly URLs (when served in production).
    if (location.hostname === 'iswebvrready.org') {
      var relativeLinks = document.querySelectorAll('a[href$=".html"]:not([href^="//"]):not([href^="http://"]):not([href^="https://"])');
      for (i = 0, len = relativeLinks.length; i < len; ++i) {
        relativeLinks[i].setAttribute('href', relativeLinks[i].getAttribute('href').replace(/.html$/, ''));
      }
    }
  });
})();
