var e=globalThis,t={},a={},n=e.parcelRequire17cc;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){a[e]=t},e.parcelRequire17cc=n);var r=n.register;r("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>a,set:e=>a=e,enumerable:!0,configurable:!0});var a,n=new Map;a=function(e,t){for(var a=0;a<t.length-1;a+=2)n.set(t[a],{baseUrl:e,path:t[a+1]})}}),r("b7CwH",function(e,t){e.exports=new URL("tijera.6a2fdda1.svg",import.meta.url).toString()}),r("6O4FV",function(e,t){e.exports=new URL("piedra.c88f7ccf.svg",import.meta.url).toString()}),r("gYWi2",function(e,t){e.exports=new URL("papel.5f79bbf0.svg",import.meta.url).toString()}),r("eluKL",function(e,t){e.exports=new URL("ganaste.1eea6986.svg",import.meta.url).toString()}),r("b70r7",function(e,t){e.exports=new URL("empate.acc190a0.png",import.meta.url).toString()}),r("jqGhO",function(e,t){e.exports=new URL("perdiste.342a139d.svg",import.meta.url).toString()}),n("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["dZpbI","index.ee1f7f1c.js","cK2FM","tijera.6a2fdda1.svg","lyYKJ","piedra.c88f7ccf.svg","jYzGd","papel.5f79bbf0.svg","c1fAi","ganaste.1eea6986.svg","2w0Vc","empate.acc190a0.png","eA72X","perdiste.342a139d.svg"]'));const s={data:{currentGame:{computerPlay:"",userPlay:""},history:{computerScore:0,userScore:0}},listeners:[],setUserMove(e){this.getState().currentGame.userPlay=e},setComputerMove(e){this.getState().currentGame.computerPlay=e},runPlayComputer(){let e=Math.floor(9*Math.random())+1,t="papel";t=e<4?"piedra":e>=4&&e<=6?"papel":"tijera",this.setComputerMove(t)},whoWins(e,t){let a="empate";return"papel"==e&&"piedra"==t&&(a="user"),"papel"==e&&"tijera"==t&&(a="computer"),"piedra"==e&&"tijera"==t&&(a="user"),"piedra"==e&&"papel"==t&&(a="computer"),"tijera"==e&&"papel"==t&&(a="user"),"tijera"==e&&"piedra"==t&&(a="computer"),this.pushHistory(a),a},pushHistory(e){let t=this.getState();"computer"==e?t.history.computerScore++:"user"==e&&t.history.userScore++},getState(){return this.data},setState(e){for(let t of(this.data=e,this.listeners))t()},subscribe(e){this.listeners.push(e)}},o="/desafio5-piedrapapeltijera";function i(){return location.host.includes("lukebro82.github.io")}const l=[{path:/\/welcome/,component:function(e){let t=document.createElement("div");t.className="welcome",t.innerHTML=`
  <h1 class="welcome-title">Piedra</h1>
  <h1 class="welcome-title">Papel</h1>
  <h1 class="welcome-title">Tijera</h1>
 
  <el-button class="empezar-button">Empezar</el-button>

  <div class="hands-div">  
  <hands-el hand="piedra" type="hand-img"></hands-el>
  <hands-el hand="papel"  type="hand-img"></hands-el>
  <hands-el hand="tijera" type="hand-img"></hands-el>
  </div>
  `;let a=t.querySelector(".empezar-button");return a?.addEventListener("click",function(){e.goTo("/comojugar")}),t}},{path:/\/comojugar/,component:function(e){let t=document.createElement("div");t.className="comojugar-div",t.innerHTML=`
      <h2 class="comojugar-title">Presion\xe1 jugar y eleg\xed: <br> piedra, papel o tijera <br> antes de que <br> pasen los 5<br>segundos.</h2>


      <el-button class="jugar-button">\xa1Jugar!</el-button>


      <div class="hands-div">  
         <hands-el hand="piedra" type="hand-img"></hands-el>
         <hands-el hand="papel"  type="hand-img"></hands-el>
         <hands-el hand="tijera" type="hand-img"></hands-el>
      </div>

      `;let a=t.querySelector(".jugar-button");return a?.addEventListener("click",()=>{e.goTo("/elegir")}),t}},{path:/\/elegir/,component:function(e){s.setUserMove("papel");let t=document.createElement("div");t.className="select";let a=6,n="hand-img ",r="hand-img ",o="hand-img ",i=setInterval(()=>{a--,t.innerHTML=`                 
                <div class="div-redondo"> <h2 class="h2-redondo">${a}</h2> </div>


                <div class="hands-div">  
                  <hands-el hand="piedra" type="${n}" class="piedra"></hands-el>
                  <hands-el hand="papel"  type="${r}" class="papel"></hands-el>
                  <hands-el hand="tijera" type="${o}" class="tijera"></hands-el>
                 </div>

                 `;let l=t.querySelector(".piedra"),d=t.querySelector(".papel"),c=t.querySelector(".tijera");l?.addEventListener("click",()=>{n="hand-grande",r="hand-none",o="hand-none",s.setUserMove("piedra")}),d?.addEventListener("click",()=>{n="hand-none",r="hand-grande",o="hand-none",s.setUserMove("papel")}),c?.addEventListener("click",()=>{n="hand-none",r="hand-none",o="hand-grande",s.setUserMove("tijera")}),0===a&&(clearInterval(i),s.runPlayComputer(),e.goTo("/versus"))},1e3);return t}},{path:/\/versus/,component:function(e){let t=document.createElement("div");t.className="select-end";let a=s.getState(),n=a.currentGame.computerPlay,r=a.currentGame.userPlay;t.innerHTML=`  
  
  <hands-el hand="${n}" type="hand-grande" class="select-end-computer"></hands-el>
  <hands-el hand="${r}"  type="hand-grande" class="select-end-user"></hands-el>
   
  `;let o=1,i=setInterval(()=>{0==--o&&(clearInterval(i),e.goTo("/resultado"))},1e3);return t}},{path:/\/resultado/,component:function(e){let t;let a=s.getState(),n=a.currentGame.userPlay,r=a.currentGame.computerPlay,o=s.whoWins(n,r);"user"==o&&(t="Ganaste"),"empate"==o&&(t="Empate"),"computer"==o&&(t="Perdiste");let i=document.createElement("div");i.className="resultado-div",i.innerHTML=`
     
    <div class="${t}">  
    
    <winlost-el resultado="${t}" ></winlost-el>

    <score-el></score-el>
    
    <el-button class="button-reinicar">Volver</el-button></div>
  
        `;let l=i.querySelector(".button-reinicar");return l?.addEventListener("click",()=>{e.goTo("/welcome")}),i}}],d={tijera:n("b7CwH"),piedra:n("6O4FV"),papel:n("gYWi2")};class c extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"});let e=document.createElement("style");e.textContent=`
          .hand-img {           
              width: 125px;
              height: 225px;   
          }
          .hand-grande {
            width:125px;
            height:225x;
          }
  
          .hand-none {
            opacity:50%;
           
      }
       
      @media (max-width: 460px) {
          .hand-img {
            width: 70px;
            height: 125px;
        }
         .hand-grande{
            width:145px;
            height:200px;
          
            }

            .hand-none {
              opacity:50%;
            
          }
          `,this.render(),this.shadow.appendChild(e)}render(){let e=this.getAttribute("type"),t=this.getAttribute("hand");this.shadow.innerHTML=`
          <img class="${e}" src="${d[t]}">
          `}}customElements.define("hands-el",c);class h extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"});let e=document.createElement("style");e.innerHTML=`
    .root{
          width: 330px;
          height: 80px;
          border-style: solid; 
          border-radius: 10px;          
          border-width: 10px;
          background-color:#006CFC;
          border-color: #001997;
          font-size: 45px;
          font-family: "Work Sans", sans-serif;
          color: white;
         }`,this.shadow.appendChild(e),this.render()}render(){let e=document.createElement("button");e.textContent=this.textContent,e.className="root",this.shadow.appendChild(e)}}customElements.define("el-button",h);class p extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"});let e=document.createElement("style");e.innerHTML=`
      .score {
        font-family: "Work Sans", sans-serif;
        width: 250px;
        height: 230px;
        border: solid;
        border-color: black;
        border-radius: 15px;
        border-width: 10px;
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        }

        .textoh1{
           font-size: 40px;
        }

        .div-score{
          display: flex;
          flex-direction: column;
          align-items: end;
        }
        
        .textoh2 {
          font-family: "Work Sans", sans-serif;
          margin:0;  
        }

        `,this.shadow.appendChild(e)}connectedCallback(){this.render()}render(){let e=s.getState(),t=e.history.userScore,a=e.history.computerScore,n=document.createElement("div");n.className="score",n.innerHTML=`
    <h1 class="textoh1">SCORE</h1>
    <div class="div-score"><h1 class="textoh2">Vos: ${t}</h1> 
          <h1 class="textoh2">Compu: ${a}</h1>
    </div>
   
       `,this.shadow.appendChild(n)}}customElements.define("score-el",p);const u={Ganaste:n("eluKL"),Empate:n("b70r7"),Perdiste:n("jqGhO")};class m extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"});let e=document.createElement("style");e.innerHTML=`
      
    .estrella {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: relative;
      }
      
      .imagen {
        position: relative;
        z-index: 0;
      }
      
      .texto {
        font-size: 45px;
        text-shadow: 0 0 8px black;
        color: white;
        padding: 0px;
        margin: 0px;
        position: absolute;
        z-index: 1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
        `,this.render(),this.shadow.appendChild(e)}render(){let e=this.getAttribute("resultado");this.shadow.innerHTML=`
    <div class="estrella">
    <img class="imagen" src="${u[e]}">
    <h1 class="texto">${e}</h1>
  </div>
          `}}customElements.define("winlost-el",m),function(e){function t(e){let t=i()?o+e:e;history.pushState({},"",t),a(t)}function a(a){let n=i()?a.replace(o,""):a;for(let a of l)if(a.path.test(n)){let n=a.component({goTo:t});e.firstChild&&e.firstChild.remove(),e.appendChild(n)}}"/"==location.pathname||"/desafio5-piedrapapeltijera/"==location.pathname?t("/welcome"):a(location.pathname),window.onpopstate=function(){a(location.pathname)}}(document.querySelector(".root"));
//# sourceMappingURL=index.ee1f7f1c.js.map
