class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        //Load all 3 images of Catapult step1
        

        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        //Add 2 images of catapult step 2

        

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            //Add color to the rubberband using colozilla step 6
         
            //Add stroke step 7

            //Create first line step 4

            //Create second line step 5

            //Add rubberband image step 8

            //write if condition to draw different line at differenet end points depending upon the postion of the bird.step 9
        
           
            
            pop();
        }
    }
    
}