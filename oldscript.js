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

// const lvl1 = {
//   "seq": "Sequestrador",
//   "aju": "Ajudante",
//   "ass": "Assassino",
//   "esp": "Espião",
//   "pob": "Pobre",
//   "gua": "Guardião",
//   "neg": "Negociante",
//   "met": "Metamorfo",
//   "ric": "Rica",
//   "vid": "Vidente",
//   "anj": "Anjo",
//   "ama": "Amante",
//   "dc": "Duas Caras",
//   "Sort": "Sortudo",
//   "arb": "Árbitro",
//   "inc": "Incendiária",
//   "jui": "Juiz",
//   "emp": "Empreendedor"
// };

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

// const lvl2 = {
//   "fis": "Fiscal",
//   "ati": "Atirador",
//   "ass": "Assassino",
//   "esp": "Espião",
//   "ora": "Oráculo",
//   "pol": "Político",
//   "gua": "Guardião",
//   "traf": "Traficante",
//   "usu": "Usurpadora",
//   "fof": "Fofoqueira",
//   "lad": "Ladrão",
//   "sac": "Sacrifício",
//   "reb": "Reflexo",
//   "gc": "Guarda Costas",
//   "sorr": "Sorrateira",
//   "cam": "Cambista",
//   "dit": "Ditador",
//   // "advo": "Advogado",
//   "met": "Metamorfo",
//   "seg": "Segurança"
// };

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
  "arradv": "Arruaceiro",
  "oraadv": "Oráculo",
  "det": "Detetive",
  "inf": "Infiltrado",
  "as": "Agente Secreto",
  "poladv": "Político",
  "caradv": "Cartomante",
  "trafadv": "Traficante",
  "usuadv": "Usurpadora",
  "vidad": "Vidente",
  "sorradv": "Sorrateira",
  "traiadv": "Traidora"
};

// const lvlexp = {
//   "mal": "Malandra",
//   "val": "Valentão",
//   "beb": "Bêbado",
//   "maf": "Mafioso",
//   "ami": "Amigo",
//   "que": "Quenga",
//   "men": "Mentiroso",
//   "str": "Stripper",
//   "apr": "Aproveitador",
//   "pro": "Procurado"
// };

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
    case 'lvlexp':
      return lvlexp;
      break;
    case 'lvlcons':
      return lvlcons;
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
  document.getElementById('edgecases').src = 'cards/' +  document.getElementById('cartaselect').value + '.html';
};

function displayHighligths(){
  document.getElementById('edgecases').src = 'highlight.html';
};

function displayOptional(){
  document.getElementById('edgecases').src = 'opcional.html';
};
