module.exports = {
    construct: function(self, options) {

        self.addUser = function(req, firstName, lastName, username, email ,password, groupname, callback) {
            // find the group
            return self.apos.groups.find(req, { title: groupname }).permission(false).toObject(function(err, group) {
                if (err) {
                    return callback(err);
                }
                if (!group) {
                    return callback('That group does not exist.');
                }
                return self.apos.users.insert(req, {
                    username: username,
                    password: password,
                    title: username,
                    email: email,
                    lastName: lastName,
                    firstName: firstName,
                    groupIds: [ group._id ]
                }, { permissions: false }, callback);
            });
        };

        self.route('post', 'submit', function(req, res) {
            console.log("Register route called");
            console.log(req.body);

            //Basic validation logic (DB validation is done automatically on addUser)

            var errors = [];

            if(req.body.username.length<=0){
                errors.push(req.__('Please insert a username!'));

            }

            if(req.body.email.length<=0){
                errors.push(req.__("Please insert an email!"));
            }

            if(req.body.password1.length<=0){
                errors.push(req.__("Please insert a password!"));
            }

            if(req.body.password2.length<=0){
                errors.push(req.__("Please insert a confirmation password!"));
            }

            if(req.body.password2.toString() !== req.body.password1.toString()){
                errors.push(req.__("Your confirmation password does not match!"));
            }

            if(errors.length>0){

                console.log("Validation failed")

                res.send({success:false,errors:errors})

            }else {

                console.log("Attempting to add user");
                self.addUser(req, req.body.firstName, req.body.lastName, req.body.username, req.body.email, req.body.password1, 'penUser', function (err) {
                    if (err) {
                        console.log("Error:", err);

                        switch (err.code) {
                            case 11000:
                                res.send({success: false, errors: [req.__('This username or email is already taken!')]});
                                break;
                            default:
                                res.send({success: false, errors: [err.toString()]});
                        }

                    } else {
                        console.log("User added");
                        res.send({success: true});
                    }


                });

            }
        });





    }
};