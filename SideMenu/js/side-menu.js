function initialize() {
  const headerMenuIcon = document.getElementById("header-menu-icon");
  headerMenuIcon.addEventListener("click", showSideMenu);
}

function showSideMenu(){
  const sideMenu = document.getElementById("side-menu");
  sideMenu.classList.add("side-menu-open");
}

initialize();

