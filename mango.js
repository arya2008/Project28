class mango{
    constructor(x,y,r){
    var options={
        isStatic:true,
        restitution:0,
        friction:1,
    }
    this.body=Bodies.circle(x,y,r,options)
    this.r=r
    this.image=loadImage("mango.png")
    World.add(world,this.body)
    }
    display(){
        ellipseMode(CENTER)
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r)
}
}