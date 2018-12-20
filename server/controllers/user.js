const User = require('../models/user');

exports.create = function(req, res) {
    let user = new User({
        name: req.body.name,
        age: req.body.age
    });

    user.save(() => {
        res.send('Saved!');
    });
};

exports.get = (req, res) => {
    User.find((error, students) => {
        res.send(students);
    })
};