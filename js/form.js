const formAction = function() {
	
	 var vPlayerName = document.querySelector("#txtFullName").value;
	 
  localStorage.setItem("PlayerName", vPlayerName);
  
  var vPlayerAge = document.querySelector("#txtAge").value;
  localStorage.setItem("PlayerAge", vPlayerAge);


	
	location.href="round1.html";
}

document.querySelector("#btnStart").addEventListener("click", formAction);