let Owner = document.getElementById("Owner")
let PickupLocation = document.getElementById("PickupLocation")
let Destination = document.getElementById("Destination")
let time = document.getElementById("time")
let AvailableSeats = document.getElementById("AvailableSeats")

//let outputVar
let resultData = []

document.getElementById("create-ride").addEventListener("submit", (e)=>{
	e.preventDefault();
	let data = {
		ride_owner : Owner.value,
		pickup_location : PickupLocation.value,
		destination : Destination.value,
		take_off_time : time.value,
		number_of_available_seats : AvailableSeats.value
	}
	

	let options = {
		method : "POST",
		body : JSON.stringify(data),
		headers :{
			"Content-Type" : "application/json"
		},
		mode : "cors"
	} 


	fetch("http://localhost:3000/api/v1/rides", options)
		.then((result)=> result.json())
		.then((data) => {
			//outputVar = ''
			console.log(data)
			localStorage.setItem('output', JSON.stringify(data))

			resultData.push(data)

			localStorage.output = JSON.stringify(resultData)

			console.log(resultData)

		})
		.catch((err)=> console.log(err))
})


//localStorage.setItem('output', JSON.stringify(data))