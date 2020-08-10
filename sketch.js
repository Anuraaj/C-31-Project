//var World = Matter.World.frameCount 
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particles = [];

function setup() 
{
  createCanvas(480,600);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(240, 590, 800, 20);
  ground2 = new Ground(5, 300, 10, 600);
  ground3 = new Ground(475,300,10,600); 
 
  particle1 = new Particle(240,10,5);
  

  divider1 = new Box(80,480,10,200);
  divider2 = new Box(160,480,10,200);
  divider3 = new Box(240,480,10,200);
  divider4 = new Box(320,480,10,200);
  divider5 = new Box(400,480,10,200);

  plinko1 = new Plinko(40,90,10);
  plinko2 = new Plinko(90,90,10);
  plinko3 = new Plinko(140,90,10);
  plinko4 = new Plinko(190,90,10);
  plinko5 = new Plinko(240,90,10);
  plinko6 = new Plinko(290,90,10);
  plinko7 = new Plinko(340,90,10);
  plinko8 = new Plinko(390,90,10);
  plinko9 = new Plinko(440,90,10);
  
  plinko10 = new Plinko(65,135,10);
  plinko11 = new Plinko(115,135,10);
  plinko12 = new Plinko(165,135,10);
  plinko13 = new Plinko(215,135,10);
  plinko14 = new Plinko(265,135,10);
  plinko15 = new Plinko(315,135,10);
  plinko16 = new Plinko(365,135,10);
  plinko17 = new Plinko(415,135,10);

  plinko18 = new Plinko(40,180,10);
  plinko19 = new Plinko(90,180,10);
  plinko20 = new Plinko(140,180,10);
  plinko21 = new Plinko(190,180,10);
  plinko22 = new Plinko(240,180,10);
  plinko23 = new Plinko(290,180,10);
  plinko24 = new Plinko(340,180,10);
  plinko25 = new Plinko(390,180,10);
  plinko26 = new Plinko(440,180,10);

  plinko27 = new Plinko(65,225,10);
  plinko28 = new Plinko(115,225,10);
  plinko29 = new Plinko(165,225,10);
  plinko30 = new Plinko(215,225,10);
  plinko31 = new Plinko(265,225,10);
  plinko32 = new Plinko(315,225,10);
  plinko33 = new Plinko(365,225,10);
  plinko34 = new Plinko(415,225,10);

  plinko35 = new Plinko(40,270,10);
  plinko36 = new Plinko(90,270,10);
  plinko37 = new Plinko(140,270,10);
  plinko38 = new Plinko(190,270,10);
  plinko39 = new Plinko(240,270,10);
  plinko40 = new Plinko(290,270,10);
  plinko41 = new Plinko(340,270,10);
  plinko42 = new Plinko(390,270,10);
  plinko43 = new Plinko(440,270,10);
  
}

function draw() 
{
  background("black");  
  Engine.update(engine);
  
  if(frameCount%60===0)
  {
   particles.push(new Particle(random (width/2-10, width/2+10), 10,10));
  
  }

  for (var j = 0; j < particles.length; j++) 
  { 
    particles[j].display();
    
  }
  
  ground1.display();
  ground2.display();
  ground3.display();

  divider1.display();
  divider2.display();
  divider3.display();
  divider4.display();
  divider5.display();
  
  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();
  plinko9.display();

  plinko10.display();
  plinko11.display();
  plinko12.display();
  plinko13.display();
  plinko14.display();
  plinko15.display();
  plinko16.display();
  plinko17.display();
  
  plinko18.display();
  plinko19.display();
  plinko20.display();
  plinko21.display();
  plinko22.display();
  plinko23.display();
  plinko24.display();
  plinko25.display();
  plinko26.display();

  plinko27.display();
  plinko28.display();
  plinko29.display();
  plinko30.display();
  plinko31.display();
  plinko32.display();
  plinko33.display();
  plinko34.display();
  
  plinko35.display();
  plinko36.display();
  plinko37.display();
  plinko38.display();
  plinko39.display();
  plinko40.display();
  plinko41.display();
  plinko42.display();
  plinko43.display();
  //particle1.display();
  drawSprites();
}

/*function createBall()
{
  particle1 = new Particle(240,10,8);
}*/