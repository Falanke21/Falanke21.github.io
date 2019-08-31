window.onload = function greet(){
	var myDate = new Date()
	var hours = myDate.getHours()
	var displayTime = String(myDate.getHours()) + ":" + String(myDate.getMinutes())
	var greeting = document.getElementById("greeting-1")
	var result = "It's " + displayTime + " now"

	greeting.innerHTML = result

	if (hours < 12 && hours > 6) {
		result = "Good morning from Downtown Toronto"
	} else if (hours >= 12 && hours < 18) {
		result = "Good afternoon from Downtown Toronto"
	} else if (hours >= 18 && hours < 22) {
		result = "Good evening from Downtown Toronto"
	} else {
		result = "Good night from Downtown Toronto"
	}

	greeting = document.getElementById("greeting-2")
	greeting.innerHTML = result


}
