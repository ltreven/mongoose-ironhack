const chalk = require("chalk")

let p1 = new Promise((resolve, reject) => {
    let a = 2
    if (a % 2 == 0) {
        resolve("es parell")
    } else {
        reject("es estrany")
    }
})

console.log(chalk.yellow("Normal Promise"))

p1.then(msg => console.log(chalk.green("then. msg: "), msg))
.catch(err=> console.log(chalk.red("catch: "), err))
.finally(()=> console.log("finally"))

console.log("fim")

let p2 = new Promise((resolve, reject) => {
    resolve("ok with p2")
})
let p3 = new Promise((resolve, reject) => {
    reject("not ok with p3")
})
let p4 = new Promise((resolve, reject) => {
    resolve("ok with p4")
})

console.log(chalk.yellow("Promise ALL"))
Promise.all([p1, p2,p3,p4])
.then(msg => console.log(chalk.green("then ALL: "), msg))
.catch(msg => console.log(chalk.red("catch ALL: "), msg))

console.log(chalk.yellow("Promise RACE"))
Promise.race([p1, p2,p3,p4])
.then(msg => console.log(chalk.green("then RACE: "), msg))
.catch(msg => console.log(chalk.red("catch RACE: "), msg))
