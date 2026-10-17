(function(){
"use strict";
function validQ(arr){return (arr||[]).filter(function(q){return q&&q.a&&q.a.length===4;});}
var BANKS={1:validQ(window.CASTLE_Q),2:validQ(window.CASTLE_Q2),3:validQ(window.CASTLE_Q3)},MAXLEVEL=3,ROMAN=["","I","II","III","IV","V"];
var TOPIC_NAMES={history:"History",science:"Science & Nature",myth:"Myth & Folklore",literature:"Literature",geography:"Geography",art:"Art & Music",words:"Language & Words",medieval:"Medieval Life",astronomy:"Astronomy",games:"Games & Pop Culture",markets:"Markets & Money"};
var HOST_TOPICS={astrologer:["astronomy"],monk:["history","medieval"],witch:["myth","science"],maiden:["literature","art"],jester:["games","words"],gargoyle:["myth","medieval"],king:["history","markets"],spinner:["words","myth"],armour:["medieval","history"],bellringer:["art","medieval"],knight:["medieval","history"]};
var SEEN_MAX=150;
function seenKey(lv){return lv>1?"castle_seen_q"+lv:"castle_seen_q";}
function loadSeen(lv){try{var v=JSON.parse(localStorage.getItem(seenKey(lv))||"[]");return Array.isArray(v)?v:[];}catch(e){return [];}}
function saveSeen(lv,id){try{var v=loadSeen(lv).filter(function(x){return x!==id;});v.push(id);if(v.length>SEEN_MAX)v=v.slice(v.length-SEEN_MAX);localStorage.setItem(seenKey(lv),JSON.stringify(v));}catch(e){}}
function buildDeck(lv){var Q=BANKS[lv]||BANKS[1],recent={};loadSeen(lv).forEach(function(id,i){recent[id]=i+1;});
 var fresh=shuffle(Q.filter(function(q){return !recent[q.id];})),old=Q.filter(function(q){return recent[q.id];}).sort(function(x,y){return recent[x.id]-recent[y.id];});
 return fresh.concat(old);}

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
"dungeon":{host:"gargoyle",L:[10,38,9,47],B:[43,38,13,33],R:[82,40,8,45]},
"chapel":{host:"monk",L:[11,25,9,58],B:[46,42,11,35],R:[81,26,9,57]},
"banquet":{host:"jester",L:[4,20,8,53],B:[43,48,16,12],R:[88,20,8,53]},
"throne":{host:"maiden",L:[5,25,12,43],B:[41,8,18,52],R:[76,25,10,43]},
"crypt":{host:"witch",L:[6,30,10,50],B:[45,38,12,30],R:[87,32,9,48]},
"observatory":{host:"astrologer",L:[10,37,8,48],B:[45,47,9,28],R:[82,37,8,48]},
"gallery":{host:"jester",L:[13,42,7,38],B:[45,45,10,30],R:[83,42,7,38]},
"armoury":{host:"armour",L:[6,30,8,43],B:[45,34,10,34],R:[82,32,8,40]},
"kitchen":{host:"witch",L:[4,15,10,63],B:[45,30,15,42],R:[86,24,9,55]},
"garden":{host:"maiden",L:[5,14,9,40],B:[46,15,9,38],R:[89,14,8,40]},
"clocktower":{host:"monk",L:[6,38,14,48],B:[41,42,18,42],R:[78,38,11,48]},
"deadend-witch":{host:"witch"},
"music-C":{host:"maiden",B:[45,25,14,51]},
"maproom-L":{host:"monk",L:[6,15,14,68]},
"portrait-R":{host:"king",R:[80,12,9,74]},
"weaving-LR":{host:"spinner",L:[10,20,9,62],R:[87,21,9,61]},
"cellar-LC":{host:"jester",L:[18,20,8,59],B:[46,38,11,36]},
"scriptorium-CR":{host:"maiden",B:[45,26,10,38],R:[85,21,9,61]},
"deadend-jester":{host:"jester"},
"bell-C":{host:"bellringer",B:[45,40,13,44]},
"menagerie-L":{host:"witch",L:[5,14,11,70]},
"chess-R":{host:"maiden",R:[86,23,10,52]},
"mirrors-LR":{host:"jester",L:[4,30,12,47],R:[84,30,12,47]},
"apothecary-LC":{host:"witch",L:[15,12,9,64],B:[35,26,13,48]},
"trophy-CR":{host:"knight",B:[45,30,13,46],R:[87,30,8,49]}};
var EXITROOM={host:"jester",B:[45,40,10,30]};
var RNAMES=Object.keys(ROOMS),RK={L:"L",C:"B",R:"R"};
function doorKey(n){var R=ROOMS[n],s="";["L","C","R"].forEach(function(k){if(R[RK[k]])s+=k;});return s;}
var POOLS={};RNAMES.forEach(function(n){if(n==="great-hall")return;var k=doorKey(n);(POOLS[k]=POOLS[k]||[]).push(n);});
var LEFT={N:"W",W:"S",S:"E",E:"N"},RIGHT={N:"E",E:"S",S:"W",W:"N"};
var HOSTS={
jester:{name:"The Jester",enter:["Hee hee! Another fool wanders in. Answer, or dangle with me!","Upside down, inside out — which way is the exit? I shan't tell!","Ooh, a fresh head for my collection of bells."],good:["Pah! Lucky guess. The doors are yours.","Correct?! Ugh. Off you go, clever-clogs."],bad:["WRONG! Ha! I'll ring a bell for every life you lose!","Oh dear, oh dear. Your skull would make a lovely rattle."],open:["Back so soon? I missed laughing at you."]},
maiden:{name:"The Pale Maiden",enter:["I have waited here so long… answer me, and I may let you pass.","My candle burns low. Will you answer before it dies?","They all forgot me. Do not forget this question."],good:["Yes… you remember. Go, before the dark notices.","Truly answered. The doors sigh open for you."],bad:["No… that is what the others said, before they vanished.","Wrong. Another year added to my waiting."],open:["You returned… no one ever returns."]},
witch:{name:"The Witch",enter:["Heh-heh-heh! Into the pot, or into the riddle? Choose!","Eye of newt, toe of frog, and one wee question for a lost little dog.","The bubbles whisper your name, dearie. Answer quick!"],good:["Cackle! Clever, clever. The cauldron spares you.","Right answer, wrong castle, ha! The doors are open."],bad:["Ooh, wrong! That'll cost you a life… and maybe a toe.","Heh! The cauldron thanks you for the ingredient."],open:["Still wandering, dearie? Doors are open. Mind the toads."]},
monk:{name:"The Hooded Monk",enter:["Silence. Here, knowledge is the only prayer.","The lantern reveals truth to those who answer truly.","Kneel, pilgrim, and be tested."],good:["It is written. The way is open.","Wisdom is its own absolution. Go."],bad:["Error is a penance. Pay it.","The candles gutter. A life is taken in tithe."],open:["Peace. You have already been judged here."]},
astrologer:{name:"The Astrologer",enter:["Mercury is in retrograde, and so, I fear, are you. Answer!","The stars foretold your arrival. They were unimpressed.","I have charted ten thousand heavens. Now chart this question."],good:["As the constellations predicted. Obviously. Proceed.","Correct! Saturn smiles, briefly. The doors align."],bad:["Wrong! The heavens wince. A life falls like a meteor.","Tsk. Your answer is as dim as a dying star."],open:["You orbit back to me. How predictable. Doors are open."]},
armour:{name:"The Empty Armour",enter:["We… are… many. We… are… empty. Answer… us…","Clank. Our helms are hollow. Our question is not.","We stood guard for centuries. Speak true, or join our ranks."],good:["Correct… we let… you pass…","The steel remembers that answer. Go."],bad:["Wrong… another suit… for the rack…","We… heard… a life… fall."],open:["We… remember… you. The doors… are open."]},
king:{name:"The Staring King",enter:["You stand before a KING. Kneel, and answer.","My painted eyes have followed a thousand fools. Answer, fool.","I ruled this castle once. Now I rule this question."],good:["Hmph. A worthy subject. Pass.","Correct. You may leave our royal presence."],bad:["WRONG! Off with… one of your lives.","We are not amused. A life is forfeit."],open:["You return to court? The door stands open."]},
spinner:{name:"The Old Spinner",enter:["Spin, spin, the thread runs thin… answer me before it snaps.","Every wanderer is a thread in my tapestry, dearie.","Sit a while. Answer a while. Never leave a while."],good:["There, the knot comes loose. The doors are yours.","A fine thread of thought. Go on."],bad:["Snip! There goes a thread of your life.","Tangled, tangled. Try again."],open:["Back to my loom? The doors are still open, pet."]},
bellringer:{name:"The Bellringer",enter:["*BONG*… eh? What? A visitor! Answer loud, I'm half deaf.","The bell tolls for thee… unless you answer this.","Hehh. Ring once for right, twice for wrong. Ready?"],good:["*BONG!* Right you are! Doors be open.","Hah! A clear ring. On you go."],bad:["*Bong… bong…* A death knell for one of your lives!","Wrong! My ears ache at it."],open:["You again? Door's open. Mind the rope."]},
knight:{name:"The Old Knight",enter:["Halt! Who goes there? Er… answer this, and I'll not run you through.","I've guarded this hall since my armour was shiny. Riddle me, squire.","My joints creak, but my questions are sharp."],good:["Well struck! Pass, friend.","Huzzah! Correct. The way is clear."],bad:["A miss! Your shield cracks. One life lost.","Wrong, squire. Back to the training yard with you."],open:["Back, squire? The doors stand open."]},
gargoyle:{name:"The Red Gargoyle",enter:["GRRR. Answer. Or I eat.","Stone wings. Stone teeth. Stone patience. ANSWER.","Many come down here. Few go up. Riddle time."],good:["Hmph. Right. Go. Before I change mind.","Correct. Trapdoor and doors open. Bah."],bad:["WRONG. Crunch. One life gone.","Hrrk. Bad answer. Tasty adventurer."],open:["You again. Doors open. Go away."]}};
var N=6,DIRS={N:[0,-1],S:[0,1],E:[1,0],W:[-1,0]},OPP={N:"S",S:"N",E:"W",W:"E"};
var PAL=[["#2b2236","#3d3150","#1a1424"],["#1f2e2a","#2f4640","#121c19"],["#33241c","#4a3528","#1d1410"],["#22283a","#333c56","#141824"],["#2e1f2b","#46303f","#1b1219"],["#2a2a22","#3f3f33","#18180f"]];
var S,rng;
function mulberry(a){return function(){a|=0;a=a+0x6D2B79F5|0;var t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};}
function pick(a){return a[Math.floor(Math.random()*a.length)];}
function shuffle(a,r){r=r||Math.random;for(var i=a.length-1;i>0;i--){var j=Math.floor(r()*(i+1)),t=a[i];a[i]=a[j];a[j]=t;}return a;}
function key(x,y){return x+","+y;}
// Facing-relative view: the painted doors are the open exits to your left, ahead and right.
function nbRaw(c,d){var x=c.x+DIRS[d][0],y=c.y+DIRS[d][1];return (x<0||y<0||x>=N||y>=N)?null:key(x,y);}
function nb(c,d){var k=nbRaw(c,d);return k&&S.m.cells[k]?k:null;}
function viewKey(k,f){var c=S.m.cells[k],r={L:LEFT[f],C:f,R:RIGHT[f]},s="";["L","C","R"].forEach(function(z){if(c.d[r[z]])s+=z;});return s;}
function relDir(z){return {L:LEFT[S.face],C:S.face,R:RIGHT[S.face]}[z];}
function hash(str){var h=2166136261;for(var i=0;i<str.length;i++){h^=str.charCodeAt(i);h=Math.imul(h,16777619);}return h>>>0;}
function viewImg(){
 if(S.cur===S.m.exit)return "archive-exit";
 if(S.cur===S.m.start&&S.face==="N")return "great-hall";
 var k=S.cur+S.face;if(S.views[k])return S.views[k];
 var pool=POOLS[viewKey(S.cur,S.face)],i=hash(S.seed+":"+k)%pool.length;
 if(pool[i]===S.lastImg&&pool.length>1)i=(i+1)%pool.length;
 return S.views[k]=pool[i];
}
// Carve a random connected part of the grid (about 55-80% of cells); the rest is solid rock.
function genCastle(){
 for(var tries=0;tries<60;tries++){
  var grid={},x,y;for(y=0;y<N;y++)for(x=0;x<N;x++)grid[key(x,y)]={x:x,y:y,d:{}};
  var carved={},count=0;
  function carve(k){if(!carved[k]){carved[k]=1;count++;}}
  function link(k,d){var n=nbRaw(grid[k],d);if(!n)return null;grid[k].d[d]=1;grid[n].d[OPP[d]]=1;carve(k);carve(n);return n;}
  var sx=1+Math.floor(rng()*(N-2)),sy=N-1,start=key(sx,sy);carve(start);
  var active=[start,link(start,"W"),link(start,"N"),link(start,"E")];
  var target=Math.round(N*N*(0.55+rng()*0.25));
  while(active.length&&count<target){
   var idx=rng()<0.7?active.length-1:Math.floor(rng()*active.length),k=active[idx],c=grid[k];
   var opts=shuffle(Object.keys(DIRS),rng).filter(function(d){var n=nbRaw(c,d);return n&&!carved[n];});
   if(!opts.length){active.splice(idx,1);continue;}
   active.push(link(k,opts[0]));
  }
  var ck=Object.keys(carved);
  for(var i=0;i<2+Math.floor(rng()*3);i++){var rk=ck[Math.floor(rng()*ck.length)],rd=Object.keys(DIRS)[Math.floor(rng()*4)],rn=nbRaw(grid[rk],rd);if(rn&&carved[rn])link(rk,rd);}
  var cells={};ck.forEach(function(k){cells[k]=grid[k];});
  var dist={},q=[start];dist[start]=0;var far=start;
  while(q.length){var k2=q.shift();if(dist[k2]>dist[far])far=k2;for(var d in cells[k2].d){var ak=nbRaw(cells[k2],d);if(!(ak in dist)){dist[ak]=dist[k2]+1;q.push(ak);}}}
  if(dist[far]>=N||tries===59)return {cells:cells,start:start,exit:far,len:dist[far],carved:ck.length,grid:N};
 }
}
var SEEDP=(location.search.match(/[?&]seed=(\d+)/)||[])[1];
function levelSeed(lv){return SEEDP?((+SEEDP)*7919+lv)>>>0:((Date.now()^Math.floor(Math.random()*4294967296))>>>0);}
function startLevel(lv,carry){
 N=5+lv;var seed=levelSeed(lv);rng=mulberry(seed);
 var m=genCastle();
 S={m:m,cur:m.start,level:lv,lives:carry?Math.min(5,carry.lives+1):5,score:carry?carry.score:0,steps:carry?carry.steps:0,visited:{},solved:{},deck:buildDeck(lv),used:{},q:null,over:false,seed:seed,face:"N",views:{},lastImg:null};
 S.visited[m.start]=1;document.getElementById("map").setAttribute("viewBox","0 0 "+(N*20)+" "+(N*20));
}
function newGame(){
 hideDeath();startLevel(1,null);S.intro=true;hideOverlay();renderIntro();
}
function nextQ(){
 var tops=HOST_TOPICS[(room()||{}).host]||[],pickq=null,i;
 if(tops.length&&Math.random()<0.6){for(i=0;i<S.deck.length;i++){var c=S.deck[i];if(!S.used[c.id]&&tops.indexOf(c.t)>=0){pickq=c;break;}}}
 if(!pickq)for(i=0;i<S.deck.length;i++){if(!S.used[S.deck[i].id]){pickq=S.deck[i];break;}}
 if(!pickq){S.used={};pickq=S.deck[0];}
 S.used[pickq.id]=1;saveSeen(S.level,pickq.id);
 var o=pickq.a.map(function(t,j){return{t:t,c:j===0};});
 return{id:pickq.id,cat:TOPIC_NAMES[pickq.t]||pickq.t,text:pickq.q,opts:shuffle(o)};}
function enter(first){
 var c=S.m.cells[S.cur];
 if(S.cur===S.m.exit){S.q=null;S.solved[S.cur]=1;say("WHAT?! You found the Archive! Touch the golden door, if you dare…");return render();}
 var H=host();if(S.solved[S.cur]){S.q=null;say(pick(H.open));}else{S.q=nextQ();say(pick(H.enter));}
 render();
}
function room(){var n=viewImg();return n==="archive-exit"?EXITROOM:ROOMS[n];}
function host(){return HOSTS[room().host];}
function say(t,who){var j=document.getElementById("jester");j.innerHTML="";var n=document.createElement("b");n.textContent=(who||(S&&S.m?host().name:"The Jester"))+":";j.appendChild(n);j.appendChild(document.createTextNode(" “"+t+"”"));}
function answer(i,btn){
 if(S.over||!S.q)return;var o=S.q.opts[i];
 if(o.c){S.solved[S.cur]=1;S.score+=100;say(pick(host().good));btn.classList.add("good");setTimeout(render,500);}
 else{S.lives--;S.score=Math.max(0,S.score-25);btn.classList.add("bad");say(pick(host().bad));
  if(S.lives<=0){render();return lose();}setTimeout(function(){S.q=nextQ();render();},700);}
 hud();
}
function move(z){
 if(S.over||!S.solved[S.cur])return;var c=S.m.cells[S.cur],d=relDir(z);if(!c.d[d])return;
 S.cur=nb(c,d);S.face=d;S.steps++;if(!S.visited[S.cur]){S.visited[S.cur]=1;S.score+=10;}enter(false);
}
function goBack(){if(S.over||S.intro||S.cur===S.m.start)return;var c=S.m.cells[S.cur],d=OPP[S.face];if(!c.d[d])return;S.cur=nb(c,d);S.face=d;S.steps++;if(!S.visited[S.cur]){S.visited[S.cur]=1;S.score+=10;}enter(false);}
function hud(){
 document.getElementById("hud-lives").textContent="Lives: "+"♥".repeat(Math.max(0,S.lives))+"♡".repeat(5-Math.max(0,S.lives));
 document.getElementById("hud-score").textContent="Score: "+S.score;
 document.getElementById("hud-steps").textContent="Steps: "+S.steps;
 document.getElementById("hud-room").textContent="Rooms found: "+Object.keys(S.visited).length+"/"+S.m.carved;
 document.getElementById("hud-level").textContent="Level "+ROMAN[S.level];
}
var NS="http://www.w3.org/2000/svg";
function el(tag,attrs,parent){var e=document.createElementNS(NS,tag);for(var k in attrs)e.setAttribute(k,attrs[k]);if(parent)parent.appendChild(e);return e;}
var DEBUG=/[?&]debug=1/.test(location.search);
function archPath(x,y,w,h){var r=Math.min(w/2,h*0.45);return "M"+x+","+(y+h)+"V"+(y+r)+"A"+(w/2)+","+r+" 0 0 1 "+(x+w)+","+(y+r)+"V"+(y+h)+"Z";}
function drawScene(){
 var svg=document.getElementById("scene");svg.innerHTML="";var img=viewImg(),R=room(),open=!!S.solved[S.cur],isExit=S.cur===S.m.exit;
 svg.setAttribute("viewBox","0 0 100 56.25");svg.setAttribute("data-img",img);
 el("image",{href:"img/"+img+".jpg",x:0,y:0,width:100,height:56.25,preserveAspectRatio:"none"},svg);
 var labels={L:"Left",C:"Ahead",R:"Right"};
 var dirs=isExit?["C"]:["L","C","R"].filter(function(z){return R[RK[z]];});
 S.lastImg=img;
 dirs.forEach(function(d){var b=R[RK[d]],k=0.5625;
  var x=b[0],y=b[1]*k,w=b[2],h=b[3]*k,floor=false;
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
 var tb=document.createElement("button");tb.className="cs-turn";tb.id="go-back";tb.textContent="\u21BA Go back";tb.onclick=goBack;if(S.cur===S.m.start||!S.m.cells[S.cur].d[OPP[S.face]])tb.style.display="none";
 if(!S.q){var dk=viewKey(S.cur,S.face);box.innerHTML=S.cur===S.m.exit?'<div class="q">The golden door awaits. Click it to claim the Archive.</div>':(dk?'<div class="q">The doors are unlocked. Click a door in the painting above.</div>':'<div class="q">A dead end! Nothing ahead but the cauldron. Go back the way you came.</div>');box.appendChild(tb);return;}
 var cat=document.createElement("div");cat.className="cat";cat.textContent=S.q.cat;box.appendChild(cat);
 var q=document.createElement("div");q.className="q";q.textContent=S.q.text;box.appendChild(q);
 var o=document.createElement("div");o.className="opts";box.appendChild(o);
 S.q.opts.forEach(function(op,i){var b=document.createElement("button");b.className="cs-btn";b.textContent=op.t;b.onclick=function(){answer(i,b);};o.appendChild(b);});
 box.appendChild(tb);
}
function drawMap(){
 var svg=document.getElementById("map");svg.innerHTML="";var sz=20;
 for(var k in S.m.cells){var c=S.m.cells[k],v=S.visited[k],ex=k===S.m.exit,cur=k===S.cur;
  if(!v&&!ex)continue;
  el("rect",{x:c.x*sz+3,y:c.y*sz+3,width:sz-6,height:sz-6,rx:2,fill:cur?"#ffd86b":ex?"#3fbf7f":"#5a4a7a"},svg);
  if(v)for(var d in c.d){var x1=c.x*sz+10,y1=c.y*sz+10;el("line",{x1:x1+DIRS[d][0]*7,y1:y1+DIRS[d][1]*7,x2:x1+DIRS[d][0]*10,y2:y1+DIRS[d][1]*10,stroke:"#8a7aaa","stroke-width":"2"},svg);}
  if(cur){var ang={N:0,E:90,S:180,W:270}[S.face],cx=c.x*sz+10,cy=c.y*sz+10;el("polygon",{id:"map-arrow","data-face":S.face,points:(cx)+","+(cy-5)+" "+(cx+4)+","+(cy+4)+" "+(cx)+","+(cy+2)+" "+(cx-4)+","+(cy+4),fill:"#2a1a0c",transform:"rotate("+ang+" "+cx+" "+cy+")"},svg);}
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
 say("Knock knock, wanderer! Welcome to The Castle. Answer each chamber's riddle to unlock its painted doors, and find the hidden Archive. Five lives. Hee hee!","The Jester");
 var box=document.getElementById("quiz");box.innerHTML="";var q=document.createElement("div");q.className="q";q.textContent="Click the great gate in the painting to enter. Inside, every painted door is a way onward is a way onward. Some rooms have three doors, some one, and some none at all. Use \u201cGo back\u201d to return through the door behind you. The map shows where you have been.";box.appendChild(q);
 var b=document.createElement("button");b.className="cs-btn cta";b.textContent="Enter the castle";b.style.marginTop="10px";b.onclick=go;box.appendChild(b);
}
function render(){hud();drawScene();drawQuiz();drawMap();}
function overlay(title,text,btn){var o=document.getElementById("overlay");o.classList.remove("level-card","victory");o.innerHTML="";var h=document.createElement("h2");h.textContent=title;var p=document.createElement("p");p.textContent=text;var b=document.createElement("button");b.className="cs-btn cta";b.textContent=btn[0];b.onclick=btn[1];o.appendChild(h);o.appendChild(p);o.appendChild(b);o.classList.remove("hidden");}
function hideOverlay(){document.getElementById("overlay").classList.add("hidden");}
var LEVEL_LINES={2:"Hee hee! You thought that was the end? The castle has rearranged its bones while you slept. Deeper we go…",3:"Still alive? How tiresome. This is the oldest part of the castle. Even I don't come down here."};
function win(){
 S.over=true;S.score+=S.lives*50+100*S.level;hud();document.getElementById("quiz").innerHTML="";
 if(S.level<MAXLEVEL){var nl=S.level+1,carry={lives:S.lives,score:S.score,steps:S.steps};
  say("Curses! You found the golden door. But it only leads further in…","The Jester");
  overlay("The Castle: Level "+ROMAN[nl],LEVEL_LINES[nl]+" (A bigger castle, harder riddles, and one life restored.)",["Enter Level "+ROMAN[nl],function(){hideOverlay();startLevel(nl,carry);enter(true);}]);
  document.getElementById("overlay").classList.add("level-card");return;}
 say("No! NO! You have conquered the castle. The jester will be… having words with the Archivist.","The Jester");
 overlay("You have conquered The Castle\u2026 for now","Final score "+S.score+" \u00b7 "+S.steps+" steps \u00b7 "+S.lives+" lives left. The Archivist grants you a footnote of forbidden knowledge. More levels are being dug beneath the cellars\u2026",["Play again",newGame]);
 document.getElementById("overlay").classList.add("victory");
}
function deathSound(){try{var AC=window.AudioContext||window.webkitAudioContext;if(!AC)return;var ac=new AC();if(ac.state==="suspended"&&ac.resume)ac.resume();var t=ac.currentTime,g=ac.createGain();g.gain.setValueAtTime(0.0001,t);g.gain.exponentialRampToValueAtTime(0.35,t+0.4);g.gain.exponentialRampToValueAtTime(0.0001,t+3.2);g.connect(ac.destination);
 [55,82.4,41.2].forEach(function(f,i){var o=ac.createOscillator();o.type=i===1?"triangle":"sine";o.frequency.setValueAtTime(f,t);o.frequency.exponentialRampToValueAtTime(f*0.7,t+3);o.connect(g);o.start(t);o.stop(t+3.3);});}catch(e){}}
function lose(){
 S.over=true;say("Ha! Another soul for the stacks.");document.getElementById("quiz").innerHTML="";
 var d=document.getElementById("death");if(!d){d=document.createElement("div");d.id="death";d.innerHTML='<div class="band"><div class="lf">THE LIGHT FADES</div></div><button class="cs-btn cta lf-btn" type="button">Try again</button>';document.body.appendChild(d);d.querySelector(".lf-btn").onclick=newGame;}
 document.body.classList.add("is-dead");d.classList.remove("show");void d.offsetWidth;d.classList.add("show");deathSound();
}
function hideDeath(){document.body.classList.remove("is-dead");var d=document.getElementById("death");if(d)d.classList.remove("show");}
window.__cs=function(){return S;};window.__csRender=function(){render();};window.__csApi={genSample:function(lv){var oN=N,oR=rng;N=5+lv;rng=mulberry(levelSeed(lv));var m=genCastle();N=oN;rng=oR;return m;},jumpExit:function(){S.cur=S.m.exit;S.visited[S.cur]=1;enter(false);},banks:BANKS,level:function(){return S.level;},viewKey:viewKey,viewImg:viewImg,doorKey:doorKey,POOLS:POOLS,nb:nb,relDir:relDir,nextQ:nextQ};
newGame();
})();
