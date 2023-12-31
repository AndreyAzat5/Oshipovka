const hamb = document.querySelector("#hamb"),
  popup = document.querySelector("#popup"),
  menu = document.querySelector("#menu").cloneNode(1),
  body = document.body;
function hambHandler(e) {
  e.preventDefault(),
    popup.classList.toggle("open"),
    hamb.classList.toggle("active"),
    body.classList.toggle("noscroll"),
    renderPopup();
}
function renderPopup() {
  popup.appendChild(menu);
}
hamb.addEventListener("click", hambHandler);
const links = Array.from(menu.children);
function closeOnClick() {
  popup.classList.remove("open"),
    hamb.classList.remove("active"),
    body.classList.remove("noscroll");
}
function out() {
  let e = document.getElementById("komento").value,
    o = document.getElementById("state").value;
  if (!e && !o) return;
  let t = document.createElement("div");
  (t.className = "container"),
    (t.innerHTML =
      '<div class="userkoment"><img src="avatarkaIkon.png"/><div class="boxtextuser">' +
      o +
      '<br><p class="textuser">' +
      e +
      "</p></div></div>"),
    document.getElementById("out").appendChild(t);
}
function showHide(e) {
  (document.getElementById(
    "blok_id" == e ? "blok_1" : "blok_id"
  ).style.display = "none"),
    (document.getElementById(
      "blok_id" == e ? "blok_id" : "blok_1"
    ).style.display = "block");
}
function izmeColor(e) {
  (document.getElementById(
    "blok" == e ? "blok_2" : "blok"
  ).style.backgroundColor = "#32a7c4"),
    (document.getElementById(
      "blok" == e ? "blok" : "blok_2"
    ).style.backgroundColor = "black");
}
function poisk() {
  var e = document.getElementById("elastic").value.trim().toLowerCase();
  let o = document.querySelectorAll(".column a");
  "" !== e &&
    o.forEach(function (o) {
      o.innerText.toLowerCase().includes(e)
        ? window.location.replace(o)
        : (document.querySelector("input").value = "Нет информации");
    });
}
links.forEach((e) => {
  e.addEventListener("click", closeOnClick);
});
