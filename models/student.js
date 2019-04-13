const mongoose = require("mongoose");

var studentSchema = mongoose.Schema(
    {
        "name":String,
        "age":String,
        "subject":String,
        "University":String,
        "Gender":String,
        "Balance":String
    }
);
module.exports = mongoose.model('student',studentSchema);

