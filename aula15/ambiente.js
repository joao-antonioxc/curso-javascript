let num = [1,3,6]
num.push(4)
num[1] = 2
// console.log(`Nosso array possui ${num.length} elementos e são : ${num.sort()}`)
for (let pos = 0; pos < num.length; pos++) {
    console.log(num[pos])
}
for (let pos in num.sort()) {
    console.log(`A posição ${pos} possui o valor ${num[pos]}`)
}
console.log(num.indexOf(4))