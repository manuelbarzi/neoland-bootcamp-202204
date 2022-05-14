o = {}
// {}
o.name = 'O'
// 'O'
o.salute = function(to) {
	return 'hello ' + to
}
// ƒ (to) {
//     return 'hello ' + to
// }
// o
// {name: 'O', salute: ƒ}
o.salute('P')
// 'hello P'
o = {
	name: 'O',
	salute(to) {
		return 'hello ' + to
	}
}
// {name: 'O', salute: ƒ}
o.salute('P')
// 'hello P'