function search(){

	var effects = document.getElementById("effects")
	var drugs = document.createElement('div')
		effects.appendChild(drugs)
		drugs.className = "drugs"
	var key = "aaZ6zkTinK4V4fHbUQTurZYeqU4N30luGurb4dkt"
	var searchTerm = document.getElementById("fdaSearch").value

	$.ajax({
    
	   	url: "https://api.fda.gov/drug/event.json?api_key="+ key + "&search=" + searchTerm+"&count=patient.reaction.reactionmeddrapt.exact",
	   	dataType: "json",
	   	success: function(data) {
	   		for(i=0;i<15;i++){
	    		var results = (data.results[i].term)
          if(data.results[i].term === "DRUG INEFFECTIVE"){
            results[i].term = ""
          }else if(data.results[i].term === ""){
            document.write("Try another search") 
          }else{
            		$(".drugs").append("<h2>" + results + "</h2> ")
				console.log(data.results[i].term)
          }
	    
			}
	   	},
	   type: 'GET'
	});
}