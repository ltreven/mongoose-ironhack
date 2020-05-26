const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/studentsdb", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( db => console.log("conectado al DB: ", db.connection.name)  )
.catch( err => console.log("Ha pasado un error: ", err))

mongoose.connection.on('disconnected', () => console.log("mongo disconnected"))

const studentSchema = new mongoose.Schema({
    name: String,
    surname: String,
    age: Number,
    debeLibros: Boolean,
    avatarUrl: String,
})
const Student = mongoose.model('Student', studentSchema)

const filter = {}
Student.find(filter)
.then(data => {
    //console.log(data[0].hablar(0))
    console.log("first round", data.length)
    mongoose.connection.close()

})


Student.find(filter)
.then(data => {
    //console.log(data[0].hablar(0))
    console.log("second round", data.length)

})
