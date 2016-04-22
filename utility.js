var image_dir = 'coxinhas';
var can_set = true;
var past_scroll = document.body.scrollTop;
var speeches = ['Pelo direito de não ter direitos', 'Herois contra a corrupção', 'Feminicídio sim, Fomenicídio não',
'PT pai do Aedes Aegypti', 'Nossa bandeira jamais será vermelha', 'Todo petista tem problema com o pai',
'País sem corrupção é país onde rico manda porque rico não precisa roubar', 'Intervenção militar temporária já',
'Por que não mataram todos em 1964?', 'Eleição NÃO Intervenção SIM', 'É impossível não ter ódio do PT',
'Quem criou a pobreza foi o PT', 'Não teve ditadura militar', 'A Dilma é filha da puta SIM', 'Em memória do Coronel Brilhante Ustra', 'Pelo meu pai que sofreu tanto na mão do PT',
'Pela República de Curitiba', '~Tchau querida~', 'Eu quero defender... toda aquela corrupção', 'Que deus tenha misericórdia dessa nação'];

var h = speeches.length;

document.body.innerHTML += "<style> body {background-color: yellow;} h1, h2, h3, a, p {font-family: 'Comic Sans MS';} </style>";

var image_set = function () {
  var imgs = document.getElementsByTagName("img");
  for(var i = 0; i < imgs.length; i++) {
    var img = imgs[i];
    var random = Math.floor(Math.random() * 15 + 1);
    // img.src = image_dir + "/image_" + random + ".jpg";
    img.src = "joffp019.github.io/" + image_dir + "/image_" + random + ".jpg";
  }
};

image_set();

var header_set = function () {
  var headers = document.querySelectorAll('h1, h2, h3, p'); // NodeList
  for(var i = 0; i < headers.length; i++) {
    var random_text = Math.floor(Math.random() * h);
    var new_header = speeches[random_text];
    var header = headers[i];
    header.innerHTML = new_header;
    header.style.color = 'green';
  }
};

header_set();

window.onscroll = function(e) {

  console.log(document.body.scrollTop - past_scroll);

  if(can_set){
    if(image_dir.indexOf('fascista') === -1) {
      image_dir = 'fascista';
      document.body.style.backgroundcolor = "black";
    } else {
      image_dir = 'coxinhas';
      document.body.style.backgroundcolor = "yellow";
    }
    image_set();
    can_set = false;

    // Set a timer that sets can_set back to true, after a certain amount of time.
    setTimeout(function() {
      can_set = true;
      console.warn('Can set is true!');
    }, 1 * 1000);

  }

  past_scroll = document.body.scrollTop;


};
