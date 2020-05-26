const express = require("express")
const hbs = require("hbs")
const mongoose = require("mongoose")
// impoertar el MODELO
const Student = require("./models/Student")

const app = express()

app.set("view engine", "hbs")

// Opciones de middleware para tratar/leer el 
// BODY de una requicisión HTTP Request con método POST
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// json
// body-parser (npm)
// raw
// urlencoder

// configurar mongoose / conectar mongoose
mongoose.connect("mongodb://localhost/studentsdb", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( db => console.log("conectado al DB: ", db.connection.name)  )
.catch( err => console.log("Ha pasado un error: ", err))

//mongoose.connection.on('connected', () => console.log("se ha conectado"))
//mongoose.connection.on('disconnected', () => console.log("mongo disconnected"))
//process.on('SIGINT', () => console.log("Cerrando Node!!"))


app.get("/", (req, res) => {
    res.render("index")
})

app.get("/listar", (req, res) => {
    console.log(req.query)
    const filter = {}
    if (req.query.age) {
        filter.age = req.query.age
    }
    Student.find(req.query)
    .then(data => {
        //console.log(data[0].hablar(0))
        res.render("listar", {data})

    })
})

app.post("/save-student", (req, res) => {
    // recoger los datos
    if (req.body._id) {
        Student.findByIdAndUpdate(req.body._id, req.body)
        .then( () => res.render("success", {message: "Student updated successfdully"}) )
        .catch(err => res.render("error", err))

        // Student.findById(req.body._id).then(student => {
        //     student.name = req.body.name
        //     student.surname = req.body.surname
        //     student.age = req.body.age

        //     // SAVE existing
        //     student.save()
        //     .then(savedStudent => res.render("success", {message: "Student updated successfdully"}))
        //     .catch(err => res.render("error"))
        // }).catch(err => res.render("error", err))
    } else {
        Student.create(req.body)
        .then( () => res.render("success", {message: "Student created successfdully"}) )
        .catch(err => res.render("error", err))
        // instanciamos un objeto tipo Student
        // const esteEstudiante = new Student()
        // esteEstudiante.name = req.body.name
        // esteEstudiante.surname = req.body.surname
        // esteEstudiante.age = req.body.age
        
        // // SAVE New (or CREATE)
        // esteEstudiante.save()
        // .then( () => res.render("success", {message: "Student created successfdully"}) )
        // .catch(err => res.render("error", err))

    }

    
})

app.get("/delete-student", (req, res) => {
    Student.findByIdAndRemove(req.query._id)  
    .then(student => res.render("success", { message: "Student deleted successfully"}))  
    .catch(err => res.render("error", err))
})

app.get("/edit-student", (req, res) => {
    Student.findById(req.query._id)
    .then(student => res.render("edit", student))
    .catch(err => res.render("error", err))
})


app.listen(3000, () => console.log("Servidor en marcha!"))