var age

age = prompt("Qu'elle age avez vous ?");

age = parseInt(age);

if (age<=17){
	alert("Vous n'etes pas encore majeur.");
}

else if (18<=age && age<=49){
	alert("Vous etes majeur mais pas encore senior.");
}

else if (50<=age && age<=59){
	alert("Vous etes senior mais pas encore retraite");
}

else if (age>=60){
	alert("Vous etes retraite, profitez de votre temps libre !");
}

