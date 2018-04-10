"use strict";

function Direct() {
  const drawerOpenBtn = document.getElementById("drawer-open-btn");
  const drawerCloseBtn = document.getElementById("drawer-close-btn");
  const drawer = document.getElementById("drawer");
  const drawerWrapper = document.getElementById("drawer-wrapper");

  drawerOpenBtn.addEventListener("click", toggleDrawer.bind(this));
  drawerCloseBtn.addEventListener("click", toggleDrawer.bind(this));

  function toggleDrawer() {
    if (drawer.classList.contains("drawer-hidden")) {
      drawerWrapper.classList.remove("hidden");
      setTimeout(
        function() {
          drawer.classList.remove("drawer-hidden");
          drawer.classList.add("drawer-shown");
        }, 600);
    } else {
      drawer.classList.add("drawer-hidden");
      drawer.classList.remove("drawer-shown");
      setTimeout(
        function() {
          drawerWrapper.classList.add("hidden");
        }, 600);
    }
  }
}

window.onload = function() {
    window.direct = new Direct();
};
