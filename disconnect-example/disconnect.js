const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/studentsdb", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then( db => console.log("conectado al DB: ", db.connection.name)  )
.catch( err => console.log("Ha pasado un error: ", err))

mongoose.connection.on('disconnected', () => console.log("Mongoose - disconnected"))

const studentSchema = new mongoose.Schema({
    name: String,
    surname: String,
    age: Number,
})

const Student = mongoose.model('Student', studentSchema)

console.log("Empezando...")

Student.find({})
.then(student => {
    console.log("Estudents encontrados! ", student.length)
    mongoose.connection.close();
})
.catch(err => console.log("Se reprodujo un errorr! ", err))

console.log("Siguiendo...")

Student.findById('5ec92e824ac1fb335ff4fc5e')
.then(student => {
    console.log("Flor encontrada! ", student)
    mongoose.connection.close();
})
.catch(err => console.log("Se reprodujo un errorr! ", err))

console.log("FIN...")

