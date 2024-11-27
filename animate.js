var santaMove = 0;
var kidMove = 0;

function ScreenSize()
{ 
  let w = screen.width;
  let h = screen.height;
  let n = h / w; 
  let dec = n.toFixed(2); // decimal of screen
  let per = dec * 100; // percentage of screen
  
  if (w < 1100)
  { 
    document.write("Your screen width needs to be at least 1100px resolution.<br><br>");
  }
  if (per < 50 || per > 70) // less than 50% or greater than 70% of screen height
  {
	document.write("Your screen height needs to be between 50% and 70% of pixel screen width resolution.");
  }	  
	  
}  

function FlyingSanta()
{ 
  document.getElementById('santa').style.right = santaMove + "px";
  if (screen.width >= 1600) { santaMove = santaMove + 8; }
  else if (screen.width < 1600) { santaMove = santaMove + 4; }
	  
  if (santaMove == screen.width)
  {
	location.reload(); // reset mode
  } 
  
  // Christmas Tree Transformed with Presents for people
  if (santaMove > (2 * (screen.width / 3)))
  {
	 document.body.style.backgroundImage = "url('images/night-sky-bg2.png')";
	 document.getElementById('decorate_tree').src = "images/decorate-tree.png";
	 document.getElementById('decorate_tree').style.display = "block";
	 
	let gift = document.getElementsByClassName('gifts');
	for (let kid = 0; kid < gift.length; kid++)
    {
	  gift[kid].style.display = "block";
	}
  }
  else 
  {  
    document.body.style.backgroundImage = "url('images/night-sky-bg.png')";  
	document.getElementById('decorate_tree').style.display = "none";
	let gift = document.getElementsByClassName('gifts');
	for (let kid = 0; kid < gift.length; kid++)
    {
	  gift[kid].style.display = "none";
	}
  } 
  

  // Santa waving his wand
  if (santaMove > (6 * (screen.width / 10)) && santaMove < (2 * (screen.width / 3)))
  {
	document.getElementById('wand').src = "images/the-wand.png";
    document.getElementById('wand').style.display = "block";
	document.getElementById('wand').style.right = santaMove + "px";
	document.getElementById('star').style.display = "block";
	document.getElementById('star').src = "images/star.png";
  }
  else 
  { 
    document.getElementById('wand').style.display = "none"; 
	document.getElementById('star').style.display = "none";
  }
  
 
  /* Door 1 *************************************************************************   */
  if (santaMove > (3 * (screen.width / 5)) && santaMove < screen.width) // 60% to 100% screen width mark
  {
	kidMove = kidMove + 1;
	if (kidMove == 2)
	{ 
      document.getElementById('door1').style.visibility = "visible";  // opens door1
      document.getElementById('kid1').src = "images/door1-kid-frame1.png"; // black hair boy
	  document.getElementById('kid1').style.transform = "translate(-10px, 0px)";
	}
	if (kidMove == 4)
	{ 
	  document.getElementById('kid1').src = "images/door1-kid-frame2.png";
	  document.getElementById('kid1').style.transform = "translateY(20px)";
	}
    if (kidMove == 6)
	{
	  document.getElementById('kid1').src = "images/door1-kid-frame3.png";
	  document.getElementById('kid1').style.transform = "translateY(40px)";
	}
  }
  
  if (santaMove == (3 * (screen.width / 5))) { kidMove = 0; } // reset for Door 1
  
  /* Door 2 ***************************************************************************  */
  if (santaMove > (screen.width / 2) && santaMove < (3 * (screen.width / 5))) // 50% to 60% screen width mark
  {
	kidMove = kidMove + 1;
	if (kidMove == 2)
	{ 
      document.getElementById('door2').style.visibility = "visible";  // opens door2
	  document.getElementById('kid2a').style.display = "block";
      document.getElementById('kid2a').src = "images/door2a-kid-frame1.png"; // red hair girl
	  document.getElementById('kid2a').style.transform = "translate(-10px, 0px)";
	}
	if (kidMove == 4)
	{ 
      document.getElementById('door2').style.visibility = "visible";  // opens door2
      document.getElementById('kid2a').src = "images/door2a-kid-frame2.png"; 
	  document.getElementById('kid2a').style.transform = "translate(-10px, 20px)";
	  
	  document.getElementById('kid2b').style.display = "block";
	  document.getElementById('kid2b').src = "images/door2b-kid-frame1.png"; // gold hair girl
	  document.getElementById('kid2b').style.transform = "translate(-10px, 0px)";
	}
	if (kidMove == 7)
	{ 
      document.getElementById('door2').style.visibility = "visible";  // opens door1
      document.getElementById('kid2a').src = "images/door2a-kid-frame3.png"; 
	  document.getElementById('kid2a').style.transform = "translate(-10px, 30px)";
	  
	  document.getElementById('kid2b').style.display = "block";
	  document.getElementById('kid2b').src = "images/door2b-kid-frame2.png";
	  document.getElementById('kid2b').style.transform = "translate(4px, 20px)";
	  
	  document.getElementById('kid2c').style.display = "block";
	  document.getElementById('kid2c').src = "images/door2c-kid-frame1.png"; // brown hair boy
	  document.getElementById('kid2c').style.transform = "translate(-10px, 0px)";
	  
	}
	if (kidMove == 10)
	{ 
      document.getElementById('door2').style.visibility = "visible";  // opens door1
      document.getElementById('kid2a').src = "images/door2a-kid-frame3.png"; 
	  document.getElementById('kid2a').style.transform = "translate(-10px, 40px)";
	  
	  document.getElementById('kid2b').style.display = "block";
	  document.getElementById('kid2b').src = "images/door2b-kid-frame3.png"; // gold hair girl
	  document.getElementById('kid2b').style.transform = "translate(4px, 30px)";
	  
	  document.getElementById('kid2c').style.display = "block";
	  document.getElementById('kid2c').src = "images/door2c-kid-frame2.png"; // brown hair boy
	  document.getElementById('kid2c').style.transform = "translate(-15px, 30px)";
	}
	if (kidMove == 11)
	{
      document.getElementById('kid2c').style.display = "block";
	  document.getElementById('kid2c').src = "images/door2c-kid-frame3.png"; // brown hair boy
	  document.getElementById('kid2c').style.transform = "translate(-15px, 35px)";
	}
	if (kidMove == 13)
	{ 
      document.getElementById('door2').style.visibility = "visible";  // opens door2
	  document.getElementById('kid2a').style.display = "block";
      document.getElementById('kid2a').src = "images/door2a-kid-frame4.png"; 
	  document.getElementById('kid2a').style.transform = "translate(-10px, 60px)";
	  
	  document.getElementById('kid2b').style.display = "block";
	  document.getElementById('kid2b').src = "images/door2b-kid-frame4.png"; // gold hair girl
	  document.getElementById('kid2b').style.transform = "translate(4px, 36px)";
	  
	  document.getElementById('kid2c').style.display = "block";
	  document.getElementById('kid2c').src = "images/door2c-kid-frame4.png"; // brown hair boy
	  document.getElementById('kid2c').style.transform = "translate(-25px, 40px)";
	}
  }
   if (santaMove == (screen.width / 2)) { kidMove = 0; } // reset for Door 2
   
  /* Door 3 ******************************************************************************************** */
  if (santaMove > (2 * (screen.width / 5)) && santaMove < (screen.width / 2)) // 40% to 50% screen width mark
  {
    kidMove = kidMove + 1;
    if (kidMove == 2)
	{
	  document.getElementById('door3').style.visibility = "visible";  // opens door3
	  document.getElementById('kid3a').style.display = "block";
	  document.getElementById('kid3a').src = "images/door3a-kid-frame1.png"; // light green hair boy
	  document.getElementById('kid3a').style.transform = "translate(-10px, 0px)";
    }	
    if (kidMove == 4)
	{
	  document.getElementById('kid3a').style.display = "block";
	  document.getElementById('kid3a').src = "images/door3a-kid-frame2.png"; // light green hair boy
	  document.getElementById('kid3a').style.transform = "translate(-20px, 20px)";
	  
	  document.getElementById('kid3b').style.display = "block";
	  document.getElementById('kid3b').src = "images/door3b-kid-frame1.png"; // yellow hair girl
	  document.getElementById('kid3b').style.transform = "translate(-10px, 0px)";
	  
	  
    }	
	if (kidMove == 6)
	{
	  document.getElementById('door3').style.visibility = "visible";  // opens door3
	  document.getElementById('kid3a').style.display = "block";
	  document.getElementById('kid3a').src = "images/door3a-kid-frame3.png"; // light green hair boy
	  document.getElementById('kid3a').style.transform = "translate(-30px, 40px)";
	  
	  document.getElementById('kid3b').style.display = "block";
	  document.getElementById('kid3b').src = "images/door3b-kid-frame2.png"; // yellow hair girl
	  document.getElementById('kid3b').style.transform = "translate(-10px, 45px)";
    }
	
	if (kidMove == 8)
	{
	  document.getElementById('kid3b').style.display = "block";
	  document.getElementById('kid3b').src = "images/door3b-kid-frame3.png"; // yellow hair girl
	  document.getElementById('kid3b').style.transform = "translate(20px, 50px)";
    }		
  }
  
    if (santaMove == (2 * (screen.width / 5))) { kidMove = 0; } // reset for Door 3
	
  /* Door 4 ******************************************************************************************** */
  if (santaMove >= (screen.width / 4) && santaMove < (2 * (screen.width / 5))) // 25% to 40% screen width mark
  {
    kidMove = kidMove + 1;
 	if (kidMove == 2)
	{
	  document.getElementById('door4').style.visibility = "visible";  // opens door4
	  document.getElementById('kid4').src = "images/door4-kid-frame1.png"; // 
	  document.getElementById('kid4').style.transform = "translate(-10px, 0px)";
    }
	if (kidMove == 4)
	{
	  document.getElementById('door4').style.visibility = "visible";  // opens door4
	  document.getElementById('kid4').src = "images/door4-kid-frame2.png"; // 
	  document.getElementById('kid4').style.transform = "translate(0px, 40px)";
    }
  }
}

function Audio()
{ 
    let audio = document.getElementById('PlayMusic');
    audio.controls = true;
	audio.addEventListener("play", function() { audio.style.visibility = "hidden";  Animate();});
}

function Animate()
{  
  setInterval(FlyingSanta, 100);  // (1/10) of millisecond
}