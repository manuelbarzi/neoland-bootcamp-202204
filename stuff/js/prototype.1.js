function Student(name, age, gender) {
	this.name = name
	this.age = age
	this.gender = gender

	this.study = function() {
		return this.name + ': ' + '🤓 📖'
	}
}

w = new Student('Wendy', 32, 'female')
p = new Student('Peter', 24, 'male')

log = console.log

log(w.study())
log(p.study())
// VM1981:16 Wendy: 🤓 📖
// VM1981:17 Peter: 🤓 📖

w.study
// ƒ () {
//         return this.name + ': ' + '🤓 📖'
	// }
p.study
// ƒ () {
//         return this.name + ': ' + '🤓 📖'
//     }
w.study === p.study
// false