function showPage(page){
  var element = document.getElementsByClassName("active");
  element.item(0).classList.remove("active");
  var element = document.getElementById(page);
  element.classList.add("active");
  var element = document.getElementsByClassName("sideactive");
  element.item(0).classList.remove("sideactive");
  var element = document.getElementById("side"+page);
  element.classList.add("sideactive");

  switch (page) {
    case 'jogo':
      document.getElementById('content').src = "jogo.html";
      break;
    case 'casos':
      document.getElementById('content').src = "casos.html";
      break;
    case 'regras':
      document.getElementById('content').src = "regras.html";
      break;
    case 'apoie':
      document.getElementById('content').src = "apoie.html";
      break;
    case 'sobre':
      document.getElementById('content').src = "sobre.html";
      break;
    default:
      document.getElementById('content').src = "jogo.html";
      break;
  }
  closeNav();
};

function openNav() {
  document.getElementById("sidemenu").style.width = "40%";
}

function closeNav() {
  document.getElementById("sidemenu").style.width = "0";
}
