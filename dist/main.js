"use strict";
var a = 20;
if (a < 30) {
    a += 10;
}
console.log("Hello world!");
var tuple = [1, "Arya"];
console.log(tuple);
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let mySize = Size.Large;
function test(params) {
    params.forEach(n => n.valueOf);
}
//# sourceMappingURL=main.js.map