let bankAmount = 0;

if( localStorage.getItem("bankAmount"))
{
	bankAmount=localStorage.getItem("bankAmount");
	if(bankAmount<=0)
	{
		location.href="lose.html";
	}
	document.querySelector(".amountWon").innerText="$"+bankAmount;
	
	localStorage.setItem("bankAmount", "0");
}
