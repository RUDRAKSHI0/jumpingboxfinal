function isTouching(object1,object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object2.y < object2.height/2 + object1.height/2) {
      
      return true;
    }
    else {
      return false;
    } 
  }
  function bounceoff(object1,object2){
  if (object1.x - object2.x < object2.width/2 +object2.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y <object2.height/2 + object1.height/2
    )
     {
       
      object1.velocityX = object1.velocityX * (-1);
      object1.velocityY = object1.velocityY * (-1);
      return true;
 // fixedRect.velocityX = fixedRect.velocityX * (-1);
}
else 
{ return false;}
  }

  
  function edgesbounce(object){
    if (object.x<0 || object.x>800 ){
      object.velocityX = object.velocityX * (-1);
      var z1 = random ( -3,10);
      object.velocityY = z1;
    }
    
    if (object.y<0  ){
      //object.velocityX = object.velocityX * (-1);
      object.velocityY = object.velocityY* (-1);
      var z = random(-3,8);
      object.velocityX = z;
    }
  
  }
