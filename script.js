
randomStr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";



function makeid(l) {
	result = "";
  for(let i=0; i<l; i++)
	{
		result+=randomStr.charAt(Math.floor(Math.random()*62));
	}
	return result;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
