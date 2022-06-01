/*
1o - TTD Hacemos el spec
     conectamos a la BBDD y hacemos toda la config necesaria
     Borramos todos los documentos de notes (deleteMany)
     Borramos todos los documentos de users (deleteMany)
     Creamos un caso de uso concreto (happy path)
     creamos un usuario y guardamos el id para luego poder usarlo para siguientes pasos
     creamos varias notas para ese usuario (unas 5)
     LLamamos a la función logic correspondiente para comprobar su funcionamiento (happy path)
     Comprobamos si la respuesta es un array, tiene todas las notas introducidas (length) y
     comprobamos que son las notas que he metido en el aterior paso
     Borramos todos los documentos de notes (deleteMany)
     Borramos todos los documentos de users (deleteMany)
     Crearemos otro caso 

2o - la lógica del retrieveNotes (la función)
     pasandole el userId y el note.id,
     con validación de errores

3o - la llamada de la lógica a la api
     y el manejo de errores de status

4o - a la vez del 3er punto, comprobar conexión 
     con cliente/api en el Insomnia
     */