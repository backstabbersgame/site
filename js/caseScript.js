const lvl1 = {
  "seq": "Sequestrador",
  "aju": "Ajudante",
  "ass": "Assassino",
  "esp": "Espião",
  "pob": "Pobre",
  "gua": "Guardião",
  "neg": "Negociante",
  "met": "Metamorfo",
  "ric": "Rica",
  "vid": "Vidente",
  "anj": "Anjo",
  "ama": "Amante"
};

const lvl2 = {
  "dc": "Duas Caras",
  "sort": "Sortudo",
  "ati": "Atirador",
  "arb": "Árbitro",
  "inc": "Incendiária",
  "jui": "Juiz",
  "emp": "Empreendedor"
};

const lvl3 = {
  "fis": "Fiscal",
  "ora": "Oráculo",
  "pol": "Político",
  "traf": "Traficante",
  "usu": "Usurpadora",
  "fof": "Fofoqueira",
  "lad": "Ladrão",
  "sac": "Sacrifício"
};

const lvl4 = {
  "ref": "Reflexo",
  "gc": "Guarda Costas",
  "sorr": "Sorrateira",
  "cam": "Cambista",
  "dit": "Ditador",
  "seg": "Segurança"
};

const lvl5 = {
  "apa": "Apanhador",
  "arr": "Arruaceiro",
  "agi": "Agiota",
  "vir": "Vírus",
  "car": "Cartomante",
  "man": "Manipulador",
  "nec": "Necromante",
  "trai": "Traidora"
};

const lvladv = {
  "ajuadv": "Ajudante",
  "sortadv": "Sortudo",
  "fisadv": "Fiscal",
  "sorradv": "Sorrateira",
  "arradv": "Arruaceiro",
  "det": "Detetive",
  "inf": "Infiltrado",
  "as": "Agente Secreto",
  "oraadv": "Oráculo",
  "poladv": "Político",
  "trafadv": "Traficante",
  "caradv": "Cartomante",
  "usuadv": "Usurpadora",
  "vidad": "Vidente",
  "traiadv": "Traidora"
};

const lvltypes = {
  "des": "Descriminador",
  "del": "Delator",
  "com": "Comparador",
  "nega": "Negacionista",
  "espc": "Especulador",
  "apr": "Aproveitador"
};

const lvlcons = {
  "esc": "Escassez",
  "far": "Fartura",
  "heg": "Hegemonia",
  "lar": "Lei da Ação e Reação",
  "cao": "Lei do Caos",
  "com": "Lei do Comum Acordo",
  "dev": "Lei dos Deveres",
  "ine": "Lei da Inércia",
  "lim": "Lei do Limite",
  "for": "Lei do Mais Forte",
  "fra": "Lei do Mais Fraco",
  "mes": "Lei do Mestre",
  "obt": "Lei do Óbito",
  "pag": "Lei do Pagamento",
  "par": "Lei dos Pares",
  "prx": "Lei do Próximo",
  "rep": "Lei da Repetição",
  "ret": "Lei do Retorno",
  "tro": "Lei da Troca"
};
const pro = {
  "pro":"Procurado"
};

function getCardsByLevel(level){
  switch(level) {
    case 'lvl1':
      return lvl1;
      break;
    case 'lvl2':
      return lvl2;
      break;
    case 'lvl3':
      return lvl3;
      break;
    case 'lvl4':
      return lvl4;
      break;
    case 'lvl5':
      return lvl5;
      break;
    case 'lvladv':
      return lvladv;
      break;
    case 'lvltypes':
      return lvltypes;
      break;
    case 'lvlcons':
      return lvlcons;
      break;
    case 'pro':
      return pro;
      break;
    default:
      var ret = {0 : "Nível inválido"};
      return ret;
  }
};

function changeLevel(){
  let nivelselect = document.getElementById('nivelselect');
  if(nivelselect[0].value == 0){
    nivelselect.remove(0);
  }

  let cardSelect = document.getElementById('cartaselect');
  var len = cardSelect.length;
  for(var i = 0; i < len; i++){
    cardSelect.remove(0);
  }

  let level = getCardsByLevel(nivelselect.value);

  for(var key in level){
    let newOption = new Option(level[key], key);
    cardSelect.add(newOption);
  }
};

function displayEdgeCases(){
  document.getElementById('edgecases').src = 'cases/cards/' +  document.getElementById('cartaselect').value + '.html';
};

function displayHighligths(){
  document.getElementById('edgecases').src = 'cases/highlight.html';
};