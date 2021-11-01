var box;
function setup()
{
 createCanvas(400,400)
 box = createSprite(40,40,40,40);
 box.shapeColor = "green";
 box.velocityX=5;
}

function draw()
{
 background(220);
 drawSprites();
}

