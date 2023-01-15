function bT(){
	addLineToHTMLTable("Michel","Buffa"); 
	addLineToHTMLTable("Ravi","Shah"); 
	addLineToHTMLTable("Mukul","Shah");
	addLineToHTMLTable ("Bibek","Aacharya");
	addLineToHTMLTable("Barack","Obama");
}

function addLineToHTMLTable(firstName,lastName){
	var tableBody = document.querySelector("#tcontent"); 
	
	var newRow = tableBody.insertRow(); //inserts a new row

	var firstNameCell = newRow.insertCell(); //inserts a new Cell for FirstName 

	var lastNameCell = newRow.insertCell(); //inserts a new Cell for LastName 


	firstNameCell.innerHTML = firstName; 
	lastNameCell.innerHTML = lastName; 

}