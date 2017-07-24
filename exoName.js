var name, myArray=[], chaine;

while(name = prompt('Entrez le prenom de votre soeur / frere')){

	if(name) {
		myArray.push(name);
	}

	else {
		break;
	}

}

if (myArray.length > 0) {
	chaine=myArray.join(' ');
	alert(chaine);
}

else {
	alert("Tableau vide !");
}
