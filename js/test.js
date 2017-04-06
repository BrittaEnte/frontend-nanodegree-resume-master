
var enten =" ich bin toll";

var wahrheit= enten.replace("toll", "dumm");

console.log(wahrheit);

//$("#main").append(wahrheit);





var ente ={};

ente.essen ="nudeln";

var weiteressen = function () {
	console.log("weiteressen"); 
}

var nudeln =0;
while (ente.essen==="nudeln"){
	weiteressen();
	nudeln +=1;
	if (nudeln===10){
		ente.essen= "verfressen";

	}
}

console.log(ente.essen); 