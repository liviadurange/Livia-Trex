var trex, trex_running;
var solo,imagemSolo;
var edges
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  imagemSolo = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  
  //criando o trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  solo= createSprite  (300,170,600,2);
  solo.addImage("solo",imagemSolo); 
  //adicione dimensão e posição ao trex
  trex.scale = 0.5;
  trex.x = 50
}


function draw(){
  //definir a cor do plano de fundo 
  background("gray");
  solo.velocityX=-10
  //registrando a posição y do trex
  console.log(trex.y)
  
  //pular quando tecla de espaço for pressionada
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  if(solo.X<0){
    solo.X=solo.width/2;
  }
 ;
  
 //impedir que o trex caia
  trex.collide(solo);
  drawSprites();
}
function gravity () {
  trex.velocityY+=0.5;
}