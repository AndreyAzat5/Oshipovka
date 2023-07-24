const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const menu = document.querySelector("#menu").cloneNode(1);
const body = document.body;

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

function renderPopup() {
  popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку

const links = Array.from(menu.children);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}

// код для скрытия суб меню при скролинге

$(document).ready(function(){
	$(window).scroll(function(){
    if (window.innerWidth > 1000) {
    if ($(window).scrollTop()>60) 
    {
        $(".menusha").show();
        
    }
    else
    {
        $(".menusha").hide();
        
    }
    
     }});
  });


  //Код слайдера 
  window.addEventListener("load", () => {
    var carousels = document.querySelectorAll(".carousel-3d");
    for (var i = 0; i < carousels.length; i++) {
      carousel(carousels[i]);
    }
  });
  function carousel(root) {
    var figure = root.querySelector("figure"),
      nav = root.querySelector("nav"),
      images = figure.children,
      n = images.length,
      gap = root.dataset.gap || 0,
      bfc = "bfc" in root.dataset,
      theta = 2 * Math.PI / n,
      currImage = 0;
    setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
    window.addEventListener("resize", () => {
      setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
    });
    setupNavigation();
    function setupCarousel(n, s) {
      var apothem = s / (2 * Math.tan(Math.PI / n));
      figure.style.transformOrigin = `50% 50% ${-apothem}px`;
      for (var i = 0; i < n; i++) images[i].style.padding = `0 ${gap}px`;
      for (i = 0; i < n; i++) {
        images[i].style.transformOrigin = `50% 50% ${-apothem}px`;
        images[i].style.transform = `rotateY(${i * theta}rad)`;
      }
      if (bfc)
      for (i = 0; i < n; i++) images[i].style.backfaceVisibility = "hidden";
      rotateCarousel(currImage);
    }
    function setupNavigation() {
      nav.addEventListener("click", onClick, true);
      function onClick(e) {
        e.stopPropagation();
        var t = e.target;
        if (t.tagName.toUpperCase() != "BUTTON") return;
        if (t.classList.contains("next")) {
          currImage++;
          } else {
          currImage--;
        }
        rotateCarousel(currImage);
      }
    }
    function rotateCarousel(imageIndex) {
      figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
    }
    var xClick;
    var mouseDown;
    /* Смена слайдов мышкой */	
    figure.onmousedown = (event) => {
      xClick = event.pageX;
      mouseDown = true;
    };
    figure.onmouseup = (event) => {
      mouseDown = false;
    };	
    figure.onmousemove = (event) => {
      if (mouseDown) {
        var xMove = event.pageX;
        if (Math.floor(xClick - xMove) > 5) {
          currImage++;
          rotateCarousel(currImage);
          mouseDown = false;
        }
        else if (Math.floor(xClick - xMove) < -5) {
          currImage--;
          rotateCarousel(currImage);
          mouseDown = false;
        }
      }
    };
    let cur;
  function showcur() {
      cur = setInterval(function() {
          currImage++;
          rotateCarousel(currImage);
      }, 2000);
  }
  function clearcur() {
      clearInterval(cur);
  }
  root.onmouseover  = function() {
      clearcur();
  }  
  root.onmouseout  = function() {
      showcur();
  }     
  showcur();
    /* Смена слайдов пальцем */	
    figure.ontouchstart = (event) => {
      xClick = event.changedTouches[0].pageX;
      mouseDown = true;
    };
    figure.ontouchend = (event) => {
      mouseDown = false;
    };	
    figure.ontouchmove = (event) => {
      if (mouseDown) {
        var xMove = event.changedTouches[0].pageX;
        if (Math.floor(xClick - xMove) > 5) {
          currImage++;
          rotateCarousel(currImage);
          mouseDown = false;
        }
        else if (Math.floor(xClick - xMove) < -5) {
          currImage--;
          rotateCarousel(currImage);
          mouseDown = false;
        }
      }
    };
  }