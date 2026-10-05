const CONTENT = {
1:{title:"Parte 1: Conceito de Direito (Miguel Reale)",sections:[
["Direito segundo Miguel Reale",[
"<b>Ideia central:</b> o Direito é uma <b>ordenação</b> ética, coercível, heterônoma e bilateral, na medida do <b>bem comum</b>.",
"<b>Teoria tridimensional:</b> foi o destaque do caderno ao lado do nome de Reale. <i>Complemento (fora do caderno):</i> ela vê o Direito como a união de <b>fato, valor e norma</b>.",
"<b>Frase anotada pelo professor:</b> “o universo é indiferente para suas opiniões”."]],
["Ordenação, ética e coercibilidade",[
"<b>Ordenação:</b> é um conjunto de regras.",
"<b>Ética:</b> são as regras que orientam a sociedade.",
"<b>Coercível:</b> o Estado tem força (poder) para punir quem descumpre a regra."]],
["Heteronomia e bilateralidade",[
"<b>Heteronomia:</b> as leis são estabelecidas pelas entidades competentes, ou seja, pelo poder legislativo, com seus contrapesos.",
"<b>Bilateral:</b> ao mesmo tempo em que há um direito, há também um dever.",
"<b>Cuidado:</b> heteronomia diz <b>quem faz</b> a regra; coercibilidade diz que o Estado tem <b>força para punir</b>."]],
["Bem comum, o objeto do Direito",[
"<b>Bem comum:</b> organizar a sociedade de forma adequada. É o <b>objeto do Direito</b>.",
"<b>Resumo das seis características:</b> ordenação, ética, coercibilidade, heteronomia, bilateralidade e bem comum."]]
]},
2:{title:"Parte 2: História do Direito do Trabalho",sections:[
["Escravidão e servidão",[
"<b>Escravidão:</b> no caderno, surge a partir da <b>vitória de guerra</b> (exemplo citado: o direito dos vikings). <i>No livro:</i> o escravo era tratado como coisa, sem direitos.",
"<b>Sistema feudal:</b> trouxe a <b>servidão</b> (exemplo citado: Guerra dos Tronos). <i>No livro:</i> o senhor dava proteção ao servo sem liberdade, e o servo entregava a produção rural ao senhor feudal."]],
["Escravidão baseada na cor da pele",[
"O sistema escravo baseado na cor da pele durou <b>mais de 200 anos</b>.",
"No caderno, ele aparece como uma <b>externalidade econômica</b>."]],
["Revolução Industrial e trabalho precário",[
"<b>Relações de trabalho precárias:</b> as condições eram tão ruins que as pessoas morriam.",
"<b>Poder absoluto de contratar:</b> o empregador contratava sem limites legais. Esse quadro é o oposto do contrato de trabalho protegido por lei.",
"<b>Anotação do caderno:</b> “96% de álcool na bebida para trabalhar”. Confirme esse dado com o professor antes da prova."]],
["O nascimento do Direito do Trabalho",[
"<i>Complemento do livro:</i> prevalece que o Direito do Trabalho nasce com a sociedade industrial e o trabalho assalariado.",
"A máquina reduziu os empregos e piorou as condições. Os trabalhadores passaram a se reunir em associações, que depois seriam os sindicatos.",
"A OIT foi criada em 1919, com o Tratado de Versalhes."]]
]},
3:{title:"Parte 3: Fontes do Direito do Trabalho",sections:[
["Lista de fontes",[
"<b>Fontes anotadas:</b> Constituição Federal (arts. 6º a 11), CLT, decretos e regulamentos, convenções e acordos coletivos e regulamento da empresa."]],
["Constituição Federal e CLT",[
"<b>CF, arts. 6º a 11:</b> <i>complemento:</i> tratam dos direitos sociais, dos direitos dos trabalhadores, da organização sindical e da greve.",
"<b>CLT:</b> Consolidação das Leis do Trabalho, de 1943 (conforme o livro)."]],
["Decretos, normas coletivas e regulamento",[
"<b>Decretos e regulamentos:</b> normas do Poder Público que detalham a aplicação das leis.",
"<b>Convenções e acordos coletivos:</b> <i>complemento:</i> normas negociadas entre sindicatos (convenção) ou entre o sindicato e uma ou mais empresas (acordo).",
"<b>Regulamento da empresa:</b> regras internas do empregador. É fonte, mas <i>(complemento)</i> não pode contrariar a Constituição."]]
]},
4:{title:"Parte 4: Relação de emprego e relação de trabalho",sections:[
["Direito do Trabalho x trabalho",[
"A relação jurídico-trabalhista é analisada <b>a partir do objeto</b>.",
"<i>Complemento (doutrina):</i> <b>relação de trabalho</b> é o gênero (autônomo, estagiário, voluntário etc.) e <b>relação de emprego</b> é uma espécie dele."]],
["Relação de emprego e os 5 elementos",[
"<b>Emprego</b> é o objeto da <b>relação de emprego</b>, que exige <b>5 elementos</b> para se configurar.",
"<i>Complemento (CLT, art. 3º):</i> <b>pessoa física</b>, <b>pessoalidade</b>, <b>não eventualidade</b>, <b>onerosidade</b> (salário) e <b>subordinação</b>.",
"<i>Complemento:</i> o contrato escrito não é um dos elementos, e vale o que acontece na prática (primazia da realidade)."]],
["Relação de trabalho e estágio",[
"<b>Trabalho</b> = <b>estágio</b> = <b>relação de trabalho</b>, anotada como <b>específica</b>.",
"<i>Complemento:</i> o estágio tem lei própria e, em regra, não gera vínculo de emprego."]]
]}
};
const $=id=>document.getElementById(id),$$=s=>[...document.querySelectorAll(s)];
const store={get(k){try{return localStorage.getItem(k)}catch(e){return null}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};
let mute=store.get("est-mute")==="1";
$("snd").textContent=mute?"🔇":"🔊";
$("snd").onclick=()=>{mute=!mute;store.set("est-mute",mute?"1":"0");$("snd").textContent=mute?"🔇":"🔊"};
function beep(f,d=.12){if(mute)return;try{const c=beep.c||(beep.c=new(window.AudioContext||window.webkitAudioContext)()),o=c.createOscillator(),g=c.createGain();o.frequency.value=f;g.gain.value=.05;o.connect(g);g.connect(c.destination);o.start();o.stop(c.currentTime+d)}catch(e){}}
function burst(x,y,n=16,cols=["#6EA8FF","#8FB4F5","#ffffff","#BBD0F5"],spread=90){for(let k=0;k<n;k++){const p=document.createElement("span");p.className="p";const a=Math.random()*6.28,r=spread*(.4+Math.random());p.style.cssText=`left:${x}px;top:${y}px;background:${cols[k%cols.length]};--dx:${Math.cos(a)*r}px;--dy:${Math.sin(a)*r+30}px`;document.body.appendChild(p);setTimeout(()=>p.remove(),950)}}
function tab(n){$(n==="res"?"conteudo":"quiz").scrollIntoView({behavior:"smooth",block:"start"})}

/* Resumos */
const AC={a:"aáàâãä",e:"eéèêë",i:"iíìîï",o:"oóòôõö",u:"uúùûü",c:"cç"};
const rxSrc=q=>q.trim().split("").map(ch=>{const l=ch.toLowerCase();return AC[l]?"["+AC[l]+"]":ch.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("");
const hl=(h,s)=>s?h.replace(new RegExp("(<[^>]+>)|("+s+")","gi"),(m,t,x)=>t?t:"<mark>"+x+"</mark>"):h;
/* Avatares cartoon */
const SK=["#f5d0b0","#e0ac82","#b9805a","#8a5a3c"];
function av(o){const s=SK[o.sk],h=o.hc||"#333";
 const back=o.h==="long"?`<path d="M34 46c-4 24 0 42 10 44l4-34zM86 46c4 24 0 42-10 44l-4-34z" fill="${h}"/>`:o.h==="bun"?`<circle cx="60" cy="17" r="10" fill="${h}"/>`:"";
 const front=o.h==="bald"?"":`<path d="M35 48C33 26 47 21 60 21s27 5 25 27c-4-9-10-14-25-14s-21 5-25 14z" fill="${h}"/>`;
 return `<svg viewBox="0 0 120 120" aria-hidden="true">${back}<path d="M22 120c0-26 16-42 38-42s38 16 38 42z" fill="${o.shirt}"/><rect x="52" y="66" width="16" height="14" rx="6" fill="${s}"/><circle cx="60" cy="48" r="24" fill="${s}"/>${front}<circle cx="51" cy="50" r="3" fill="#2b2b2b"/><circle cx="69" cy="50" r="3" fill="#2b2b2b"/><path d="M52 60q8 7 16 0" stroke="#2b2b2b" stroke-width="2.5" fill="none" stroke-linecap="round"/><circle cx="45" cy="58" r="4" fill="#f28b82" opacity=".35"/><circle cx="75" cy="58" r="4" fill="#f28b82" opacity=".35"/>${o.x||""}</svg>`}
const GL='<g fill="none" stroke="#2b2b2b" stroke-width="2.5"><circle cx="51" cy="50" r="7"/><circle cx="69" cy="50" r="7"/><path d="M58 50h4"/></g>';
const VIS=c=>`<path d="M36 36c6-8 16-10 24-10s18 2 24 10z" fill="${c}"/>`;
const OLD=[
{sk:0,h:"short",hc:"#6b4a2b",shirt:"#a5824a",x:'<ellipse cx="60" cy="31" rx="35" ry="7" fill="#7a5230"/><path d="M42 31c0-16 6-21 18-21s18 5 18 21z" fill="#8f6238"/><g transform="rotate(-15 92 92)"><rect x="80" y="70" width="22" height="34" rx="4" fill="#f3e3b8" stroke="#a5824a" stroke-width="2"/><path d="M84 80h14M84 87h14M84 94h10" stroke="#a5824a" stroke-width="2"/></g>'},
{sk:2,h:"short",hc:"#b8b8b8",shirt:"#4a5a6a",x:GL+'<path d="M52 82l8 4-8 4zM68 82l-8 4 8 4z" fill="#c2564d"/><rect x="48" y="30" width="24" height="8" fill="#2b2b2b"/><path d="M28 28L60 14l32 14-32 14z" fill="#2b2b2b"/><path d="M88 29v16" stroke="#6EA8FF" stroke-width="3"/><rect x="80" y="78" width="26" height="30" rx="3" fill="#5877A8"/><path d="M85 78v30" stroke="#0003" stroke-width="2"/>'},
{sk:1,h:"long",hc:"#2b2b2b",shirt:"#ffffff",x:GL+'<path d="M60 80L48 120M60 80l12 40" stroke="#cfcfcf" stroke-width="2"/><path d="M88 74h8v10l8 16a4 4 0 0 1-4 6H84a4 4 0 0 1-4-6l8-16z" fill="#BBD0F5" stroke="#2b2b2b" stroke-width="2"/>'},
{sk:3,h:"short",hc:"#1f1f1f",shirt:"#ffffff",x:'<path d="M60 80l-5 8 5 26 5-26z" fill="#6EA8FF"/><rect x="78" y="76" width="30" height="24" rx="4" fill="#3b3b3b"/><rect x="81" y="79" width="24" height="16" fill="#e9f2f7"/><path d="M84 92l5-5 4 3 6-7" stroke="#2F5FB0" stroke-width="2" fill="none"/>'},
{sk:0,h:"bun",hc:"#7a4a2a",shirt:"#5877A8",x:VIS("#2F5FB0")+'<rect x="78" y="74" width="28" height="36" rx="5" fill="#3f3f3f"/><rect x="82" y="79" width="20" height="9" rx="2" fill="#cfcfcf"/><path d="M85 96h3M93 96h3M101 96h1M85 103h3M93 103h3" stroke="#6EA8FF" stroke-width="4" stroke-linecap="round"/>'},
{sk:1,h:"long",hc:"#8f5a2b",shirt:"#6f8fb0",x:GL+'<circle cx="92" cy="86" r="11" fill="#dff1ff" fill-opacity=".6" stroke="#3f3f3f" stroke-width="4"/><path d="M100 94l10 12" stroke="#3f3f3f" stroke-width="5" stroke-linecap="round"/>'},
{sk:2,h:"short",hc:"#2b2b2b",shirt:"#3f3f3f",x:'<path d="M36 48c0-20 10-28 24-28s24 8 24 28" fill="none" stroke="#6EA8FF" stroke-width="4"/><rect x="31" y="46" width="8" height="14" rx="4" fill="#6EA8FF"/><path d="M35 60q4 8 16 8" stroke="#6EA8FF" stroke-width="3" fill="none"/><path d="M76 106l6-22h26l6 22z" fill="#6f6f6f"/><rect x="72" y="106" width="46" height="5" rx="2" fill="#bdbdbd"/><circle cx="95" cy="94" r="4" fill="#6EA8FF"/>'},
{sk:0,h:"long",hc:"#d9a441",shirt:"#8f6238",x:'<rect x="78" y="86" width="30" height="22" rx="4" fill="#a5733f"/><path d="M87 86v-5h12v5" stroke="#5b3b1f" stroke-width="3" fill="none"/><rect x="91" y="94" width="4" height="5" fill="#6EA8FF"/>'},
{sk:3,h:"bald",shirt:"#6EA8FF",x:'<path d="M34 38c0-14 12-20 26-20s26 6 26 20z" fill="#f2c94c"/><rect x="30" y="36" width="60" height="6" rx="3" fill="#d9a92a"/><rect x="78" y="72" width="28" height="38" rx="4" fill="#c9a26a"/><rect x="84" y="68" width="16" height="7" rx="2" fill="#6f6f6f"/><path d="M84 84l3 3 5-6M84 97l3 3 5-6" stroke="#2F5FB0" stroke-width="2.5" fill="none"/>'},
{sk:1,h:"short",hc:"#5a5a5a",shirt:"#2F4466",x:GL+'<circle cx="92" cy="92" r="14" fill="#2F5FB0"/><path d="M85 92l5 5 9-10" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'},
{sk:2,h:"short",hc:"#4a3320",shirt:"#b06a4a",x:'<path d="M92 72v36M80 108h24" stroke="#3f3f3f" stroke-width="4"/><path d="M78 80h28" stroke="#3f3f3f" stroke-width="3"/><path d="M72 94l6-14 6 14zM100 94l6-14 6 14z" fill="#6EA8FF"/>'},
{sk:0,h:"short",hc:"#9a9a9a",shirt:"#2b2b2b",x:'<path d="M60 80l-5 8 5 26 5-26z" fill="#c2564d"/><rect x="78" y="74" width="26" height="34" rx="3" fill="#fff" stroke="#8a8a8a" stroke-width="2"/><path d="M83 84h16M83 91h16M83 98h9" stroke="#8a8a8a" stroke-width="2"/><path d="M98 106l10-14 4 3-10 14z" fill="#6EA8FF"/>'},
{sk:1,h:"bun",hc:"#2b2b2b",shirt:"#d17a5a",x:'<path d="M78 80l24-10v34L78 94z" fill="#6EA8FF" stroke="#3f3f3f" stroke-width="2"/><rect x="72" y="80" width="8" height="14" rx="3" fill="#3f3f3f"/><path d="M108 78q6 9 0 18M112 74q10 13 0 26" stroke="#3f3f3f" stroke-width="2.5" fill="none"/>'},
{sk:3,h:"long",hc:"#3b2a1a",shirt:"#5B9BE8",x:VIS("#7cc99b")+'<path d="M84 96h20l-3 14H87z" fill="#c9835a"/><path d="M94 96V80" stroke="#2F5FB0" stroke-width="3"/><path d="M94 86c-12 0-14-10-14-10s12-2 14 10zM94 82c12 0 14-10 14-10s-12-2-14 10z" fill="#5B9BE8"/>'}
];
const FR='<rect x="74" y="72" width="38" height="38" rx="6" fill="#fff" stroke="#8a8a8a" stroke-width="2"/>';
const BD=t=>FR+`<text x="93" y="98" text-anchor="middle" font-size="${t.length>2?15:24}" font-weight="700" font-family="Georgia,serif" fill="#3f3f3f">${t}</text>`;
const BARS=FR+'<path d="M80 105h26" stroke="#8a8a8a" stroke-width="2"/><rect x="80" y="92" width="6" height="13" fill="#6EA8FF"/><rect x="89" y="84" width="6" height="21" fill="#6f6f6f"/><rect x="98" y="78" width="6" height="27" fill="#2F5FB0"/>';
const LINE=FR+'<path d="M79 100l9-12 8 6 11-16" stroke="#c2564d" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
const PIE='<circle cx="93" cy="91" r="19" fill="#6EA8FF"/><path d="M93 91V72a19 19 0 0 1 18 14z" fill="#6f6f6f"/><path d="M93 91l-16 11a19 19 0 0 1-3-11z" fill="#2F5FB0"/>';
const V=(i,o)=>({...OLD[i],...o});
const AVS=[
V(1,{sk:0,hc:"#9a9a9a"}),V(5,{sk:2}),V(3,{sk:1,h:"long",hc:"#2b2b2b"}),V(2,{sk:0,h:"short",hc:"#6b4a2b"}),
{sk:3,h:"short",hc:"#1f1f1f",shirt:"#6f8fb0",x:GL+BD("Var")},
{sk:1,h:"bun",hc:"#7a4a2a",shirt:"#8f6238",x:BD("fi")},
{sk:2,h:"short",hc:"#2b2b2b",shirt:"#5877A8",x:VIS("#6EA8FF")+BD("√n")},
{sk:0,h:"long",hc:"#d9a441",shirt:"#4a5a6a",x:BARS},
V(5,{sk:3,h:"short",hc:"#3b2a1a",shirt:"#a5824a"}),
{sk:1,h:"short",hc:"#5a5a5a",shirt:"#3f3f3f",x:BARS},
{sk:0,h:"bun",hc:"#2b2b2b",shirt:"#6f8fb0",x:LINE},
{sk:2,h:"bald",shirt:"#6EA8FF",x:GL+BD("Hist")},
{sk:3,h:"long",hc:"#3b2a1a",shirt:"#d17a5a",x:PIE},
V(8,{sk:1,h:"bun",hc:"#4a3320"}),
{sk:0,h:"short",hc:"#6b4a2b",shirt:"#5877A8",x:BD("x̄")},
V(10,{sk:1,shirt:"#8a6fb0"}),
{sk:2,h:"long",hc:"#2b2b2b",shirt:"#a5824a",x:GL+BD("Md")},
{sk:3,h:"short",hc:"#1f1f1f",shirt:"#2F4466",x:BD("Mo")},
{sk:1,h:"short",hc:"#8f5a2b",shirt:"#4a5a6a",x:GL+BD("?")},
V(4,{sk:3,h:"short",hc:"#1f1f1f"}),
{sk:0,h:"bun",hc:"#9a6a2b",shirt:"#3f3f3f",x:VIS("#6f6f6f")+BD("Cz")},
{sk:2,h:"short",hc:"#4a3320",shirt:"#6EA8FF",x:BD("Q")},
V(9,{sk:0,hc:"#2b2b2b"})
];
const AV=AVS.map(av);
const SAY=["Reale: ordenação ética, coercível, heterônoma e bilateral.","Ordenação é conjunto de regras; coercível é força do Estado.","Quem faz a lei? Heteronomia. Direito e dever? Bilateral.","O bem comum é o objeto do Direito.","A escravidão nasceu da vitória de guerra; a servidão, do feudalismo.","Mais de 200 anos de escravidão pela cor da pele.","Revolução Industrial: condições tão ruins que gente morria.","A sociedade industrial deu origem ao Direito do Trabalho.","CF, CLT, decretos, normas coletivas e regulamento: tudo fonte.","CF, arts. 6º a 11: direitos sociais e do trabalhador.","Decreto, convenção, acordo e regulamento também valem.","Trabalho é o gênero; emprego é a espécie.","Relação de emprego pede 5 elementos.","Estágio é relação de trabalho, não de emprego."];
let studied=[];try{studied=JSON.parse(store.get("est-studied")||"[]")}catch(e){}
let chap=0,query="";
const ALL=[];Object.keys(CONTENT).forEach(c=>CONTENT[c].sections.forEach((s,i)=>ALL.push({id:c+"-"+i,c:+c,n:ALL.length,t:s[0],b:s[1]})));
function prog(){$$("#side [data-id]").forEach(b=>b.classList.toggle("ok",studied.includes(b.dataset.id)));const n=studied.length;$("progT").textContent=n+" de "+ALL.length+" seções estudadas";$("progB").style.width=(n/ALL.length*100)+"%"}
function render(){
 const src=rxSrc(query),re=src&&new RegExp(src,"i");
 const list=ALL.filter(s=>(!chap||s.c===chap)&&(!re||re.test(s.t+" "+s.b.join(" ").replace(/<[^>]+>/g,""))));
 $("count").textContent=query?(list.length?list.length+" seção(ões) encontrada(s)":""):"";
 let h="",last=0;
 list.forEach(s=>{
  if(s.c!==last){last=s.c;h+=`<div class="ch"><h2>${CONTENT[s.c].title}</h2><button class="pill go" data-c="${s.c}">Praticar ⚡</button></div>`}
  h+=`<details data-id="${s.id}" class="${studied.includes(s.id)?"done":""}" ${query?"open":""}><summary><i class="mini">${AV[s.n]}</i><span>${hl(s.t,src)}</span><i class="tick">✔</i></summary><div class="body"><div class="who"><span class="big">${AV[s.n]}</span><p class="bub">${SAY[s.n]}</p></div><ul>${s.b.map(t=>`<li>${hl(t,src)}</li>`).join("")}</ul><button class="dn">${studied.includes(s.id)?"Estudado ✔":"Marcar como estudado"}</button></div></details>`});
 $("sections").innerHTML=h||`<div class="empty">Nada encontrado para "<b></b>". Tente outra palavra ou mude o filtro.</div>`;
 const b=$("sections").querySelector(".empty b");if(b)b.textContent=query;
 $("clr").hidden=!query;$("exp").textContent="Expandir tudo";side(list);prog();
}
$("q").oninput=e=>{query=e.target.value;render();if(query&&scrollY<$("conteudo").offsetTop-60)tab("res")};
$("clr").onclick=()=>{$("q").value="";query="";render();$("q").focus()};
$$("#chips .chip").forEach(b=>b.onclick=()=>{chap=+b.dataset.c;$$("#chips .chip").forEach(x=>x.setAttribute("aria-pressed",x===b));render()});
$("exp").onclick=()=>{const ds=$$("#sections details"),open=ds.some(d=>!d.open);ds.forEach(d=>d.open=open);$("exp").textContent=open?"Recolher tudo":"Expandir tudo"};
$("sections").onclick=e=>{
 const d=e.target.closest("details");
 if(e.target.classList.contains("dn")){const id=d.dataset.id,on=!studied.includes(id);studied=on?[...studied,id]:studied.filter(x=>x!==id);store.set("est-studied",JSON.stringify(studied));d.classList.toggle("done",on);e.target.textContent=on?"Estudado ✔":"Marcar como estudado";if(on){const r=e.target.getBoundingClientRect();burst(r.left+40,r.top,10);beep(520)}prog()}
 if(e.target.classList.contains("go")){setScope(+e.target.dataset.c);tab("quiz")}
};
document.addEventListener("keydown",e=>{if(e.key==="/"&&document.activeElement.tagName!=="INPUT"){e.preventDefault();$("q").focus()}});
render();

/* Quiz */
const R=(a,b)=>a+Math.floor(Math.random()*(b-a+1)),pick=a=>a[R(0,a.length-1)];
const fm=x=>String(+(+x).toFixed(2)).replace(".",",");
const num=s=>parseFloat(String(s).replace(",","."));
const shuffle=a=>{a=a.slice();for(let k=a.length-1;k>0;k--){const j=Math.floor(Math.random()*(k+1));[a[k],a[j]]=[a[j],a[k]]}return a};
const sum=a=>a.reduce((x,y)=>x+y,0);
const uniq=(n,lo,hi)=>shuffle(Array.from({length:hi-lo+1},(_,i)=>lo+i)).slice(0,n);
const med=a=>{const s=a.slice().sort((x,y)=>x-y),n=s.length;return n%2?s[(n-1)/2]:(s[n/2-1]+s[n/2])/2};
const tb=(h,rows)=>"<table><tr>"+h.map(x=>"<th>"+x+"</th>").join("")+"</tr>"+rows.map(r=>"<tr>"+r.map(x=>"<td>"+x+"</td>").join("")+"</tr>").join("")+"</table>";
const cls=(L,h,f)=>tb(["Classe","fi"],L.map((l,i)=>[l+" a "+(l+h),f[i]]));
function mk(a,q,right,wrongs,steps,tbl=""){
 const S=t=>typeof t==="number"?fm(t):String(t);right=S(right);
 const seen=new Set([right]),w=[];
 wrongs.forEach(([t,y])=>{t=S(t);if(!seen.has(t)){seen.add(t);w.push({t,ok:false,why:y})}});
 const sf=right.replace(/[\d.,\-]/g,"");
 for(let d=1;w.length<3;d++){const t=fm(num(right)+d*(num(right)>9?1:.5))+sf;if(!seen.has(t)){seen.add(t);w.push({t,ok:false,why:"Resultado de um erro de conta. Refaça os passos abaixo com calma."})}}
 return {a,q,tbl,steps,opts:shuffle([{t:right,ok:true},...w.slice(0,3)])};
}
const G={1:[],2:[],3:[],4:[]};
const C=[
[1,"Segundo Reale, o Direito é uma ordenação ética, coercível, heterônoma e bilateral, na medida de quê?","Do bem comum",[["Da vontade do legislador","O Direito é medido pelo bem comum, e não pela vontade de quem faz a lei."],["Da opinião da maioria","Opinião da maioria não é o critério. A medida é o bem comum."],["Do interesse do Estado","O Estado tem força para punir, mas o objetivo é o bem comum da sociedade."]],["Reale lista seis características do Direito.","A última delas é a medida: o bem comum.","Logo, o Direito é ordenado na medida do bem comum."]],
[1,"Na definição de Reale, “ordenação” significa:","Um conjunto de regras",[["A força do Estado para punir","Isso é a coercibilidade, outra característica."],["Regras que orientam a sociedade","Isso descreve a ética, e não a ordenação."],["Um direito com um dever correspondente","Isso é a bilateralidade."]],["Ordenação vem de ordenar, organizar.","No caderno: ordenação = conjunto de regras.","As outras opções descrevem coercibilidade, ética e bilateralidade."]],
[1,"A coercibilidade do Direito é:","A força (poder) do Estado para punir",[["Leis feitas pelo poder legislativo","Isso é heteronomia: quem faz a lei."],["Um conjunto de regras","Isso é a ordenação."],["Organizar adequadamente a sociedade","Isso é o bem comum, o objeto do Direito."]],["Coercível lembra coerção: obrigar sob ameaça de sanção.","No caderno: força do Estado para punir (poder).","Sem essa força, a regra seria só um conselho."]],
[1,"Segundo o caderno, na heteronomia as leis são estabelecidas por:","Entidades competentes (poder legislativo, com contrapesos)",[["Cada pessoa, conforme a própria consciência","Isso seria autonomia. Na heteronomia a regra vem de fora do indivíduo."],["O empregador, para seus empregados","Na heteronomia a fonte são as entidades competentes, e não uma das partes."],["A sociedade sem nenhuma entidade","As leis vêm de entidades competentes, como o poder legislativo."]],["Hetero = outro; nomos = regra.","A regra vem de fora, das entidades competentes.","No caderno: poder legislativo, com contrapesos."]],
[1,"A bilateralidade do Direito significa que:","Onde há um direito, há também um dever",[["Existem dois poderes legislativos","Bilateral não fala de poderes, e sim de direito e dever."],["A lei vale para apenas duas pessoas","Bilateral não limita o número de pessoas."],["Toda norma tem duas sanções","A bilateralidade não trata de sanções, mas de direitos e deveres correspondentes."]],["Bilateral = dois lados.","Os dois lados são direito e dever.","Quando alguém tem um direito, outro tem o dever correspondente."]],
[1,"Segundo as anotações, qual é o objeto do Direito?","O bem comum",[["A punição","A punição é consequência da coercibilidade, não o objeto."],["A ordenação","Ordenação é uma característica (conjunto de regras)."],["O contrato de trabalho","É apenas um dos temas regulados, não o objeto do Direito em geral."]],["No caderno, o bem comum aparece com a seta: objeto do Direito.","Ele significa organizar a sociedade adequadamente.","As outras opções são características ou consequências."]],
[2,"Segundo o caderno, a escravidão surge a partir de:","Vitória de guerra",[["Revolução Industrial","A Revolução Industrial substituiu os escravos pelo trabalhador assalariado."],["Sistema feudal","O sistema feudal trouxe a servidão, e não a escravidão."],["Contratos de trabalho","Escravo não tinha contrato nem direitos."]],["O caderno associa a escravidão à vitória de guerra.","O exemplo citado foi o direito dos vikings.","Os vencidos eram tomados como escravos."]],
[2,"No sistema feudal, a forma de trabalho predominante era:","Servidão",[["Escravidão pela cor da pele","Esse sistema é registrado à parte, com mais de 200 anos."],["Trabalho assalariado","O assalariado cresce com a Revolução Industrial."],["Estágio","Estágio é relação de trabalho moderna, regida por lei própria."]],["Feudalismo = senhor feudal e servos.","O servo não tinha liberdade, mas recebia proteção.","Em troca, entregava a produção rural ao senhor."]],
[2,"O sistema escravo baseado na cor da pele durou:","Mais de 200 anos",[["Menos de 50 anos","O caderno registra mais de 200 anos."],["Cerca de 100 anos","O caderno fala em mais de 200 anos."],["Apenas durante a Revolução Industrial","Ele durou muito mais do que a Revolução Industrial."]],["Procure a anotação sobre o sistema escravo por cor da pele.","Ela diz: mais de 200 anos.","Também aparece como externalidade econômica."]],
[2,"Na Revolução Industrial, as relações de trabalho eram:","Precárias, com poder absoluto de contratar",[["Protegidas por ampla legislação","A proteção legal veio depois, por causa da precariedade."],["Reguladas por convenções coletivas nacionais","Os sindicatos só surgem depois, como reação às condições ruins."],["Baseadas na servidão","A servidão é do feudalismo. Agora surge o trabalhador assalariado."]],["O caderno diz: relações de trabalho precárias.","O empregador tinha poder absoluto de contratar.","As condições eram tão ruins que pessoas morriam."]],
[2,"Segundo o livro, o Direito do Trabalho nasce com:","A sociedade industrial e o trabalho assalariado",[["A escravidão antiga","Nela o trabalhador era coisa. Não havia Direito do Trabalho."],["O feudalismo","A servidão não é relação de emprego assalariado."],["As corporações de ofício","Elas foram extintas após a Revolução Industrial."]],["O livro afirma que prevalece esse entendimento.","O assalariado substitui o escravo com as máquinas.","Daí surgem as reivindicações e os sindicatos."]],
[3,"Qual conjunto lista as fontes anotadas no caderno?","CF, CLT, decretos e regulamentos, convenções e acordos coletivos e regulamento da empresa",[["Somente CF e CLT","Faltam decretos, normas coletivas e regulamento da empresa."],["CLT, súmulas e doutrina","Súmulas e doutrina não estão na lista do caderno."],["CF, CLT e contrato individual","O contrato individual não aparece na lista do caderno."]],["Releia a chave FONTES DO DIREITO.","Há cinco itens.","CF, CLT, decretos/regulamentos, convenções/acordos e regulamento da empresa."]],
[3,"Os artigos da Constituição Federal indicados como fonte no caderno são:","6º a 11",[["1º a 5º","São outros temas, como direitos e garantias fundamentais."],["12 a 20","Não são os artigos indicados no caderno."],["60 a 70","Não são os artigos indicados no caderno."]],["Veja a anotação: Constituição Federal (art. 6 – 11).","Esses artigos tratam dos direitos sociais e dos trabalhadores.","Resposta: 6º a 11."]],
[3,"Convenções e acordos coletivos são, segundo o caderno:","Fontes do Direito do Trabalho",[["Apenas sugestões sem valor jurídico","Estão na lista de fontes, então têm valor jurídico."],["Substitutos da Constituição","Não substituem a CF."],["Fontes só do Direito Civil","Estão na lista de fontes do Direito do Trabalho."]],["Procure convenções e acordos coletivos na lista.","Estão ligados pela chave às fontes do direito.","Logo, são fontes do Direito do Trabalho."]],
[3,"O regulamento da empresa é, segundo o caderno:","Fonte do Direito do Trabalho",[["Algo sem valor, por ser privado","Ele está na lista de fontes."],["Superior à Constituição","Nenhuma fonte infraconstitucional supera a CF."],["Válido só para o dono","Ele regula a relação com os empregados."]],["Ele é o último item da lista.","A chave o inclui entre as fontes.","Mas não pode contrariar a Constituição."]],
[3,"A sigla CLT significa:","Consolidação das Leis do Trabalho",[["Conselho das Leis do Trabalho","A sigla refere-se à consolidação, e não a um conselho."],["Código das Leis Trabalhistas","O nome é Consolidação, e não Código."],["Constituição das Leis do Trabalho","A Constituição é a CF. A CLT é uma consolidação de leis."]],["A lista de abreviaturas do livro traz o significado.","CLT é Consolidação das Leis do Trabalho.","Ela é de 1943 e reuniu as normas trabalhistas."]],
[4,"Quantos elementos são necessários para configurar a relação de emprego (anotação do caderno)?","5",[["3","O caderno registra 5 elementos."],["4","O caderno registra 5 elementos."],["6","O caderno registra 5 elementos."]],["O caderno diz: relação de emprego = 5 elementos.","Os cinco: pessoa física, pessoalidade, não eventualidade, onerosidade e subordinação.","Faltando um deles, não há relação de emprego."]],
[4,"Qual destes é um dos elementos da relação de emprego (CLT, art. 3º)?","Subordinação",[["Exclusividade","A exclusividade não é exigida."],["Contrato escrito","O contrato pode ser tácito ou verbal."],["Formação superior","Não é requisito."]],["Os elementos são pessoa física, pessoalidade, não eventualidade, onerosidade e subordinação.","Compare com as alternativas.","Só a subordinação está na lista."]],
[4,"O estágio é, segundo o caderno:","Relação de trabalho (específica)",[["Relação de emprego com os 5 elementos","O caderno associa o estágio à relação de trabalho."],["Uma fonte do direito","Fonte é de onde nasce a norma, e estágio é uma relação."],["Sinônimo de servidão","Servidão é do feudalismo."]],["Caderno: trabalho = estágio = relação de trabalho.","A seta aponta que é específica.","Em regra, não gera vínculo de emprego."]],
[4,"Em relação à relação de trabalho, a relação de emprego é:","Uma espécie dentro do gênero",[["O gênero, que inclui o estágio","É o contrário: o gênero é a relação de trabalho."],["Um sinônimo exato","Relação de emprego exige os 5 elementos. Trabalho é mais amplo."],["Algo sem relação com o trabalho","Emprego é uma das formas de trabalho."]],["Relação de trabalho: gênero (inclui estágio, autônomo etc.).","Relação de emprego: espécie, com os 5 elementos.","Toda relação de emprego é de trabalho, mas o inverso não vale."]]
];

const H=[
[1,"Uma regra cria direitos e deveres e foi aprovada pelo Legislativo, mas o Estado não tem como puni-la. Qual característica de Reale falta?","Coercibilidade",[["Bilateralidade","Ela cria direitos e deveres, então é bilateral."],["Heteronomia","Foi aprovada pelo Legislativo, então vem de entidade competente."],["Ordenação","Ela é uma regra, logo faz parte de um conjunto de regras."]],["Liste as características que a regra tem: bilateral, heterônoma e é regra.","A que falta é a força do Estado para punir.","Isso é coercibilidade."]],
[1,"Um colega diz: “heteronomia é a força do Estado para punir”. Qual é o erro dele?","Confundir heteronomia (quem faz a lei) com coercibilidade (força de punir)",[["Heteronomia é o dever correspondente a um direito","Isso é bilateralidade."],["Heteronomia é o conjunto de regras","Isso é ordenação."],["Não há erro","Há erro: ele trocou o conceito."]],["Heteronomia: leis feitas pelas entidades competentes.","Coercibilidade: poder do Estado de punir.","Ele misturou os dois."]],
[1,"Uma norma obriga o empregador, mas não dá direito a ninguém. Qual característica ela fere?","Bilateralidade",[["Ética","Ética trata de orientar a sociedade, e não de direito e dever."],["Coercibilidade","Não se fala em punição aqui."],["Bem comum","O problema descrito é a falta de direito correspondente."]],["Bilateral: onde há direito, há dever.","Aqui só há dever.","A falta do direito correspondente fere a bilateralidade."]],
[2,"Qual sequência segue a ordem do caderno?","Escravidão de guerra, servidão feudal, escravidão por cor da pele e Revolução Industrial",[["Servidão feudal, escravidão de guerra, Revolução Industrial e escravidão por cor da pele","A escravidão de guerra vem antes do feudalismo."],["Revolução Industrial, servidão feudal, escravidão de guerra e escravidão por cor da pele","A Revolução Industrial é a mais recente das quatro."],["Escravidão por cor da pele, servidão feudal, escravidão de guerra e Revolução Industrial","No caderno, ela vem depois do sistema feudal."]],["Siga a ordem das anotações.","Escravidão (guerra), sistema feudal, sistema escravo por cor da pele e Revolução Industrial.","Isso vai do mais antigo ao mais recente."]],
[2,"Por que o “poder absoluto de contratar” foi um problema na Revolução Industrial?","Sem limites legais, o empregador impunha condições tão precárias que pessoas morriam",[["Porque o trabalhador mandava no empregador","Era o contrário: o poder estava com o empregador."],["Porque o contrato de trabalho já protegia o empregado","A proteção veio depois, justamente por causa da precariedade."],["Porque o Estado proibia contratar","O problema era a falta de limites, e não a proibição."]],["O caderno registra: poder absoluto de contratar.","As condições eram tão precárias que pessoas morriam.","Daí a necessidade de um Direito do Trabalho protetor."]],
[3,"Um empregador afirma que seu regulamento interno vale mais que a Constituição. Qual conclusão está correta?","O regulamento é fonte, mas não pode contrariar a Constituição",[["O regulamento prevalece por ser mais específico","Regra específica não supera a Constituição."],["O regulamento não é fonte do Direito do Trabalho","Ele está na lista de fontes."],["A CF só vale para o Estado","Os arts. 6º a 11 tratam de direitos dos trabalhadores."]],["O regulamento está na lista de fontes.","A CF está acima das demais normas.","Logo, o regulamento é fonte, mas fica subordinado à CF."]],
[3,"Qual conjunto contém SOMENTE fontes da lista do caderno?","CF (arts. 6º a 11), CLT e convenções coletivas",[["CF, CLT e sentença judicial","Sentença judicial não está na lista."],["CLT, decretos e contrato individual","Contrato individual não está na lista."],["CF, regulamento da empresa e doutrina","Doutrina não está na lista."]],["Confira cada item com a chave FONTES DO DIREITO.","Só o primeiro conjunto tem todos os itens na lista.","Os outros trazem um intruso."]],
[4,"João trabalha há 2 anos, todos os dias, pessoalmente, recebe salário e segue ordens do chefe, mas o contrato diz “prestador”. Qual conclusão?","Há indícios dos elementos da relação de emprego, então pode haver vínculo",[["Não há vínculo, pois o nome do contrato decide","Vale a realidade dos fatos (primazia da realidade), e não o nome."],["É estágio, pois há ordens","Estágio tem lei própria e finalidade educativa."],["É relação civil, pois ele é “prestador”","O rótulo não decide. Os fatos mostram os elementos."]],["Pessoalidade, não eventualidade, onerosidade e subordinação aparecem nos fatos.","Vale a realidade, e não o rótulo do contrato.","Há indícios de relação de emprego."]],
[4,"Maria é estagiária. Qual afirmação sobre a natureza da relação está correta?","É relação de trabalho (específica), com regras próprias e, em regra, sem vínculo de emprego",[["É sempre relação de emprego com os 5 elementos","O caderno trata o estágio como relação de trabalho específica."],["Não é relação jurídica","Existe relação jurídica regulada em lei."],["É relação de compra e venda","Não se trata de compra e venda."]],["Caderno: estágio = relação de trabalho (específica).","Tem lei própria.","Em regra, não gera vínculo de emprego."]],
[4,"Um autônomo presta serviço eventual a vários clientes, sem receber ordens nem ter pessoalidade. Como classificar?","Relação de trabalho, mas não de emprego",[["Relação de emprego","Faltam subordinação, não eventualidade e pessoalidade."],["Estágio","Não há instituição de ensino nem finalidade educativa."],["Não há relação jurídica","Há relação de trabalho, ainda que sem vínculo de emprego."]],["Verifique os elementos da relação de emprego.","Faltam vários: subordinação, não eventualidade e pessoalidade.","Continua sendo relação de trabalho, o gênero."]]
];

let hard=0,qtyC=10,scope=0,qty=10,qi=0,cur=null,pts=0,combo=0,maxc=0,hits=0,tw,locked=true,used={},log=[],queue=[],endT;
function showBest(){const b=store.get("est-best-"+(hard?"h":"")+scope);$("best").textContent=(hard?"HARD: questões difíceis, pontos em dobro. ":"")+(b?"Recorde neste conteúdo: "+b+" pontos":"")}
function setScope(c){scope=c;$$("#qSeg .chip").forEach(x=>x.setAttribute("aria-pressed",+x.dataset.c===c));showBest()}
$$("#qSeg .chip").forEach(b=>b.onclick=()=>setScope(+b.dataset.c));
$$("#qLvl .chip").forEach(b=>b.onclick=()=>{hard=+b.dataset.h;$$("#qLvl .chip").forEach(x=>x.setAttribute("aria-pressed",x===b));showBest()});
$$("#qQty .chip").forEach(b=>b.onclick=()=>{qty=+b.dataset.n;qtyC=qty;$$("#qQty .chip").forEach(x=>x.setAttribute("aria-pressed",x===b))});
const show=id=>["qSetup","qPlay","qEnd"].forEach(x=>$(x).hidden=x!==id);
function countTo(el,to){const from=parseInt(el.dataset.v||0);el.dataset.v=to;const t0=performance.now();(function f(n){const p=Math.min((n-t0)/500,1);el.textContent=Math.round(from+(to-from)*p);if(p<1)requestAnimationFrame(f)})(t0)}
function nextQ(){
 if(hard){const hp=H.filter(r=>!scope||r[0]===scope);if(!queue.length)queue=shuffle(hp);return mk(...queue.pop())}
 const pool=C.filter(r=>!scope||r[0]===scope),gens=scope?G[scope]:[...G[1],...G[2],...G[3]];
 if(pool.length&&(!gens.length||Math.random()<.5)){if(!queue.length)queue=shuffle(pool);return mk(...queue.pop())}
 return pick(gens)();
}
const ol=s=>"<ol>"+s.map(x=>"<li>"+x+"</li>").join("")+"</ol>";
function start(){
 qty=qtyC;{const pc=(hard?H:C).filter(r=>!scope||r[0]===scope).length;qty=Math.min(qty||pc,pc)}
 qi=0;pts=0;combo=0;maxc=0;hits=0;used={};log=[];queue=[];
 $("hPts").dataset.v=0;$("hPts").textContent=0;$("hA").textContent=0;$("hC").textContent="x0";$("hCombo").classList.remove("hot");
 $("nodes").innerHTML=qty?"<i></i>".repeat(qty):"";$("nodes").hidden=!qty;
 $("l5").disabled=false;resetEnd();show("qPlay");ask();
}
function ask(){
 cur=nextQ();locked=false;
 $$("#nodes i").forEach((n,k)=>n.classList.toggle("cur",k===qi));
 $("qNum").textContent="questao_"+String(qi+1).padStart(2,"0")+(qty?" / "+qty:"")+(hard?" [HARD]":"");
 $("qFb").hidden=true;$("next").hidden=true;$("qTbl").innerHTML=cur.tbl;$("qOpts").innerHTML="";
 clearInterval(tw);let n=0;$("qText").textContent="";
 tw=setInterval(()=>{$("qText").textContent=cur.q.slice(0,++n);if(n>=cur.q.length)clearInterval(tw)},8);
 cur.opts.forEach((o,k)=>{const b=document.createElement("button");b.className="opt";b.innerHTML="<kbd>"+(k+1)+"</kbd><span></span>";b.lastChild.textContent=o.t;b.onclick=()=>answer(k);$("qOpts").appendChild(b)});
}
function answer(k){
 if(locked)return;locked=true;clearInterval(tw);
 const q=cur,o=q.opts[k],right=q.opts.find(x=>x.ok),hit=o.ok;$("qText").textContent=q.q;
 const btns=$$("#qOpts .opt");btns.forEach((b,x)=>{b.disabled=true;if(q.opts[x].ok)b.classList.add("ok");else if(x===k)b.classList.add("bad")});
 const r=btns[k].getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2;
 if(hit){combo++;maxc=Math.max(maxc,combo);hits++;$("hA").textContent=hits;const g=(100+(combo-1)*25)*(hard?2:1);pts+=g;countTo($("hPts"),pts);burst(cx,cy,18);beep(660);beep(880,.15);
  const f=document.createElement("div");f.className="fl";f.textContent="+"+g;f.style.cssText="left:"+cx+"px;top:"+cy+"px";document.body.appendChild(f);setTimeout(()=>f.remove(),1000)}
 else{combo=0;$("term").classList.remove("shake");void $("term").offsetWidth;$("term").classList.add("shake");beep(180,.25)}
 $("hC").textContent="x"+combo;$("hCombo").classList.toggle("hot",combo>=3);
 const nd=$$("#nodes i")[qi];if(nd){nd.classList.remove("cur");nd.classList.add(hit?"y":"n")}
 log.push({q:q.q,hit,steps:q.steps});
 $("qFb").hidden=false;
 $("qFb").innerHTML=hit?"<b>Correto!</b><details><summary>Ver resolução</summary>"+ol(q.steps)+"</details>":"<b>Não foi dessa vez.</b><div class='ftabs' role='tablist'><button class='ft on' data-t='why' role='tab' aria-selected='true'>❌ Por que não é essa</button><button class='ft' data-t='stp' role='tab' aria-selected='false'>🧠 Raciocínio certo</button></div><div class='why tp' data-p='why'><b>Por que não era \""+o.t+"\":</b> "+o.why+"</div><div class='stp tp' data-p='stp' hidden><b>Passo a passo até \""+right.t+"\":</b>"+ol(q.steps)+"</div>";
 $("next").hidden=false;$("next").textContent=qty&&qi===qty-1?"Ver resultado":"Próxima";$("next").focus();
}
$("qFb").onclick=e=>{const b=e.target.closest(".ft");if(!b)return;$$("#qFb .ft").forEach(x=>{const on=x===b;x.classList.toggle("on",on);x.setAttribute("aria-selected",on)});$$("#qFb .tp").forEach(x=>x.hidden=x.dataset.p!==b.dataset.t)};
$("next").onclick=()=>{qi++;qty&&qi>=qty?finish():ask()};
function fifty(){if(locked||used.f)return;used.f=1;$("l5").disabled=true;shuffle($$("#qOpts .opt").filter((b,x)=>!cur.opts[x].ok)).slice(0,2).forEach(b=>b.classList.add("gone"));beep(400)}
$("l5").onclick=fifty;
function resetEnd(){const b=$("endBtn");clearTimeout(endT);delete b.dataset.c;b.textContent="⏹ Encerrar quiz"}
$("endBtn").onclick=()=>{const b=$("endBtn");if(b.dataset.c){resetEnd();clearInterval(tw);log.length?finish():(show("qSetup"),showBest())}else{b.dataset.c=1;b.textContent="Confirmar encerramento";endT=setTimeout(resetEnd,3000)}};
document.addEventListener("keydown",e=>{
 if($("qPlay").hidden||document.activeElement.tagName==="INPUT")return;const k=e.key.toLowerCase();
 if(!locked&&"1234".includes(k)&&k&&+k<=cur.opts.length)answer(+k-1);
 else if(k==="f")fifty();
 else if(locked&&(k==="enter"||k===" ")&&!$("next").hidden&&document.activeElement!==$("next")){e.preventDefault();$("next").click()}
});
function finish(){
 const a=log.length,pct=Math.round(hits/a*100);
 countTo($("endScore"),pts);$("eH").textContent=hits+"/"+a;$("eC").textContent="x"+maxc;$("eP").textContent=pct+"%";
 $("rank").textContent=pct>=90?"🏆 Mestre do Direito do Trabalho":pct>=70?"⚖️ Quase advogado":pct>=50?"🌱 Estagiário promissor":"📚 Calouro em treino";
 $("rev").innerHTML=log.map(l=>"<li><details><summary>"+(l.hit?"✅":"❌")+" "+l.q+"</summary>"+ol(l.steps)+"</details></li>").join("");
 const prev=parseInt(store.get("est-best-"+(hard?"h":"")+scope)||"0");if(pts>prev)store.set("est-best-"+(hard?"h":"")+scope,pts);
 show("qEnd");
 if(pct>=70)for(let k=0;k<6;k++)setTimeout(()=>burst(innerWidth*(.15+Math.random()*.7),innerHeight*.3,24,undefined,220),k*180);
}
$("start").onclick=start;
$("again").onclick=()=>{show("qSetup");showBest()};
$("toSum").onclick=()=>tab("res");
showBest();

/* Navegação, lateral e parallax */
const nav=$("nav"),lks=$$("#nav .lk");
const navScroll=()=>nav.classList.toggle("solid",scrollY>40);
addEventListener("scroll",navScroll,{passive:true});navScroll();
const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)lks.forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+e.target.id))}),{rootMargin:"-45% 0px -50% 0px"});
["home","conteudo","quiz"].forEach(id=>so.observe($(id)));
$("home").addEventListener("mousemove",e=>{const x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;$$("#bg [data-d]").forEach(g=>{const d=+g.dataset.d;if(!g.hasAttribute("transform")){g.style.transform=`translate(${-x*d}px,${-y*d}px)`}})});
function side(list){
 let h="",last=0;
 list.forEach(s=>{if(s.c!==last){last=s.c;h+=`<div class="gl">Parte ${s.c}</div>`}h+=`<button data-id="${s.id}" class="${studied.includes(s.id)?"ok":""}">${s.t}</button>`});
 $("side").innerHTML=h||'<div class="gl">Sem resultados</div>';
 side.o&&side.o.disconnect();
 side.o=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){$$("#side button").forEach(b=>b.classList.toggle("act",b.dataset.id===e.target.dataset.id));const a=$("side").querySelector(".act");if(a&&innerWidth<=860)$("side").scrollTo({left:a.offsetLeft-40,behavior:"smooth"})}}),{rootMargin:"-30% 0px -60% 0px"});
 $$("#sections details").forEach(d=>side.o.observe(d));
}
$("side").onclick=e=>{const b=e.target.closest("button");if(!b)return;const d=$("sections").querySelector(`details[data-id="${b.dataset.id}"]`);if(!d)return;d.open=true;d.scrollIntoView({behavior:"smooth",block:"start"});d.classList.remove("fl2");void d.offsetWidth;d.classList.add("fl2")};
$("q").addEventListener("keydown",e=>{if(e.key==="Escape"&&query)$("clr").click()});
render();
const bgBlur=()=>{const b=Math.min(scrollY/(innerHeight*.9),1)*14;document.documentElement.style.setProperty("--bl",b.toFixed(1)+"px")};
addEventListener("scroll",bgBlur,{passive:true});bgBlur();
