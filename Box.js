class Box{
    //initialise an object
    constructor(x,y,width,height){
        var options ={
            restitution: 1.0
        }
        this.body = Bodies.rectangle(x,y,width,height, options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(255);
        rect(pos.x, pos.y, this.width, this.height);
        pop();
        //rect function does not allow us to rotate the rectangles

        //we are going to capture the angle where our box should draw. 
        //push() - capture the new setting
        //translate() - changing the angle of the box
        //pop() - reverts to old setting
    }


}