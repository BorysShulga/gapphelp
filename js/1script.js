//from https://www.w3schools.com/xml/xml_http.asp
var xhttp = new XMLHttpRequest(); 
xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {  
		console.log(xhttp.responseText); 

		var response = JSON.parse(xhttp.responseText);
		var people = response.people;

		var output = '';
		for(var i = 0;i < people.length;i++){
		output += '<li>'+people[i].addrass.cyty+'</li>';
		}
		document.getElementById('people').innerHTML = output;
		}
};
xhttp.open("GET", "json/people.json", true);
xhttp.send()

