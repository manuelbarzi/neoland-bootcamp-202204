function Student(name, age, gender) {
    this.name = name
    this.age = age
    this.gender = gender
}

Student.prototype.getIcon = function() {
    return this.gender === 'female'? '👩🏻‍🎓' : '👨🏻‍🎓'
}

Student.prototype.study = function() {
    //return this.name + ': ' + (this.gender === 'female'? '👩🏻‍🎓' : '👨🏻‍🎓') + ' 📖'
    return this.name + ': ' + this.getIcon() + ' 📖'
}

Student.prototype.exam = function() {
    //return this.name + ': ' + (this.gender === 'female'? '👩🏻‍🎓' : '👨🏻‍🎓') + ' 🧾'
    return this.name + ': ' + this.getIcon() + ' 🧾'
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
// VM3905:26 Wendy: 👩🏻‍🎓 📖
// VM3905:27 Peter: 👨🏻‍🎓 📖
// VM3905:29 Wendy: 👩🏻‍🎓 🧾
// VM3905:30 Peter: 👨🏻‍🎓 🧾
// VM3905:32 true
// VM3905:33 true
// undefined