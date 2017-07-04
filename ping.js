var ball = document.getElementById('infiBall');
initial();


moveBall();

function initial(){

	var maxHeight = document.body.clientHeight;
	var maxWidth = document.body.clientWidth;
	ball.left = Math.round(Math.random()*maxWidth-50);
    ball.top = Math.round(Math.random()*maxHeight-50);
    console.log(ball.top)
	
	ball.collision = 0;
   	ball.mass = 1;
   	ball.xspeed = Math.round(Math.random()*8-4);
   	ball.yspeed = Math.round(Math.random()*8-4);
					
}

function moveBall()
{		
	setInterval(function(){
			if (ball.left<0) 
			{
				ball.left = 0;
				ball.xspeed *= -1;
			}		// BOUNDRIES Left
			
			if (ball.left > window.innerWidth-50) {
				ball.left = window.innerWidth-50;
				ball.xspeed *= -1;
			}	// BOUNDRIES Right
			
			if (ball.top<0) {
				ball.top = 0;
				ball.yspeed *= -1;
			}		// BOUNDRIES Top
			
			if (ball.top>window.innerHeight-50) {
				ball.top = innerHeight-50;
				ball.yspeed *= -1;
			}	// BOUNDRIES Bottom
			
			//GET THE NEW POSITION
			ball.left += ball.xspeed;
			ball.top += ball.yspeed;
			
			//APPLY THE NEW POSITION
		    //2D Transform
			ball.style.WebkitTransform = "translate3D("+ball.left+"px,"+ball.top+"px,0px)";//3D Transform fo better Performance
	},5);
   		
}