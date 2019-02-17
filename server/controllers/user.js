const User = require('../models/user');

exports.checkdup = (req, res) => {
    // switch(req.body)
    console.log(req.body)
    switch(req.body.checkField) {
        case "id": {

        }
        break;
        case "nickname": {

        }
        break;
        case "email": {

        }
        break;
    }
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

