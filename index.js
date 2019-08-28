window.onload = function greet(){
	var myDate = new Date()
	var hours = myDate.getHours()
	var greeting = document.getElementById("greeting")

	if (hours < 12 && hours > 6) {
		result = "Good Morning"
	} else if (hours >= 12 && hours < 18) {
		result = "Good afternoon"
	} else if (hours >= 18 && hours < 22) {
		result = "Good evening"
	} else {
		result = "Good night"
	}


	greeting.innerHTML = result
}
