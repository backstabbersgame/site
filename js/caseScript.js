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
  "as": "Agente Secreto",
  "ajuadv": "Ajudante",
  "arradv": "Arruaceiro",
  "caradv": "Cartomante",
  "deladv": "Delator",
  "det": "Detetive",
  "geradv": "Gerente",
  "incadv": "Incendiária",
  "inf": "Infiltrado",
  "oraadv": "Oráculo",
  "sorradv": "Sorrateira",
  "trafadv": "Traficante",
  "trapadv": "Trapaceira",
  "vidad": "Vidente"
};

const metas = {
  "apr": "Aproveitador",
  "comp": "Comparador",
  "del": "Delator",
  "dis": "Discriminadora",
  "env": "Envenenadora",
  "espc": "Especulador",
  "fal": "Falsificadora",
  "ger": "Gerente",
  "imp": "Impostor",
  "intm": "Intimidador",
  "int": "Intrometido",
  "mp": "Mau Presságio",
  "men": "Mentirosa",
  "nega": "Negacionista",
  "ped":"Pedinte",
  "pro" : "Procurado",
  "trap": "Trapaceira"
};

const lvlcons = {
  "adt":"Aditivo",
  "asc": "Ascendente",
  "esc": "Escassez",
  "desc": "Descendente",
  "far": "Fartura",
  "hal": "Halloween",
  "heg": "Hegemonia",
  "ipm": "Imposto por Morte",
  "lar": "Lei da Ação e Reação",
  "cao": "Lei do Cão",
  "caos": "Lei do Caos",
  "cas": "Lei dos Casais",
  "coi": "Lei da Coincidência",
  "com": "Lei do Comum Acordo",
  "dev": "Lei dos Deveres",
  "div": "Lei da Diversidade",
  "exa": "Lei da Exatidão",
  "ine": "Lei da Inércia",
  "lim": "Lei do Limite",
  "for": "Lei do Mais Forte",
  "fra": "Lei do Mais Fraco",
  "mes": "Lei do Mestre",
  "obt": "Lei do Obituário",
  "par": "Lei dos Pares",
  "prx": "Lei do Próximo",
  "rep": "Lei da Repetição",
  "rid": "Lei do Ridículo",
  "ret": "Lei do Retorno",
  "sup": "Lei da Surpresa",
  "tri": "Lei dos Tributos",
  "tro": "Lei da Troca",
  "part": "Partilha de Bens",
  "ple": "Plebiscito",
  "refo": "Reforços",
  "ra": "Reforma Agrária",
  "repr": "Reprise",
  "sob": "Soberano",
  "sub": "Subtrativo",
  "var": "Variação Cambial",
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
    case 'metas':
      return metas;
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
  document.getElementById('edgecases').src = 'cases/cards/' +  document.getElementById('cartaselect').value + '.html';
};

function displayHighligths(){
  document.getElementById('edgecases').src = 'cases/highlight.html';
};