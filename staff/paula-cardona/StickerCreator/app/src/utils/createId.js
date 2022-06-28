function createId() {
    return Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2)
}
export default createId

/*tenemos que crear una ID cuando se crea la nota para buscarla y
saber como era: identificador único.
- math random: número entre el 0 y el 0.99 periodico
-date.now : fecga desde 1 de enenro de 1971
-función to fixed para ver cuantos decimales queremos*/
