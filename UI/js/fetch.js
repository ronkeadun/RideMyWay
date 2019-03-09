let outputVar = ''
var outputVal = []
let output = JSON.parse(localStorage.getItem('output'))

console.log(output)

var mag = 65, cols = 4, newleft, newtop;

	
for(var x=0; x < output.length; x++){
	var outputData = output[x]
	outputData.forEach((ride, col)=>{
		outputVar = `
			<div class="requests-card">
				<ul>
					<li>
						<strong> 
						    <i class="fa fa-user-circle-o" aria-hidden="true"></i>
						        Ride Owner: 
						</strong> ${ride.ride_owner}</li>
					<li><strong>Pickup Location:</strong> ${ride.pickup_location}</li>
					<li><strong>Destination:</strong> ${ride.destination}</li>
					<li><strong>Take off time:</strong> ${ride.take_off_time}</li>
					<li><strong>Number of Available Seats:</strong> ${ride.number_of_available_seats}</li>
		      	</ul>
		      	<button class="join-ride-btn"> Join Ride </button>
		    </div>
		`
		let stringToDom = new DOMParser().parseFromString(outputVar, 'text/html')
		let newString = stringToDom.body.firstChild
		var innerElment = document.getElementById("output").appendChild(newString)
		outputVal.push(innerElment)
		//console.log(outputData[col])
		console.log(outputVal)
		//console.log(innerElment) 

		/*const requestsBoard = document.querySelector('.requests-board');
		const div = document.createElement('div');
		div.className = "requests-card";
		div.innerHTML = outputVar;
		outputVal.push(div)
		//var innerElment=requestsBoard.appendChild(div);
		let newDiv = requestsBoard.lastElementChild;
		requestsBoard.insertBefore(div, newDiv.nextSibling);*/


		for (var i = 1; i < outputVal.length; i++) {
			console.log(outputVal[i])
			if (i % cols == 0) {
				newtop = (outputVal[i-cols].offsetTop + outputVal[i-cols].offsetHeight) + mag
	 			outputVal[i].style.top = newtop + 'px'
			} 
			else{
	 			if (outputVal[i-cols]) {
	 				newtop = (outputVal[i-cols].offsetTop + outputVal[i-cols].offsetHeight) + mag
	 				outputVal[i].style.top = newtop + 'px'
	 			};
	 			newleft = (outputVal[i-1].offsetLeft + outputVal[i-1].offsetWidth) + mag
	 			outputVal[i].style.left = newleft + 'px'
			};
		};

	})	
}

//var blocks = document.getElementById("outputChildren").children
//console.log(blocks)
//console.log(blocks.length)


//console.log(document.getElementById("output"))

/*let table = '';
table += '<table>'
//let td = ''
for(var x=0; x < output.length; x++){
	var outputData = output[x]
	table += '<tr>'
	outputData.forEach((ride)=>{
		
		outputVar = `
			<div class="requests-card">
				<ul>
					<li>
						<strong> 
						    <i class="fa fa-user-circle-o" aria-hidden="true"></i>
						        Ride Owner: 
						</strong> ${ride.ride_owner}</li>
					<li><strong>Pickup Location:</strong> ${ride.pickup_location}</li>
					<li><strong>Destination:</strong> ${ride.destination}</li>
					<li><strong>Take off time:</strong> ${ride.take_off_time}</li>
					<li><strong>Number of Available Seats:</strong> ${ride.number_of_available_seats}</li>
		      	</ul>
		      	<button class="join-ride-btn"> Join Ride </button>
		    </div>	
		`
		console.log(ride.ride_owner + ' ' + x)
		for (var j = 0; j < 4; j++) {
			table += '<td>' + outputVar + '</td>'
			console.log('j ' +ride.ride_owner + ' ' + j)
		}
	})
	
	table += '</tr>'
}
table += '</table>'

/*let table = '';
let rows = output.length;
let cols = 4;
table += '<table>'
for (var i = 0; i < rows; i++) {
    table += '<tr>'
    for (var j = 0; j < cols; j++) {
		//table += '<td>' + outputVar + '</td>'
		table += '<td>' + outputVar + '</td>'
    };
    table += '</tr>'
};
table += '</table>'*/
console.log(output.length)



// let newElement = document.createElement('div')
// newElement.textContent = 'I am a new Element'
// console.log(newElement)