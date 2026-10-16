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
["Gaming","Mindmaze shipped with which Microsoft multimedia encyclopedia?",["Encarta","Bookshelf","Cinemania","Works"],0],
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
var N=6,DIRS={N:[0,-1],S:[0,1],E:[1,0],W:[-1,0]},OPP={N:"S",S:"N",E:"W",W:"E"};
var PAL=[["#2b2236","#3d3150","#1a1424"],["#1f2e2a","#2f4640","#121c19"],["#33241c","#4a3528","#1d1410"],["#22283a","#333c56","#141824"],["#2e1f2b","#46303f","#1b1219"],["#2a2a22","#3f3f33","#18180f"]];
var S,rng;
function mulberry(a){return function(){a|=0;a=a+0x6D2B79F5|0;var t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};}
function pick(a){return a[Math.floor(Math.random()*a.length)];}
function shuffle(a,r){r=r||Math.random;for(var i=a.length-1;i>0;i--){var j=Math.floor(r()*(i+1)),t=a[i];a[i]=a[j];a[j]=t;}return a;}
function key(x,y){return x+","+y;}
function genMaze(){
 var cells={},x,y;for(y=0;y<N;y++)for(x=0;x<N;x++)cells[key(x,y)]={x:x,y:y,d:{},pal:Math.floor(rng()*PAL.length)};
 var sx=Math.floor(rng()*N),sy=N-1,stack=[[sx,sy]],seen={};seen[key(sx,sy)]=1;
 while(stack.length){var c=stack[stack.length-1],opts=shuffle(Object.keys(DIRS),rng).filter(function(d){var nx=c[0]+DIRS[d][0],ny=c[1]+DIRS[d][1];return nx>=0&&ny>=0&&nx<N&&ny<N&&!seen[key(nx,ny)];});
  if(!opts.length){stack.pop();continue;}var d=opts[0],nx=c[0]+DIRS[d][0],ny=c[1]+DIRS[d][1];
  cells[key(c[0],c[1])].d[d]=1;cells[key(nx,ny)].d[OPP[d]]=1;seen[key(nx,ny)]=1;stack.push([nx,ny]);}
 for(var i=0;i<5;i++){x=Math.floor(rng()*(N-1));y=Math.floor(rng()*N);cells[key(x,y)].d.E=1;cells[key(x+1,y)].d.W=1;} // a few loops
 var dist={},q=[[sx,sy]];dist[key(sx,sy)]=0;var far=key(sx,sy);
 while(q.length){var p=q.shift(),k=key(p[0],p[1]);if(dist[k]>dist[far])far=k;for(var dd in cells[k].d){var ax=p[0]+DIRS[dd][0],ay=p[1]+DIRS[dd][1],ak=key(ax,ay);if(!(ak in dist)){dist[ak]=dist[k]+1;q.push([ax,ay]);}}}
 return {cells:cells,start:key(sx,sy),exit:far,len:dist[far]};
}
function newGame(){
 var seed=(Date.now()^Math.floor(Math.random()*1e9))>>>0;rng=mulberry(seed);
 var m=genMaze();
 S={m:m,cur:m.start,lives:5,score:0,steps:0,visited:{},solved:{},deck:shuffle(Q.map(function(_,i){return i;})),qi:0,q:null,over:false,seed:seed};
 S.visited[m.start]=1;enter(true);
 overlay("Enter the Labyrinth","The Archivist has locked his secrets deep in the castle. Answer each chamber's riddle to unlock its doors, then click a door in the scene to pass through. Find the green exit on the map. You have five lives.",["Begin",function(){hideOverlay();}]);
}
function nextQ(){if(S.qi>=S.deck.length){S.deck=shuffle(S.deck);S.qi=0;}var raw=Q[S.deck[S.qi++]];var o=raw[2].map(function(t,i){return{t:t,c:i===raw[3]};});return{cat:raw[0],text:raw[1],opts:shuffle(o)};}
function enter(first){
 var c=S.m.cells[S.cur];
 if(S.cur===S.m.exit){render();return win();}
 if(S.solved[S.cur]){S.q=null;say(pick(JEST.open));}else{S.q=nextQ();say(first?"Welcome, wanderer. The jester will be your… guide.":pick(JEST.enter));}
 render();
}
function say(t){document.getElementById("jester").textContent="🃏 "+t;}
function answer(i,btn){
 if(S.over||!S.q)return;var o=S.q.opts[i];
 if(o.c){S.solved[S.cur]=1;S.score+=100;say(pick(JEST.good));btn.classList.add("good");setTimeout(render,500);}
 else{S.lives--;S.score=Math.max(0,S.score-25);btn.classList.add("bad");say(pick(JEST.bad));
  if(S.lives<=0){render();return lose();}setTimeout(function(){S.q=nextQ();render();},700);}
 hud();
}
function move(d){
 if(S.over||!S.solved[S.cur])return;var c=S.m.cells[S.cur];if(!c.d[d])return;
 S.cur=key(c.x+DIRS[d][0],c.y+DIRS[d][1]);S.steps++;if(!S.visited[S.cur]){S.visited[S.cur]=1;S.score+=10;}enter(false);
}
function hud(){
 document.getElementById("hud-lives").textContent="Lives: "+"♥".repeat(Math.max(0,S.lives))+"♡".repeat(5-Math.max(0,S.lives));
 document.getElementById("hud-score").textContent="Score: "+S.score;
 document.getElementById("hud-steps").textContent="Steps: "+S.steps;
 document.getElementById("hud-room").textContent="Rooms found: "+Object.keys(S.visited).length+"/"+N*N;
}
var NS="http://www.w3.org/2000/svg";
function el(tag,attrs,parent){var e=document.createElementNS(NS,tag);for(var k in attrs)e.setAttribute(k,attrs[k]);if(parent)parent.appendChild(e);return e;}
function drawScene(){
 var svg=document.getElementById("scene");svg.innerHTML="";var c=S.m.cells[S.cur],p=PAL[c.pal],open=!!S.solved[S.cur],isExit=S.cur===S.m.exit;
 var defs=el("defs",{},svg);var g=el("radialGradient",{id:"glow",cx:"50%",cy:"40%",r:"70%"},defs);el("stop",{offset:"0%","stop-color":"#ffcf7a","stop-opacity":".25"},g);el("stop",{offset:"100%","stop-color":"#000","stop-opacity":"0"},g);
 var pat=el("pattern",{id:"brick",width:"40",height:"20",patternUnits:"userSpaceOnUse"},defs);el("rect",{width:40,height:20,fill:p[1]},pat);el("path",{d:"M0 0H40M0 10H40M20 0V10M0 10V20M40 10V20",stroke:p[2],"stroke-width":"1.2",fill:"none"},pat);
 // back wall, side walls, floor, ceiling
 el("rect",{x:0,y:0,width:400,height:260,fill:p[2]},svg);
 el("polygon",{points:"0,0 400,0 320,50 80,50",fill:p[0]},svg);
 el("polygon",{points:"0,260 400,260 320,200 80,200",fill:p[0],opacity:".9"},svg);
 el("polygon",{points:"0,0 80,50 80,200 0,260",fill:"url(#brick)",opacity:".75"},svg);
 el("polygon",{points:"400,0 320,50 320,200 400,260",fill:"url(#brick)",opacity:".75"},svg);
 el("rect",{x:80,y:50,width:240,height:150,fill:"url(#brick)"},svg);
 el("rect",{x:0,y:0,width:400,height:260,fill:"url(#glow)"},svg);
 // torches
 [[110,95],[290,95]].forEach(function(t){el("rect",{x:t[0]-3,y:t[1],width:6,height:18,fill:"#5a3a1a"},svg);var f=el("ellipse",{cx:t[0],cy:t[1]-6,rx:6,ry:10,fill:"#ffb347"},svg);el("animate",{attributeName:"ry",values:"10;7;11;9;10",dur:"1.2s",repeatCount:"indefinite"},f);el("ellipse",{cx:t[0],cy:t[1]-4,rx:3,ry:5,fill:"#fff2a8"},svg);});
 var doors={N:"M170,200 V115 A30,30 0 0 1 230,115 V200 Z",W:"M18,232 V95 L58,68 V202 Z",E:"M382,232 V95 L342,68 V202 Z",S:"M150,252 L250,252 L235,222 L165,222 Z"};
 var labels={N:"North",S:"South",E:"East",W:"West"};
 Object.keys(doors).forEach(function(d){if(!c.d[d])return;
  var a=el("g",{"class":"door "+(open?"open":"locked"),tabindex:open?"0":"-1",role:"button","aria-label":labels[d]+" door"+(open?"":" (locked)")},svg);
  el("path",{d:doors[d],fill:open?"#120c06":"#4a2e16",stroke:"#d4af37","stroke-width":"2"},a);
  if(!open){el("path",{d:doors[d],fill:"none",stroke:"#2a1a0a","stroke-width":"1","stroke-dasharray":"2 6"},a);var bb={N:[200,160],W:[38,150],E:[362,150],S:[200,238]}[d];el("circle",{cx:bb[0],cy:bb[1],r:5,fill:"#d4af37"},a);}
  else{var tp={N:[200,165],W:[38,155],E:[362,155],S:[200,242]}[d];var tx=el("text",{x:tp[0],y:tp[1],fill:"#d4af37","font-size":"12","text-anchor":"middle","font-family":"Georgia,serif"},a);tx.textContent=d;}
  var tt=el("title",{},a);tt.textContent=labels[d]+(open?"":" — answer the riddle to unlock");
  a.addEventListener("click",function(){if(!open)say("Locked! Answer the riddle first.");else move(d);});
  a.addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();move(d);}});
 });
 if(isExit){var t=el("text",{x:200,y:140,fill:"#3fbf7f","font-size":"22","text-anchor":"middle","font-family":"Georgia,serif"},svg);t.textContent="✦ The Archive ✦";}
}
function drawQuiz(){
 var box=document.getElementById("quiz");box.innerHTML="";
 if(!S.q){box.innerHTML='<div class="q">The doors stand open. Click one in the scene above.</div>';return;}
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
  if(v)for(var d in c.d){var x1=c.x*sz+10,y1=c.y*sz+10;el("line",{x1:x1+DIRS[d][0]*7,y1:y1+DIRS[d][1]*7,x2:x1+DIRS[d][0]*10,y2:y1+DIRS[d][1]*10,stroke:"#8a7aaa","stroke-width":"2"},svg);}
 }
}
function render(){hud();drawScene();drawQuiz();drawMap();}
function overlay(title,text,btn){var o=document.getElementById("overlay");o.innerHTML="";var h=document.createElement("h2");h.textContent=title;var p=document.createElement("p");p.textContent=text;var b=document.createElement("button");b.className="mm-btn cta";b.textContent=btn[0];b.onclick=btn[1];o.appendChild(h);o.appendChild(p);o.appendChild(b);o.classList.remove("hidden");}
function hideOverlay(){document.getElementById("overlay").classList.add("hidden");}
function win(){S.over=true;S.score+=S.lives*50;hud();say("Curses! You found the Archive. The jester will remember this.");document.getElementById("quiz").innerHTML="";
 overlay("You reached the Archive!","Score "+S.score+" · "+S.steps+" steps (shortest path: "+S.m.len+") · "+S.lives+" lives left. The Archivist grants you a single footnote of forbidden knowledge.",["Play again",newGame]);}
function lose(){S.over=true;say("Ha! Another soul for the stacks.");document.getElementById("quiz").innerHTML="";
 overlay("Lost in the Labyrinth","Your lives are spent. Score "+S.score+" after "+S.steps+" steps. The jester files you under 'Miscellaneous'.",["Try again",newGame]);}
newGame();
})();
