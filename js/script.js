function showPage(page){
  var element = document.getElementsByClassName("active");
  element.item(0).classList.remove("active");
  var element = document.getElementById(page);
  element.classList.add("active");

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
};
