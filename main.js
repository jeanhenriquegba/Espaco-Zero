let mvDireita = mvEsquerda = false;
let dir = 1;
let pontos = 0;
let hudinimigo = 60;
//---------------------------------------------------------
const nave = document.querySelector("#jogadorbox");
const controles = document.getElementById("controles");
const projetil = document.getElementById("projetil");
const placar = document.getElementById("placarrec");
const placa = document.getElementById("placa");
const roundsix = document.getElementById("roundsix");
const inimigo = document.getElementById("inimigo");
const inimigohud = document.getElementById("inimigohud");
const hudborda = document.getElementById("hudborda");
const direita = document.getElementById("direita");
const esquerda = document.getElementById("esquerda");
const insigniassix = document.getElementById("insigniassix");
//---------------------------------------------------------
document.onkeydown = controleteclado;
function controleteclado(e) {
var key = e.keyCode;
if(key == 65){ //esquerda
  moverEsquerda();
}else if(key == 68){ //direita
  moverDireita();
    };
};
//---------------------------------------------------------
function moverDireita(){
  mvEsquerda = false;
  mvDireita = true;
   move();
};
function moverEsquerda(){
  mvDireita = false;
  mvEsquerda = true;
   move();
};
direita.addEventListener("click",moverDireita);
esquerda.addEventListener("click",moverEsquerda);
//---------------------------------------------------------


//---------------------------------------------------------
function move(){
  if(mvDireita){
    
    if(dir < 80 && dir > 0){
      dir += 1;
    };
    nave.style.left = dir + "%";
    projetil.style.left = (dir + 4) + "%";
    if(nave.style.left == "81%"){
    projetil.style.left = "89%";
    };
    
  }else 
  if(mvEsquerda && dir >= 80 || dir > 2){
    dir -= 1;
    nave.style.left = dir + "%";
    projetil.style.left = (dir + 12) + "%";
    if(nave.style.left == "1%"){
    projetil.style.left = "9%";
    };
  };
};
//---------------------------------------------------------

//---------------------------------------------------------
function posinimigo(){
  let randomic =  Math.floor((Math.random() * 72) + 9);
  inimigo.style.left = randomic + "%";
  hudborda.style.left = (randomic + 1) + "%";
  
}; posinimigo();
//---------------------------------------------------------

//---------------------------------------------------------
let game = setInterval(()=>{
 
  move();
  //--------------------------------------//
  let xinimigo = inimigo.style.left.replace("%","");
  let xprojetil = projetil.style.left.replace("%","");
  let xnave = nave.style.left.replace("%","");
  //--------------------------------------//

  //--------------------------------------//
  if(xprojetil == xinimigo){
    let dano = document.getElementById("dano");
    dano.play();
    dano.volume = 0.5;
    
    posinimigo();
    if(posinimigo() == "9%"){
      posinimigo();
    };
    pontos++;
    placarrec.textContent = pontos;
    inimigo.style.animation = "danoinomigo 300ms linear infinite";
    setTimeout(()=>{
      inimigo.style.animation = "";
    },300);
    hudinimigo -= 2;
    inimigohud.style.width = hudinimigo + "px";
    //--------------------------------------//


    //--------------------------------------//
    if(pontos == 30){
        
      roundsix.style.background = "url(imgs/circulo.png)";
      roundsix.style.display = "block";
      roundsix.style.animation = "roundsix 1s linear both";
      
      setTimeout(()=>{
        roundsix.style.display = "none";
        roundsix.style.animation = "";
        roundsix.style.background = "";
        insigniassix.innerHTML += '<img src="imgs/circulo.png">'
      },1000);
      
      inimigo.style.background = "url(imgs/inimigo2.png)";
      hudinimigo = 60;
      inimigohud.style.width = hudinimigo + "px";
      
    //--------------------------------------//
      
    } else if (pontos == 60) {
      
      roundsix.style.background = "url(imgs/triangulo.png)";
      roundsix.style.display = "block";
      roundsix.style.animation = "roundsix 1s linear both";
      
      setTimeout(()=>{
        roundsix.style.display = "none";
        roundsix.style.animation = "";
        roundsix.style.background = "";
        insigniassix.innerHTML += '<img src="imgs/triangulo.png">'
      },1000);
      
      inimigo.style.background = "url(imgs/inimigo3.png)";
      hudinimigo = 60;
      inimigohud.style.width = hudinimigo + "px";
    

    //--------------------------------------//


    } else if (pontos == 90) {
      
      roundsix.style.background = "url(imgs/quadrado.png)";
      roundsix.style.display = "block";
      roundsix.style.animation = "roundsix 1s linear both";
      
      setTimeout(()=>{
        roundsix.style.display = "none";
        roundsix.style.animation = "";
        roundsix.style.background = "";
        insigniassix.innerHTML += '<img src="imgs/quadrado.png">'
      },1000);
      
      inimigo.style.background = "url(imgs/inimigo4.png)";
      hudinimigo = 60;
      inimigohud.style.width = hudinimigo + "px";
    
    //--------------------------------------//


    }else if (pontos == 120) {
      clearInterval(game);
      //--------------------------------------//
      controles.style.display = "none";
      nave.style.display = "none";
      projetil.style.animation = "a";
      projetil.style.display = "none";
      inimigo.style.display = "none";
      hudinimigo = 0;
      inimigohud.style.display = "none";
      hudborda.style.display = "none";
      //--------------------------------------//
      insigniassix.style.padding = "10px";
      insigniassix.style.display = "flex";
      insigniassix.style.gap = "20px";
      insigniassix.style.left = "60px";
      insigniassix.style.top = "220px";
      insigniassix.style.width = "250px";
      insigniassix.style.height = "85px";
      //--------------------------------------//
      placa.style.left = "80px";
      placa.style.top = "150px";
      placa.style.fontSize = "40px";
    }
}
},20);
//-----------------------------------------------------