const mongoose = require('mongoose');


const AuthorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required:[true, "Name is required!"],
        minlength: [3, "Name must be at least 2 characters long"]
    },
    lastName: {
        type: String,
        required:[true, "Name is required!"],
        minlength: [3, "Name must be at least 2 characters long"]
    },
    bestBook: {
        type: String,
        required: [true, " What's their best work "],
        minlength: [1, "Description must be at least 1 character"]
    },
    
})

//register the above code at a table in mongodb
const Author = mongoose.model("Author", AuthorSchema )

module.exports = Author;