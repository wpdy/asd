// const mongoose = require('mongoose')
const Course = require('../models/Course')
const User = require('../models/User')

//siunciu requesta 
//gaunu responsa
const createUser = async(req, res) => {

    if(!req.body.name || !req.body.about) res.status(404).send("Not Found")

    const user = new User({
        name: req.body.name,
        about: req.body.about
    })

    const result = await user.save()
    res.status(200).send(result)
}


const listCourses = async(req, res) => {
    try {
        const courses = await Course
        .find()
        .populate("author", "name about -_id")
        // .select('name')
        res.status(200).json(courses);
    } 

    catch (error) {
        res.status(404).send(error.message);
    }
}



module.exports = {
    createUser,
    listCourses
}