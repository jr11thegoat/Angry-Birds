class Chain{
    constructor(bodyA, BodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            lenght: 10
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }


    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeweight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }

}