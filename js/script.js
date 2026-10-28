(function () {
  var ua = (navigator.userAgent || "") + " " + (navigator.platform || "");
  var os = /Android|iPhone|iPad|iPod/i.test(ua)
    ? ""
    : /Win/i.test(ua)
      ? "win"
      : /Mac/i.test(ua)
        ? "mac"
        : /Linux|X11|CrOS/i.test(ua)
          ? "linux"
          : "";
  var names = { win: "Windows", mac: "macOS", linux: "Linux" };
  if (!os) {
    var n = document.getElementById("osnote");
    if (/Android|iPhone|iPad|iPod/i.test(ua))
      n.textContent =
        "O C.O.V.I. é para computador. Abra esta página no Windows, macOS ou Linux para baixar.";
    return;
  }
  var c = document.querySelector('.card[data-os="' + os + '"]');
  if (c) {
    c.classList.add("me");
    c.parentNode.insertBefore(c, c.parentNode.firstChild);
  }
  document.getElementById("main").textContent = "Baixar para " + names[os];
  document.getElementById("osnote").textContent =
    "Gratuito · Detectamos que você usa " + names[os];
})();
