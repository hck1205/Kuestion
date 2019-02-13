const User = require('../models/user');

exports.join = (req, res) => {
    console.log('test')
    // User.find((error, students) => {
    //     res.send(students);
    // })
};

exports.login = (req, res) => {
    let userId = req.body.id
    let userPw = req.body.pw

}

exports.create = (req, res) => {
    let user = new User({
        name: req.body.name,
        age: req.body.age
    });

    user.save(() => {
        res.send('Saved!');
    });
};

exports.get = (req, res) => {
    console.log()
    // User.find((error, students) => {
    //     res.send(students);
    // })
};

