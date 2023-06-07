var a: number = 20;

if (a < 30) {
	a += 10;
}

console.log("Hello world!")

var tuple: [number, string] = [1, "Arya"]

console.log(tuple);

enum Size { Small = 1, Medium, Large }

let mySize: Size = Size.Large

function test(params: number[]) {
	params.forEach(n => n.valueOf)
}
