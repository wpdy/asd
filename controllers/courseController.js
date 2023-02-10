const Course = require("../models/Course")

const createCourse = async (req, res) => {

    if(!req.body.name || !req.body.author) {
        res.status(404).send("Not Found")
    }

    const course = await Course.create({
        name: req.body.name,
        author: req.body.author
    })
    // const result
    res.status(200).json(course)

}

module.exports = {
    createCourse
}