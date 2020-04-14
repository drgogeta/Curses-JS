function defectValues(name, age, country) {
	var name = name || 'Daniel' 
	var age = age || 23
	var country = country || 'Medellin'
	console.log(name, age, country)
}

function defectValues2(name='Daniel', age = 23, country = 'Medellin') {
	console.log(name, age, country)
}

defectValues
defectValues2