const mongoose = require("mongoose")

const Schema = mongoose.Schema

function hacerMayuscula(text) {
    return text.toUpperCase();
}

const studentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        set: hacerMayuscula
    },
    age: Number,
    debeLibros: Boolean,
    avatarUrl: {
        type: String,
        default: 'https://image.flaticon.com/icons/svg/194/194931.svg'
    }
})
studentSchema.methods.hablar = function() {
    return `Hi. My name is ${this.name}`
}

const Student = mongoose.model('Student', studentSchema)

module.exports = Student