

var theNumber = Math.floor(Math.random()*100+1);

function clickquess()
{
var guess= document.getElementById('guess');
var output= document.getElementById('output');
var myNumber=guess.value;
if(myNumber<theNumber)
{
 output.value= "Too Low, Try again";
}
//alert(myNumber);
else if(myNumber>theNumber)
{
 output.value= "Too high, Try again";
}
else if(myNumber==theNumber)
{
 output.value= "You won! You guessed the correct number. Play again"
 alert("You won! the number was "+ theNumber +"");
 theNumber = Math.floor(Math.random()*100+1);
}
}
