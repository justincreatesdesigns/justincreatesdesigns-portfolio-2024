(async function () {
  const headerHTMLRequest = await fetch("/components/header.html");
  const headerHTML = await headerHTMLRequest.text();
  document.querySelector(".nav-start").innerHTML = headerHTML;
})();

(async function () {
  const headerHTMLRequest = await fetch("/components/all-works.html");
  const headerHTML = await headerHTMLRequest.text();
  document.querySelector(".all-works-js").innerHTML = headerHTML;
})();

(async function () {
  const headerHTMLRequest = await fetch("/components/footer.html");
  const headerHTML = await headerHTMLRequest.text();
  document.querySelector(".footer").innerHTML = headerHTML;
})();
