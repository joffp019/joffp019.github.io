$('.textinput').focus();


var fonts = new Array("helvetica", "courier", "timesnewroman", "robotoslab", "merriweather", "abrilfatface", "rocksalt");

var letter_a = new Array("a","able","about","above","across","act","action","actually","add","addition","adjective","afraid","Africa","after","again","against","age","ago","agreed","ahead","air","all","allow","almost","alone","along","already","also","although","always","am","America","among","amount","an","and","angle","animal","another","answer","any","anything","appear","apple","are","area","arms","army","around","arrived","art","as","ask","at","away");
var letter_b = new Array("baby","back","bad","ball","bank","base","be","bear","beat","beautiful","became","because","become","bed","been","before","began","begin","behind","being","believe","bell","belong","below","beside","best","better","between","big","bill","birds","bit","black","block","blood","blow","blue","board","boat","body","bones","book","born","both","bottom","bought","box","boy","branches","break","bright","bring","British","broken","brother","brought","brown","build","building","built","burning","business","but","buy","by");
var letter_c = new Array("called","came","can","cannot","can't","capital","captain","car","care","carefully","carry","case","cat","catch","cattle","caught","cause","cells","center","cents","century","certain","chance","change","chart","check","chief","child","children","choose","church","circle","city","class","clean","clear","climbed","close","clothes","cloud","coast","cold","color","column","come","common","company","compare","complete","compound","conditions","consider","consonant","contain","continued","control","cook","cool","copy","corn","corner","correct","cost","cotton","could","couldn't","count","country","course","covered","cows","create","cried","crops","cross","crowd","current","cut");
var letter_d = new Array("dance", "dark", "day", "dead", "deal", "death", "decided", "decimal", "deep", "describe", "desert", "design", "details", "determine", "developed", "dictionary", "did", "didn't", "died", "difference", "differen","difficult","direct","direction","discovered","distance","divided","division","do","doctor","does","doesn't","dog","dollars","done","don't","door","down","draw","drawing","dress","drive","drop","dry","during");
var letter_e = new Array("each","early","ears","earth","east","easy","eat","edge","effect","eggs","eight","either","electric","elements","else","end","energy","engine","England","English","enjoy","enough","entered","entire","equal","equation","especially","Europe","even","evening","ever","every","everyone","everything","exactly","example","except","exciting","exercise","expect","experience","experiment","explain","express","eyes");
var letter_f = new Array("face","fact","factories","factors","fair","fall","family","famous","far","farm","farmers","fast","father","fear","feel","feeling","feet","fell","felt","few","field","fig","fight","figure","filled","finally","find","fine","fingers","finished","fire","first","fish","fit","five","flat","floor","flow","flowers","fly","follow","food","foot","for","force","forest","form","forward","found","four","fraction","France","free","French","fresh","friends","from","front","fruit","full","fun");
var letter_g = new Array("game","garden","gas","gave","general","get","girl","give","glass","go","God","gold","gone","good","got","government","grass","great","Greek","green","grew","ground","group","grow","guess","gun");
var letter_h = new Array("had","hair","half","hand","happened","happy","hard","has","hat","have","he","head","hear","heard","heart","heat","heavy","held","help","her","here","high","hill","him","himself","his","history","hit","hoe","hold","hole","home","hope","horse","hot","hours","house","how","however","huge","human","hundred","hunting");
var letter_i = new Array("I","ice","idea","if","I'll","important","in","inches","include","increase","Indian","indicate","industry","information","insects","inside","instead","instruments","interest","interesting","into","iron","is","island","isn't","it","it's","itself");
var letter_j = new Array("Japanese","job","joined","jumped","just");
var letter_k = new Array("keep","kept","key","killed","kind","king","knew","know","known");
var letter_l = new Array("lady","lake","land","language","large","last","late","laughed","law","lay","lead","learn","least","leave","led","left","legs","length","less","let","let's","letter","level","lie","life","lifted","light","like","line","list","listen","little","live","located","long","look","lost","lot","loud","love","low");
var letter_m = new Array("machine","made","main","major","make","mall","man","many","map","march","mark","match","material","matter","may","maybe","me","means","measure","meat","meet","melody","members","men","metal","method","middle","might","mile","milk","million","mind","mine","minutes","miss","modern","molecules","moment","money","months","moon","more","morning","most","mother","mountains","mouth","move","movement","much","music","must","my");
var letter_n = new Array("name","nation","natural","near","necessary","need","never","new","next","night","no","north","northern","nose","not","note","nothing","notice","noun","now","number","numeral");
var letter_o = new Array("object","observe","ocean","of","off","office","often","oh","oil","old","on","once","one","only","open","opposite","or","order","other","our","out","outside","over","own","oxygen");
var letter_p = new Array("page","paint","pair","paper","paragraph","park","part","particular","party","passed","past","pattern","pay","people","per","perhaps","period","person","phrase","picked","picture","piece","place","plains","plan","plane","planets","plant","play","please","plural","poem","point","pole","poor","position","possible","pounds","power","practice","prepared","present","president","pretty","printed","probably","problem","process","produce","products","property","provide","pulled","pushed","put");
var letter_q = new Array("questions","quickly","quiet","quite");
var letter_r = new Array("race","radio","rain","raised","ran","rather","reached","read","ready","real","reason","received","record","red","region","remain","remember","repeated","report","represent","rest","result","return","rhythm","rich","ride","right","ring","rise","river","road","rock","rolled","room","root","rope","rose","round","row","rule","run");
var letter_s = new Array("safe","said","sail","same","sand","sat","save","saw","say","scale","school","science","scientists","score","sea","seat","second","section","see","seeds","seem","seen","sell","send","sense","sent","sentence","separate","serve","set","settled","seven","several","shall","shape","sharp","she","ship","shoes","shop","short","should","shoulder","shouted","show","shown","side","sight","sign","silent","similar","simple","since","sing","single","sir","sister","sit","site","six","size","skin","sky","sleep","slowly","small","smell","smiled","snow","so","soft","soil","soldiers","solution","solve","some","someone","something","sometimes","son","song","soon","sound","south","southern","space","speak","special","speed","spell","spot","spread","spring","square","stand","stars","start","state","statement","stay","steel","step","stick","still","stone","stood","stop","store","story","straight","strange","stream","street","stretched","string","strong","students","study","subject","substances","such","suddenly","suffix","sugar","suggested","sum","summer","sun","supply","suppose","sure","surface","surprise","swim","syllables","symbols","system");
var letter_t = new Array("table","take","talk","tall","teacher","team","tell","temperature","ten","terms","test","than","that","the","their","them","themselves","then","there","these","they","thick","thin","things","think","third","this","those","though","thought","thousands","three","through","thus","tied","time","tiny","to","today","together","told","tone","too","took","tools","top","total","touch","toward","town","track","trade","train","travel","tree","triangle","trip","trouble","truck","true","try","tube","turn","two","type");
var letter_u = new Array("uncle","under","underline","understand","unit","until","up","upon","us","use","usually");
var letter_v = new Array("valley","value","various","verb","very","view","village","visit","voice","vowel");
var letter_w = new Array("wait","walk","wall","want","war","warm","was","wash","Washington","wasn't","watch","water","waves","way","we","wear","weather","week","weight","we'll","well","went","were","west","western","what","wheels","when","where","whether","which","while","white","who","whole","whose","why","wide","wife","wild","will","win","wind","window","wings","winter","wire","wish","with","within","without","woman","women","wonder","won't","wood","words","work","workers","world","would","wouldn't","write","written","wrong","wrote");
var letter_x = new Array("?", "!", ";", "-", "*", ",");
var letter_y = new Array("yard","years","yellow","yes","yet","you","young","your","you're","yourself");
var letter_z = new Array("'TO MAKE A DADAIST POEM'", "'Take a newspaper.'", "'Take some scissors.'", "'Choose from this paper an article of the length you want to make your poem.'", "'Cut out the article.'", "'Next carefully cut out each of the words that makes up this article and put them all in a bag.'", "'Shake gently.'", "'Next take out each cutting one after the other.'", "'Copy conscientiously in the order in which they left the bag.'", "'Them poem will resemble you.'", "'And there you are – an infinitely original author of charming sensibility, even though unappreciated by the vulgar herd.'");

var $cont = $('.read');
$cont[0].scrollTop = $cont[0].scrollHeight;

var current_font = 'times new roman';

$("textarea").keypress(function(event){
    console.log(event);
    var typing = new Audio('type.wav');
    var typingz = new Audio('typez.wav');
    typing.pause(); 
    typing.currentTime = 0;
    typing.play();
    
    if(event.keyCode == 97 || event.keyCode == 65) {
        $(".read").append("<p class='" + current_font + "'>" + letter_a[Math.floor(Math.random()*letter_a.length)] + " " + "</p>");
        }
    if(event.keyCode == 98 || event.keyCode == 66) {
        $(".read").append("<p class='" + current_font + "'>" + letter_b[Math.floor(Math.random()*letter_b.length)] + " " + "</p>");
        }
    if(event.keyCode == 99 || event.keyCode == 67) {
        $(".read").append("<p class='" + current_font + "'>" + letter_c[Math.floor(Math.random()*letter_c.length)] + " " + "</p>");
        }    
    if(event.keyCode == 100 || event.keyCode == 68) {
        $(".read").append("<p class='" + current_font + "'>" + letter_d[Math.floor(Math.random()*letter_d.length)] + " " + "</p>");
        }
    if(event.keyCode == 101 || event.keyCode == 69) {
        $(".read").append("<p class='" + current_font + "'>" + letter_e[Math.floor(Math.random()*letter_e.length)] + " " + "</p>");
        }
    if(event.keyCode == 102 || event.keyCode == 70) {
        $(".read").append("<p class='" + current_font + "'>" + letter_f[Math.floor(Math.random()*letter_f.length)] + " " + "</p>");
        }   
    if(event.keyCode == 103 || event.keyCode == 71) {
        $(".read").append("<p class='" + current_font + "'>" + letter_g[Math.floor(Math.random()*letter_g.length)] + " " + "</p>");
        }
    if(event.keyCode == 104 || event.keyCode == 72) {
        $(".read").append("<p class='" + current_font + "'>" + letter_h[Math.floor(Math.random()*letter_h.length)] + " " + "</p>");
        }    
    if(event.keyCode == 105 || event.keyCode == 73) {
        $(".read").append("<p class='" + current_font + "'>" + letter_i[Math.floor(Math.random()*letter_i.length)] + " " + "</p>");
        }    
    if(event.keyCode == 106 || event.keyCode == 74) {
        $(".read").append("<p class='" + current_font + "'>" + letter_j[Math.floor(Math.random()*letter_j.length)] + " " + "</p>");
        } 
    if(event.keyCode == 107 || event.keyCode == 75) {
        $(".read").append("<p class='" + current_font + "'>" + letter_k[Math.floor(Math.random()*letter_k.length)] + " " + "</p>");
        }     
    if(event.keyCode == 108 || event.keyCode == 76) {
        $(".read").append("<p class='" + current_font + "'>" + letter_l[Math.floor(Math.random()*letter_l.length)] + " " + "</p>");
        }  
    if(event.keyCode == 109 || event.keyCode == 77) {
        $(".read").append("<p class='" + current_font + "'>" + letter_m[Math.floor(Math.random()*letter_m.length)] + " " + "</p>");
        }
    if(event.keyCode == 110 || event.keyCode == 78) {
        $(".read").append("<p class='" + current_font + "'>" + letter_n[Math.floor(Math.random()*letter_n.length)] + " " + "</p>");
        } 
    if(event.keyCode == 111 || event.keyCode == 79) {
        $(".read").append("<p class='" + current_font + "'>" + letter_o[Math.floor(Math.random()*letter_o.length)] + " " + "</p>");
        } 
    if(event.keyCode == 112 || event.keyCode == 80) {
        $(".read").append("<p class='" + current_font + "'>" + letter_p[Math.floor(Math.random()*letter_p.length)] + " " + "</p>");
        } 
    if(event.keyCode == 113 || event.keyCode == 81) {
        $(".read").append("<p class='" + current_font + "'>" + letter_q[Math.floor(Math.random()*letter_q.length)] + " " + "</p>");
        }     
    if(event.keyCode == 114 || event.keyCode == 82) {
        $(".read").append("<p class='" + current_font + "'>" + letter_r[Math.floor(Math.random()*letter_r.length)] + " " + "</p>");
        } 
    if(event.keyCode == 115 || event.keyCode == 83) {
        $(".read").append("<p class='" + current_font + "'>" + letter_s[Math.floor(Math.random()*letter_s.length)] + " " + "</p>");
        } 
    if(event.keyCode == 116 || event.keyCode == 84) {
        $(".read").append("<p class='" + current_font + "'>" + letter_t[Math.floor(Math.random()*letter_t.length)] + " " + "</p>");
        } 
    if(event.keyCode == 117 || event.keyCode == 85) {
        $(".read").append("<p class='" + current_font + "'>" + letter_u[Math.floor(Math.random()*letter_u.length)] + " " + "</p>");
        } 
    if(event.keyCode == 118 || event.keyCode == 86) {
        $(".read").append("<p class='" + current_font + "'>" + letter_v[Math.floor(Math.random()*letter_v.length)] + " " + "</p>");
        }   
    if(event.keyCode == 119 || event.keyCode == 87) {
        $(".read").append("<p class='" + current_font + "'>" + letter_w[Math.floor(Math.random()*letter_w.length)] + " " + "</p>");
        }
    if(event.keyCode == 120 || event.keyCode == 88) {
        $(".read").append("<p class='" + current_font + "'>" + letter_x[Math.floor(Math.random()*letter_x.length)] + " " + "</p>");
        }
    if(event.keyCode == 121 || event.keyCode == 89) {
        $(".read").append("<p class='" + current_font + "'>" + letter_y[Math.floor(Math.random()*letter_y.length)] + " " + "</p>");
        }
    if(event.keyCode == 122 || event.keyCode == 90) {
        $(".read").append("<p class='" + current_font + "'>" + letter_z[Math.floor(Math.random()*letter_z.length)] + " " + "</p>");
        }    
    if(event.keyCode == 46) {
        $(".read").append(". ");
        typing.pause();
        typingz.pause(); 
        typing.currentTime = 0;
        typing.play();
        }    
    if(event.keyCode == 13) {
        $(".read").append("</br>");
        typing.pause();
        typingz.pause(); 
        typingz.currentTime = 0;
        typingz.play();
        
        var random_number = Math.floor(Math.random() * fonts.length);
        current_font = fonts[random_number];
        }  
        
    $(".read").animate({ scrollTop: $(document).height() });
    
});

$("textarea").keydown(function(){
    if(event.keyCode == 20 || event.keyCode == 16) {
        var typing = new Audio('type.wav');
    var typingz = new Audio('typez.wav');
    $(".read").append("</br>");
        typing.pause();
        typingz.pause(); 
        typing.currentTime = 0;
        typing.play();    
    }
    
});


// Space button

$("textarea").keypress(function(event){
    console.log(event);
    if(event.keyCode == 32) {
        var random_number = Math.floor(Math.random() * fonts.length);
        current_font = fonts[random_number];
        }
    }
); 

// Clear

$(".clear").click(function(event) {
    console.log(event); 
    $(".read").empty();
});
    
    
    