import "./style.css";
(function inicio() {
  console.log("Hi, I'm a sasa page");

  let nav1 = document.createElement("nav");
  let ul1 = document.createElement("ul");
  let li1 = document.createElement("li");
  let li2 = document.createElement("li");
  let li3 = document.createElement("li");
  let div1 = document.createElement("div");
  let div2 = document.createElement("div");
  let div3 = document.createElement("div");
  let div4 = document.createElement("div");

  li1.setAttribute("id", "home");
  li2.setAttribute("id", "menu");
  li3.setAttribute("id", "promos");
  div1.setAttribute("id", "content");
  div2.setAttribute("id", "column1");
  div3.setAttribute("id", "column2");
  div4.setAttribute("id", "column3");

  li1.textContent = "HOME";
  li2.textContent = "MENU";
  li3.textContent = "PROMOS";
  div3.textContent = "BIENVENIDOS";
  div4.textContent = "CONTACTO";

  ul1.append(li1, li2, li3);
  nav1.appendChild(ul1);
  div1.append(div2, div3, div4);

  li1.addEventListener("click", () => {
    div3.textContent = "BIENVENIDOS";
  });

  li2.addEventListener("click", () => {
    div3.textContent = "";
    let menu1 = document.createElement("div");
    let menu2 = document.createElement("div");
    let menu3 = document.createElement("div");
    let menu4 = document.createElement("div");
    menu1.setAttribute("id", "menu1");
    menu1.textContent = "PIZZA MUZARELLA - $2000";
    menu2.setAttribute("id", "menu2");
    menu2.textContent = "EMPANADAS DOCENA - $2500"
    menu3.setAttribute("id", "menu3");
    menu3.textContent = "TORTILLA PAPA - $1200"
    menu4.setAttribute("id", "menu4");
    menu4.textContent = "POLLO CON PAPAS - $2400"
    div3.append(menu1,menu2,menu3,menu4);
  });

  li3.addEventListener("click", () => {
    div3.textContent = "";
  });

  window.onload = function () {
    document.body.append(nav1, div1);
  };
})();
