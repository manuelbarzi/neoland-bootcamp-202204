/*
- dividir list en lineas
- para cada linea localizar parentesis
- extraer lo que hay dentro
- identificar la unidad (si no es h, convertir)
- sumar (accumular)
- devolver la suma
*/

function extractTotalHours(list) {
	var lines = list.split('\n')
	
	var total = 0
	
	for (var i = 0; i < lines.length; i++) {
		var line = lines[i]
	
		var from = line.indexOf('(') + 1
		var to = line.indexOf(')')
	
		var time = line.substring(from, to)
	
		var numeric = time.substring(0, time.length - 1)
	
		var value = Number(numeric)
	
		//if (time.indexOf('d') > -1)
	   if (time.includes('d'))
			value = value * 24
	   //else if (time.indexOf('m') > -1)
	   else if (time.includes('m'))
			value = value / 60
	
	   total += value
	}
 
	return total
 }