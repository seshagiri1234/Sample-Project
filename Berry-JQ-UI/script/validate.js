function validateFn() {

var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var contact = document.getElementById("contact").value;
var emailreg 
= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

console.log(name,email,contact);

	if(name=='')
		{
		alert("Name is empty");
		document.getElementById("name").focus();
		return false;
		}
	else if(!document.getElementById("male").checked &&
		 	 !document.getElementById("female").checked)
		alert("Gender not selected");
	else 
		
		if(email=='' || !emailreg.test(email))
		alert("Email is not correct");
	
	else if(contact=='' || isNaN(contact))
		alert("Contact number is not correct");
	else
	{
		alert("Good to go!");
		return true;
	}
}

function validatecontact(){
	var contact = document.getElementById("contact").value;
	if(contact=='' || isNaN(contact)){
		alert("Contact number is not correct");
		document.getElementById("contact").focus();
	}
}