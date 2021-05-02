class Rubber{
	constructor(x,y, width, height){
	var options = {
	'density':4,
	'friction':1.0,
	'restitution':0.5

	};
		this.body = Bodies.rectangle(x, y, width, height, options);
		World.add(world, this.body);
		this.width = width
		this.height = height

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rotate(this.body.angle);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			rect(0,0,this.width,this.height)
			pop()
	}

}