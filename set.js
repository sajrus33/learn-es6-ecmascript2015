const names = new Set();
names.add("Shaun").add("Ryu").add("Crystal");
console.log(names);

names.delete("Shaun");
console.log(names);

names.clear();
console.log(names);

const ninjas = ["ryu", "shaun", "ryu", "yoshi", "ryu", "crystal", "shaun"];
const ninjasUniqueSet = new Set(ninjas);
console.log(ninjasUniqueSet);
const ninjasUniqueArray = [...ninjasUniqueSet];
console.log(ninjasUniqueArray);