var logoimg, logo;
var logoimg2, logo2;
var pt1, pt2;
var namec, name1, ctnew ,ct1;
var continew, bgp, bg;
var mincut, mincutpng;
var mb, mbpng;
 var txt1, txt1png;
 var txt2, txt2png;
 var beeing, bee;
 var txt3png, txt3;
 var dhypng, dhy;
 var txt4, txt4png;
 var back, backpng;


function preload(){
logoimg = loadImage("md.webp");
namec = loadImage("aider.png");
ct1 = loadImage("grcb.png");
bgp = loadImage("bg.jpg");
mincutpng = loadImage("minor Cut.jpg");
mbpng = loadImage("mbbs.jpg");
txt1png = loadImage("txt1.png");
txt2png = loadImage("txt2.jpg");
beeing = loadImage("bee.png");
dhypng = loadImage("dehy2.jpg")
txt3png = loadImage("txt3.jpg");
txt4png = loadImage("txt4.png");
backpng = loadImage("back.png");
}

function setup() {
 createCanvas(320,540,);
 name1 = createSprite(170,250,7,7);
 name1.addImage(namec);
 name1.scale = 0.18;
 name1.visible = true;


 logo = createSprite(160,120,7,7);
 logo.addImage(logoimg);
 logo.scale = 0.4;
 logo.visible = true;


 ctnew = createSprite(160,340,100,100);
 ctnew.addImage(ct1);
 ctnew.scale = 0.2;
 ctnew.visible = true;


 mincut = createSprite(8330,80,100,100);
 mincut.addImage(mincutpng);
 mincut.scale = 0.25;
 mincut.visible = false;


 mb = createSprite(23350,80,100,100);
 mb.addImage(mbpng);
 mb.scale = 0.25;
 mb.visible = false;


 txt1 = createSprite(250,80,100,100);
 txt1.addImage(txt1png);
 txt1.scale = 0.25;
 txt1.visible = false;


 txt2 = createSprite(250,80,100,100);
 txt2.addImage(txt2png);
 txt2.scale = 0.25;
 txt2.visible = false;


 bee = createSprite(8330,240,100,100);
 bee.addImage(beeing);
 bee.scale = 0.25;
 bee.visible = false;


 txt3 = createSprite(250,80,100,100);
 txt3.addImage(txt3png);
 txt3.scale = 0.25;
 txt3.visible = false;

 dhy = createSprite(2530,240,100,100);
 dhy.addImage(dhypng);
 dhy.scale = 0.755;
 dhy.visible = false;
 
 txt4 = createSprite(270,80,100,100);
 txt4.addImage(txt4png);
 txt4.scale = 0.25;
 txt4.visible = false;


 back = createSprite(2700,400,100,100);
 back.addImage(backpng);
 back.scale = 0.1;
 back.visible = false;
}
   function draw() {   
     background(bgp);
        if(mousePressedOver(ctnew)) {
            continew();

    
}
     if (mousePressedOver(mincut)) {
     txt1.visible = true;
      mb.visible = false;
      bee.visible = false;
      dhy .visible = false;
      txt1.scale = 0.5;
      txt1.x = 160;
      txt1.y = 260;
      back.x = 270
      back.y = 400;
      back.visible = true;
      
 }  
    if (mousePressedOver(mb)) {
    txt2.visible = true;
     mincut.visible = false;
     bee.visible = false;
     dhy .visible = false;
     txt2.scale = 0.5;
     txt2.x = 160;
     txt2.y = 280;
     back.x = 270
     back.y = 400;
     back.visible = true;
     

    }
 
        if (mousePressedOver(bee)) {
     txt3.visible = true;
     mincut.visible = false;
     mb.visible = false;
     dhy.visible = false;
     txt3.scale = 0.5;
     txt3.x = 160;
     txt3.y = 280;
     bee.x = 80;
     bee.y = 80;
     back.x = 270;
     back.y = 400;
     back.visible = true;
     
    }

    if (mousePressedOver(dhy)) {
        txt4.visible = true;
        mincut.visible = false;
        mb.visible = false;
        bee.visible = false;
        txt4.scale = 0.5;
        txt4.x = 160;
        txt4.y = 280;
        dhy.x = 80
        dhy.y = 80;
        back.x = 270;
        back.y = 400;
        back.visible = true;
        
       }

        if (mousePressedOver(back)) {
            mincut.visible = true;
            mb.visible = true;
            bee.visible = true;
            dhy.visible = true;
            txt1.visible = false;
            txt2.visible = false;
            txt3.visible = false;
            txt4.visible = false;
            back.visible = false;
            mb.x = 250;
            mb.y = 80;
            mincut.x = 80;
            mincutpng.y = 80;
            bee.x = 80;
            bee.y = 240;
            dhy.x = 250;
            dhy.y = 240;
            back.y = 2000;
        }


    drawSprites();
}

function continew() {
    name1.visible = false;
     logo.visible = false;
      ctnew.visible = false;
      mincut.visible = true;
      mb.visible = true;
      bee.visible = true;
      dhy.visible = true;
            mb.x = 250;
            mb.y = 80;
            mincut.x = 80;
            mincutpng.y = 80;
            bee.x = 80;
            bee.y = 240;
            dhy.x = 250;
            dhy.y = 240;

}


