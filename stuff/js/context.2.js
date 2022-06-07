console.clear()

var socks = { brand: 'Adidas', price: 10, qty: 3 }
var tshirts = { brand: 'Benetton', price: 30, qty: 2 }
var shoes = { brand: 'Nike', price: 90, qty: 1 }

function add(subtotal) {
    return this.price * this.qty + subtotal
}

var subtotal = 0
subtotal = add.call(socks, subtotal)
subtotal = add.call(tshirts, subtotal)
subtotal = add.call(shoes, subtotal)

console.log(subtotal)