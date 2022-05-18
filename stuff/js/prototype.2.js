function Student(name, age, gender) {
    this.name = name
    this.age = age
    this.gender = gender

    // this.study = function() {
    //    return this.name + ': ' + '🤓 📖'
    // }
}

Student.prototype.study = function() {
    return this.name + ': ' + '🤓 📖'
}

Student.prototype.exam = function() {
    return this.name + ': ' + '🤓 🧾'
}

w = new Student('Wendy', 32, 'female')
p = new Student('Peter', 24, 'male')

log = console.log

log(w.study())
log(p.study())

log(w.exam())
log(p.exam())

log(w.study === p.study)
log(w.exam === p.exam)
// VM3232:24 Wendy: 🤓 📖
// VM3232:25 Peter: 🤓 📖
// VM3232:27 Wendy: 🤓 🧾
// VM3232:28 Peter: 🤓 🧾
// VM3232:30 true
// VM3232:31 true
// undefined