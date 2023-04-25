var header = document.getElementById("app-header");
var sticky = header.offsetTop;

function onScrollStickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

window.onscroll = function () {
    onScrollStickyHeader();
};
