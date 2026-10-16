(function(){
"use strict";
var Q=[
["Markets","In which year did US President Nixon close the gold window, ending dollar convertibility to gold?",["1971","1965","1979","1983"],0],
["Markets","Paul Volcker became Chair of the Federal Reserve in which year?",["1979","1971","1987","1969"],0],
["Markets","'Black Monday', when the Dow fell about 22% in one day, happened in October of which year?",["1987","1929","1997","2008"],0],
["Markets","The 1944 conference that set up the post-war fixed exchange rate system was held at…",["Bretton Woods","Jackson Hole","Davos","Plaza Hotel"],0],
["Markets","The 1985 agreement to weaken the US dollar is named after which New York hotel?",["The Plaza","The Waldorf","The Ritz","The Carlyle"],0],
["Markets","Which country's sovereign debt default in August 1998 helped topple LTCM?",["Russia","Argentina","Mexico","Thailand"],0],
["Markets","Britain was forced out of the ERM on 16 September 1992, a day remembered as…",["Black Wednesday","Black Friday","Big Bang","Grey Tuesday"],0],
["Markets","Which investor famously profited from shorting the pound in 1992?",["George Soros","Warren Buffett","Ray Dalio","Carl Icahn"],0],
["Markets","The Asian Financial Crisis began in 1997 with a currency crisis in which country?",["Thailand","Japan","South Korea","Indonesia"],0],
["Markets","Tulip mania, the classic speculative bubble, peaked in which country around 1637?",["Dutch Republic","England","France","Venice"],0],
["Markets","John Law's Mississippi Company bubble burst in which country?",["France","England","Spain","Scotland"],0],
["Markets","A bond's price and its yield generally move…",["In opposite directions","Together","Independently","Only up"],0],
["Markets","The 'yield curve inverts' when…",["Short-term yields exceed long-term yields","Long yields exceed short yields","Stocks beat bonds","Inflation hits zero"],0],
["Markets","Who wrote 'The General Theory of Employment, Interest and Money' (1936)?",["John Maynard Keynes","Milton Friedman","Friedrich Hayek","Adam Smith"],0],
["Markets","Weimar Germany's hyperinflation peaked in which year?",["1923","1919","1931","1914"],0],
["Scotland","Adam Smith, author of 'The Wealth of Nations', was born in which Scottish town?",["Kirkcaldy","Perth","Stirling","Inverness"],0],
["Scotland","The ill-fated Darien scheme was Scotland's attempt to found a colony in modern…",["Panama","Nova Scotia","Jamaica","Brazil"],0],
["Scotland","The Battle of Bannockburn, won by Robert the Bruce, was fought in which year?",["1314","1296","1415","1746"],0],
["Scotland","The last pitched battle on British soil, Culloden, was fought in…",["1746","1715","1689","1603"],0],
["Scotland","In 1603 James VI of Scotland also became king of…",["England","France","Norway","Denmark"],0],
["Scotland","The Bank of Scotland was founded in which year?",["1695","1727","1810","1603"],0],
["Scotland","Which Scot is credited with patenting the telephone in 1876?",["Alexander Graham Bell","James Watt","John Logie Baird","Robert Burns"],0],
["Lovecraft","In Lovecraft, where does great Cthulhu lie dreaming?",["R'lyeh","Kadath","Innsmouth","Leng"],0],
["Lovecraft","The fictional Miskatonic University is located in which town?",["Arkham","Dunwich","Kingsport","Providence"],0],
["Lovecraft","Who wrote the forbidden Necronomicon in Lovecraft's mythos?",["Abdul Alhazred","Joseph Curwen","Wilbur Whateley","Randolph Carter"],0],
["Lovecraft","Lovecraft was born and lived most of his life in which city?",["Providence","Boston","Salem","New York"],0],
["Lovecraft","Which Outer God is called 'the Crawling Chaos'?",["Nyarlathotep","Azathoth","Yog-Sothoth","Dagon"],0],
["Lovecraft","Robert W. Chambers' 'The King in Yellow' features which lost city?",["Carcosa","Sarnath","Irem","Hyperborea"],0],
["Sci-Fi","In 'The Hitchhiker's Guide to the Galaxy', the Answer to the Ultimate Question is…",["42","7","1024","None"],0],
["Sci-Fi","Who wrote the 'Foundation' series, featuring psychohistory?",["Isaac Asimov","Arthur C. Clarke","Frank Herbert","Philip K. Dick"],0],
["Sci-Fi","In 'Dune', the precious spice is called…",["Melange","Ambrosia","Kyber","Unobtainium"],0],
["Sci-Fi","HAL 9000 is the computer in which film?",["2001: A Space Odyssey","Alien","Blade Runner","Solaris"],0],
["Sci-Fi","Scottish author Iain M. Banks wrote which space-opera series?",["The Culture","The Expanse","Hyperion","Revelation Space"],0],
["Sci-Fi","'Blade Runner' is based on a novel by…",["Philip K. Dick","William Gibson","Ray Bradbury","Ursula K. Le Guin"],0],
["Sci-Fi","William Gibson's 1984 novel that popularised 'cyberspace' is…",["Neuromancer","Snow Crash","Accelerando","Ubik"],0],
["Gaming","Which 1980 arcade game starred a yellow character eating dots in a maze?",["Pac-Man","Galaxian","Frogger","Q*bert"],0],
["Gaming","Which 1993 game by id Software popularised the first-person shooter?",["Doom","Quake","Wolfenstein 3D","Half-Life"],0],
["Gaming","'Myst' (1993) was created by which studio?",["Cyan","Sierra","LucasArts","Bullfrog"],0],
["Gaming","Grand Theft Auto was originally developed in which Scottish city?",["Dundee","Glasgow","Aberdeen","Edinburgh"],0],
["Gaming","Lemmings was developed by DMA Design, based in…",["Scotland","Wales","Ireland","Cornwall"],0],
["Gaming","In 'The Secret of Monkey Island', the hero is…",["Guybrush Threepwood","LeChuck","Roger Wilco","Manny Calavera"],0],
["General","What is the chemical symbol for gold?",["Au","Ag","Gd","Go"],0],
["General","Which planet has the most extreme axial tilt, appearing to roll on its side?",["Uranus","Neptune","Saturn","Mars"],0],
["General","How many sides does a heptagon have?",["7","6","8","9"],0],
["General","The Rosetta Stone helped decipher which writing system?",["Egyptian hieroglyphs","Linear B","Cuneiform","Mayan glyphs"],0],
["General","Which metal is liquid at standard room temperature?",["Mercury","Gallium","Lead","Tin"],0],
["General","What did the alchemists' 'philosopher's stone' supposedly turn base metals into?",["Gold","Silver","Diamond","Glass"],0]
];
var JEST={
 enter:["A new chamber. Mind the cobwebs — and the questions.","The Archivist kept this room for guests he disliked.","Something in the walls is counting your steps.","Riddle me this, wanderer…","Ah, fresh meat for the catalogue!"],
 good:["Correct! The doors creak open. How disappointing.","Right you are. The Archivist nods, grudgingly.","Bah! You know things. Go on, then.","The locks yield to wisdom. Pick a door."],
 bad:["Wrong! The torches flicker with laughter.","Tsk. A life slips away into the margins.","Incorrect. The jester does a little dance at your expense.","No, no, NO. Try another, if you dare."],
 open:["You've solved this one already. Choose your door.","Back again? The room remembers you."]
};
var ROOMS={
"great-hall":{host:"jester",L:[9,33,9,51],B:[46,54,9,24],R:[82,35,9,49]},
"library":{host:"maiden",L:[11,28,9,21],B:[48,49,9,28],R:[82,30,9,52]},
"alchemist":{host:"witch",L:[15,27,7,52],B:[43,31,12,41],R:[83,20,9,62]},
"dungeon":{host:"gargoyle",L:[10,38,9,47],B:[43,38,13,33],R:[82,40,8,45],F:[39,83,22,14],trap:1},
"chapel":{host:"monk",L:[11,25,9,58],B:[46,42,11,35],R:[81,26,9,57]},
"banquet":{host:"jester",L:[4,20,8,53],B:[43,48,16,12],R:[88,20,8,53]},
"throne":{host:"maiden",L:[5,25,12,43],B:[41,8,18,52],R:[76,25,10,43]},
"crypt":{host:"witch",L:[6,30,10,50],B:[45,38,12,30],R:[87,32,9,48]},
"observatory":{host:"astrologer",L:[10,37,8,48],B:[45,47,9,28],R:[82,37,8,48]},
"gallery":{host:"jester",L:[13,42,7,38],B:[45,45,10,30],R:[83,42,7,38]},
"armoury":{host:"armour",L:[6,30,8,43],B:[45,34,10,34],R:[82,32,8,40]},
"kitchen":{host:"witch",L:[4,15,10,63],B:[45,30,15,42],R:[86,24,9,55]},
"garden":{host:"maiden",L:[5,14,9,40],B:[46,15,9,38],R:[89,14,8,40]},
"clocktower":{host:"monk",L:[6,38,14,48],B:[41,42,18,42],R:[78,38,11,48]}};
var EXITROOM={host:"jester",B:[45,40,10,30]};
var RNAMES=Object.keys(ROOMS),DMAP={N:"B",W:"L",E:"R",S:"F"},DEFF=[40,82,20,13];
var HOSTS={
jester:{name:"The Jester",enter:["Hee hee! Another fool wanders in. Answer, or dangle with me!","Upside down, inside out — which way is the exit? I shan't tell!","Ooh, a fresh head for my collection of bells."],good:["Pah! Lucky guess. The doors are yours.","Correct?! Ugh. Off you go, clever-clogs."],bad:["WRONG! Ha! I'll ring a bell for every life you lose!","Oh dear, oh dear. Your skull would make a lovely rattle."],open:["Back so soon? I missed laughing at you."]},
maiden:{name:"The Pale Maiden",enter:["I have waited here so long… answer me, and I may let you pass.","My candle burns low. Will you answer before it dies?","They all forgot me. Do not forget this question."],good:["Yes… you remember. Go, before the dark notices.","Truly answered. The doors sigh open for you."],bad:["No… that is what the others said, before they vanished.","Wrong. Another year added to my waiting."],open:["You returned… no one ever returns."]},
witch:{name:"The Witch",enter:["Heh-heh-heh! Into the pot, or into the riddle? Choose!","Eye of newt, toe of frog, and one wee question for a lost little dog.","The bubbles whisper your name, dearie. Answer quick!"],good:["Cackle! Clever, clever. The cauldron spares you.","Right answer, wrong castle, ha! The doors are open."],bad:["Ooh, wrong! That'll cost you a life… and maybe a toe.","Heh! The cauldron thanks you for the ingredient."],open:["Still wandering, dearie? Doors are open. Mind the toads."]},
monk:{name:"The Hooded Monk",enter:["Silence. Here, knowledge is the only prayer.","The lantern reveals truth to those who answer truly.","Kneel, pilgrim, and be tested."],good:["It is written. The way is open.","Wisdom is its own absolution. Go."],bad:["Error is a penance. Pay it.","The candles gutter. A life is taken in tithe."],open:["Peace. You have already been judged here."]},
astrologer:{name:"The Astrologer",enter:["Mercury is in retrograde, and so, I fear, are you. Answer!","The stars foretold your arrival. They were unimpressed.","I have charted ten thousand heavens. Now chart this question."],good:["As the constellations predicted. Obviously. Proceed.","Correct! Saturn smiles, briefly. The doors align."],bad:["Wrong! The heavens wince. A life falls like a meteor.","Tsk. Your answer is as dim as a dying star."],open:["You orbit back to me. How predictable. Doors are open."]},
armour:{name:"The Empty Armour",enter:["We… are… many. We… are… empty. Answer… us…","Clank. Our helms are hollow. Our question is not.","We stood guard for centuries. Speak true, or join our ranks."],good:["Correct… we let… you pass…","The steel remembers that answer. Go."],bad:["Wrong… another suit… for the rack…","We… heard… a life… fall."],open:["We… remember… you. The doors… are open."]},
gargoyle:{name:"The Red Gargoyle",enter:["GRRR. Answer. Or I eat.","Stone wings. Stone teeth. Stone patience. ANSWER.","Many come down here. Few go up. Riddle time."],good:["Hmph. Right. Go. Before I change mind.","Correct. Trapdoor and doors open. Bah."],bad:["WRONG. Crunch. One life gone.","Hrrk. Bad answer. Tasty adventurer."],open:["You again. Doors open. Go away."]}};
var N=6,DIRS={N:[0,-1],S:[0,1],E:[1,0],W:[-1,0]},OPP={N:"S",S:"N",E:"W",W:"E"};
var PAL=[["#2b2236","#3d3150","#1a1424"],["#1f2e2a","#2f4640","#121c19"],["#33241c","#4a3528","#1d1410"],["#22283a","#333c56","#141824"],["#2e1f2b","#46303f","#1b1219"],["#2a2a22","#3f3f33","#18180f"]];
var S,rng;
function mulberry(a){return function(){a|=0;a=a+0x6D2B79F5|0;var t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};}
function pick(a){return a[Math.floor(Math.random()*a.length)];}
function shuffle(a,r){r=r||Math.random;for(var i=a.length-1;i>0;i--){var j=Math.floor(r()*(i+1)),t=a[i];a[i]=a[j];a[j]=t;}return a;}
function key(x,y){return x+","+y;}
// Every painted door is a real exit: back=N, left=W, right=E, floor trapdoor=S. The castle wraps around at its edges.
function exits(c){if(c.img==="archive-exit")return {};var R=ROOMS[c.img],o={};for(var d in DMAP)if(R[DMAP[d]])o[d]=1;return o;}
function nb(c,d){return key((c.x+DIRS[d][0]+N)%N,(c.y+DIRS[d][1]+N)%N);}
function genMaze(){
 var cells={},x,y;for(y=0;y<N;y++)for(x=0;x<N;x++)cells[key(x,y)]={x:x,y:y};
 var sx=Math.floor(rng()*N),sy=N-1,start=key(sx,sy);
 cells[start].img="great-hall";
 for(y=0;y<N;y++)for(x=0;x<N;x++){if(cells[key(x,y)].img)continue;var ban={"great-hall":1};[[-1,0],[0,-1],[1,0],[0,1]].forEach(function(o){var n=cells[key((x+o[0]+N)%N,(y+o[1]+N)%N)];if(n.img)ban[n.img]=1;});var pool=RNAMES.filter(function(n){return !ban[n];});cells[key(x,y)].img=pool[Math.floor(rng()*pool.length)];}
 var dist={},q=[start];dist[start]=0;var far=start;
 while(q.length){var k=q.shift();if(dist[k]>dist[far])far=k;var c=cells[k];for(var d in exits(c)){var ak=nb(c,d);if(!(ak in dist)){dist[ak]=dist[k]+1;q.push(ak);}}}
 cells[far].img="archive-exit";
 return {cells:cells,start:start,exit:far,len:dist[far]};
}
function newGame(){
 var seed=(Date.now()^Math.floor(Math.random()*1e9))>>>0;rng=mulberry(seed);
 var m=genMaze();
 S={m:m,cur:m.start,lives:5,score:0,steps:0,visited:{},solved:{},deck:shuffle(Q.map(function(_,i){return i;})),qi:0,q:null,over:false,seed:seed};
 S.visited[m.start]=1;S.intro=true;hideOverlay();renderIntro();
}
function nextQ(){if(S.qi>=S.deck.length){S.deck=shuffle(S.deck);S.qi=0;}var raw=Q[S.deck[S.qi++]];var o=raw[2].map(function(t,i){return{t:t,c:i===raw[3]};});return{cat:raw[0],text:raw[1],opts:shuffle(o)};}
function enter(first){
 var c=S.m.cells[S.cur];
 if(S.cur===S.m.exit){S.q=null;S.solved[S.cur]=1;say("WHAT?! You found the Archive! Touch the golden door, if you dare…");return render();}
 var H=host();if(S.solved[S.cur]){S.q=null;say(pick(H.open));}else{S.q=nextQ();say(pick(H.enter));}
 render();
}
function room(c){return c.img==="archive-exit"?EXITROOM:ROOMS[c.img];}
function host(){return HOSTS[room(S.m.cells[S.cur]).host];}
function say(t,who){var j=document.getElementById("jester");j.innerHTML="";var n=document.createElement("b");n.textContent=(who||(S&&S.m?host().name:"The Jester"))+":";j.appendChild(n);j.appendChild(document.createTextNode(" “"+t+"”"));}
function answer(i,btn){
 if(S.over||!S.q)return;var o=S.q.opts[i];
 if(o.c){S.solved[S.cur]=1;S.score+=100;say(pick(host().good));btn.classList.add("good");setTimeout(render,500);}
 else{S.lives--;S.score=Math.max(0,S.score-25);btn.classList.add("bad");say(pick(host().bad));
  if(S.lives<=0){render();return lose();}setTimeout(function(){S.q=nextQ();render();},700);}
 hud();
}
function move(d){
 if(S.over||!S.solved[S.cur])return;var c=S.m.cells[S.cur];if(!exits(c)[d])return;
 S.cur=nb(c,d);S.steps++;if(!S.visited[S.cur]){S.visited[S.cur]=1;S.score+=10;}enter(false);
}
function hud(){
 document.getElementById("hud-lives").textContent="Lives: "+"♥".repeat(Math.max(0,S.lives))+"♡".repeat(5-Math.max(0,S.lives));
 document.getElementById("hud-score").textContent="Score: "+S.score;
 document.getElementById("hud-steps").textContent="Steps: "+S.steps;
 document.getElementById("hud-room").textContent="Rooms found: "+Object.keys(S.visited).length+"/"+N*N;
}
var NS="http://www.w3.org/2000/svg";
function el(tag,attrs,parent){var e=document.createElementNS(NS,tag);for(var k in attrs)e.setAttribute(k,attrs[k]);if(parent)parent.appendChild(e);return e;}
var DEBUG=/[?&]debug=1/.test(location.search);
function archPath(x,y,w,h){var r=Math.min(w/2,h*0.45);return "M"+x+","+(y+h)+"V"+(y+r)+"A"+(w/2)+","+r+" 0 0 1 "+(x+w)+","+(y+r)+"V"+(y+h)+"Z";}
function drawScene(){
 var svg=document.getElementById("scene");svg.innerHTML="";var c=S.m.cells[S.cur],R=room(c),open=!!S.solved[S.cur],isExit=S.cur===S.m.exit;
 svg.setAttribute("viewBox","0 0 100 56.25");
 el("image",{href:"img/"+c.img+".jpg",x:0,y:0,width:100,height:56.25,preserveAspectRatio:"none"},svg);
 var labels={N:"Back",S:"Trapdoor",E:"Right",W:"Left"};
 var dirs=isExit?["N"]:Object.keys(exits(c));
 dirs.forEach(function(d){var b=R[DMAP[d]]||DEFF,k=0.5625;
  var x=b[0],y=b[1]*k,w=b[2],h=b[3]*k,floor=d==="S";
  var a=el("g",{"class":"door "+(open?"open":"locked")+(isExit?" golden":""),tabindex:"0",role:"button","data-dir":d,"aria-label":labels[d]+" door"+(open?"":" (locked)")},svg);
  el("path",{"class":"hit"+(DEBUG?" dbg":""),d:floor?("M"+x+","+y+"h"+w+"v"+h+"h"+(-w)+"Z"):archPath(x,y,w,h)},a);
  var tt=el("title",{},a);tt.textContent=labels[d]+(open?"":" — answer the riddle to unlock");
  function go(){if(isExit)return win();if(!open){say(pick(LOCKED));}else move(d);}
  a.addEventListener("click",go);
  a.addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();go();}});
 });
 S.pulse=false;
}
var LOCKED=["Sealed! Answer my riddle first.","Not so fast. The seal holds until you answer.","That door is spoken for. Answer, then try."];
function drawQuiz(){
 var box=document.getElementById("quiz");box.innerHTML="";
 if(!S.q){box.innerHTML=S.cur===S.m.exit?'<div class="q">The golden door awaits. Click it to claim the Archive.</div>':'<div class="q">The doors are unlocked. Click a door in the painting above.</div>';return;}
 var cat=document.createElement("div");cat.className="cat";cat.textContent=S.q.cat;box.appendChild(cat);
 var q=document.createElement("div");q.className="q";q.textContent=S.q.text;box.appendChild(q);
 var o=document.createElement("div");o.className="opts";box.appendChild(o);
 S.q.opts.forEach(function(op,i){var b=document.createElement("button");b.className="mm-btn";b.textContent=op.t;b.onclick=function(){answer(i,b);};o.appendChild(b);});
}
function drawMap(){
 var svg=document.getElementById("map");svg.innerHTML="";var sz=20;
 for(var k in S.m.cells){var c=S.m.cells[k],v=S.visited[k],ex=k===S.m.exit,cur=k===S.cur;
  if(!v&&!ex)continue;
  el("rect",{x:c.x*sz+3,y:c.y*sz+3,width:sz-6,height:sz-6,rx:2,fill:cur?"#ffd86b":ex?"#3fbf7f":"#5a4a7a"},svg);
  if(v)for(var d in exits(c)){var x1=c.x*sz+10,y1=c.y*sz+10;el("line",{x1:x1+DIRS[d][0]*7,y1:y1+DIRS[d][1]*7,x2:x1+DIRS[d][0]*10,y2:y1+DIRS[d][1]*10,stroke:"#8a7aaa","stroke-width":"2"},svg);}
 }
}
var GATE=[53.7,56,7.5,24.7];
function renderIntro(){
 hud();drawMap();var svg=document.getElementById("scene");svg.innerHTML="";svg.setAttribute("viewBox","0 0 100 56.25");
 el("image",{href:"img/castle-exterior.jpg",x:0,y:0,width:100,height:56.25,preserveAspectRatio:"none"},svg);
 var a=el("g",{"class":"door open gate",tabindex:"0",role:"button","aria-label":"Enter the castle gate"},svg);
 el("path",{"class":"hit"+(DEBUG?" dbg":""),d:archPath(GATE[0],GATE[1]*.5625,GATE[2],GATE[3]*.5625)},a);
 var tt=el("title",{},a);tt.textContent="Enter the castle";
 function go(){if(!S.intro)return;S.intro=false;enter(true);}
 a.addEventListener("click",go);a.addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();go();}});
 say("Knock knock, wanderer! Welcome to The Maze. Answer each chamber's riddle to unlock its painted doors, and find the hidden Archive. Five lives. Hee hee!","The Jester");
 var box=document.getElementById("quiz");box.innerHTML="";var q=document.createElement("div");q.className="q";q.textContent="Click the great gate in the painting to enter. Inside, every painted door is a way onward (back = north, left = west, right = east, dungeon trapdoor = south), and the castle folds back on itself at its edges.";box.appendChild(q);
 var b=document.createElement("button");b.className="mm-btn cta";b.textContent="Enter the castle";b.style.marginTop="10px";b.onclick=go;box.appendChild(b);
}
function render(){hud();drawScene();drawQuiz();drawMap();}
function overlay(title,text,btn){var o=document.getElementById("overlay");o.innerHTML="";var h=document.createElement("h2");h.textContent=title;var p=document.createElement("p");p.textContent=text;var b=document.createElement("button");b.className="mm-btn cta";b.textContent=btn[0];b.onclick=btn[1];o.appendChild(h);o.appendChild(p);o.appendChild(b);o.classList.remove("hidden");}
function hideOverlay(){document.getElementById("overlay").classList.add("hidden");}
function win(){S.over=true;S.score+=S.lives*50;hud();say("Curses! You found the Archive. The jester will remember this.");document.getElementById("quiz").innerHTML="";
 overlay("You reached the Archive!","Score "+S.score+" · "+S.steps+" steps (shortest path: "+S.m.len+") · "+S.lives+" lives left. The Archivist grants you a single footnote of forbidden knowledge.",["Play again",newGame]);}
function lose(){S.over=true;say("Ha! Another soul for the stacks.");document.getElementById("quiz").innerHTML="";
 overlay("Lost in The Maze","Your lives are spent. Score "+S.score+" after "+S.steps+" steps. The jester files you under 'Miscellaneous'.",["Try again",newGame]);}
window.__mm=function(){return S;};window.__mmRender=function(){render();};
newGame();
})();
