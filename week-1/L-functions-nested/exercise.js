var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function upperCase(mentor) {
  return mentor.toUpperCase();
}
function shouty(mentor) {
  var upper = upperCase(mentor);
  return "HELLO " + upper;
}

var a = shouty(mentor1);
var b = shouty(mentor2);
var c = shouty(mentor3);
var d = shouty(mentor4);
var e = shouty(mentor5);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);