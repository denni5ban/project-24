class ComputerArcher {
    constructor(x, y, w, h) {
        var options = {
            isStatic: true
        }
        this.w = w;
        this.h = h;
        this.body = Matter.Bodies.rectangle(x, y, w, h, options);
        this.image = loadImage("./assets/computerArcher.png");
        World.add(world, this.body);
       
        Matter.Body.setAngle(this.body, PI / 2); // -90 degree
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.w, this.h);
        pop();
    }
}
