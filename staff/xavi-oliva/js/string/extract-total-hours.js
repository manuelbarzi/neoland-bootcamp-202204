/*
- dividir list en lineas
- para cada linea localizar parentesis
- extraer lo que hay dentro
- identificar la unidad (si no es h, convertir)
- sumar (accumular)
- devolver la suma
*/

function extractTotalHours_2(string) {
     var suma = 0
     
     for (i=0; i<string.length; i++){
         if (string[i]>='0' && string[i]<='9'){
             if (string[i+1]==='h'){
                 suma = suma + Number(string[i])
             } 
             else if (string[i+1]==='d') {
                 suma = suma + 24*Number(string[i])
             }
             else if (string[i+1]==='m') {
                 suma = suma + 0.5
             }
         }
     }
     return suma
 }
 
 
 
 function extractTotalHours(list){  
     total = 0
     // genera una lista con cada una de las lineas
     var lineas=list.split('\n')
     // recorre cada una de lasl ineas
     for (var i=0; i<lineas.length; i++){
         //extraigo la linea
         var linea=lineas[i]
         // establezco los limites para buscar numeros
         var from = linea.indexOf('(')+1
         var to = linea.indexOf(')')
         // busco los datos que estan entre los limites
         var time = linea.substring(from, to)
         // extraigo numero
         var value = Number(time.substring(0, time.length-1))
         
         // segun la letra que incluye sumo horas correspondientes
         // if (time.indexOf('d') > -1)
         if (time.includes('d'))
             value = value*24
         else if (time.includes('m'))
             value = value/60
         
         total = total + value    
     }
     return total   
 }
 // 37.5